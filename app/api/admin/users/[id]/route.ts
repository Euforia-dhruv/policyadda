import { NextResponse } from "next/server";
import { getServerSupabase, getServiceSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isAdmin } from "@/lib/roles";
import { sameOrigin } from "@/lib/security";

export const runtime = "nodejs";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }
  const sb = await getServerSupabase();
  if (!sb) return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });

  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Verify admin
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !isAdmin(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { roleCode } = body as { roleCode?: string };
  if (!roleCode) {
    return NextResponse.json({ error: "roleCode_required" }, { status: 400 });
  }

  const { id } = await params;

  const allowedRoles = ["customer", "sales", "support", "manager", "admin"];
  if (!allowedRoles.includes(roleCode)) {
    return NextResponse.json({ error: "invalid_role_code" }, { status: 400 });
  }

  // Prevent self-demotion to a non-admin role (would lock the account out of admin).
  if (id === user.id && roleCode !== "admin" && roleCode !== "super_admin") {
    return NextResponse.json({ error: "cannot_demote_self" }, { status: 400 });
  }

  // Only a super_admin may modify another super_admin's profile.
  const { data: targetProfile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", id)
    .maybeSingle();
  if (!targetProfile) return NextResponse.json({ error: "not_found" }, { status: 404 });
  if (targetProfile.role_code === "super_admin" && profile.role_code !== "super_admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const svc = getServiceSupabase();
    if (!svc) return NextResponse.json({ error: "service_unavailable" }, { status: 503 });

    const { data: updated, error: updateErr } = await svc
      .from("profiles")
      .update({ role_code: roleCode, updated_at: new Date().toISOString() })
      .eq("user_id", id)
      .select()
      .single();

    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });
    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
