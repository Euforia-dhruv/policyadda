import { NextResponse } from "next/server";
import { getServerSupabase, getServiceSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isManager } from "@/lib/roles";
import { sameOrigin } from "@/lib/security";

export const runtime = "nodejs";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }
  const sb = await getServerSupabase();
  if (!sb) return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });

  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Staff only may list team members.
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !["sales", "support", "manager", "admin", "super_admin"].includes(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { data, error } = await sb
      .from("profiles")
      .select("user_id, full_name, role_code")
      .in("role_code", ["sales", "support", "manager"]);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

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

  // Verify manager/admin
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !isManager(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { assignToUserId } = body as { assignToUserId?: string };
  if (typeof assignToUserId !== "string" || !assignToUserId) {
    return NextResponse.json({ error: "assignToUserId_required" }, { status: 400 });
  }

  const { id } = await params;

  const svc = getServiceSupabase();
  if (!svc) return NextResponse.json({ error: "service_unavailable" }, { status: 503 });

  try {
    const now = new Date().toISOString();

    // The application must exist before we assign anyone to it.
    const { data: app } = await svc
      .from("applications")
      .select("id")
      .eq("id", id)
      .maybeSingle();
    if (!app) return NextResponse.json({ error: "not_found" }, { status: 404 });

    // The assignee must be an existing staff member (sales/support/manager).
    const { data: assignee } = await svc
      .from("profiles")
      .select("user_id, role_code")
      .eq("user_id", assignToUserId)
      .in("role_code", ["sales", "support", "manager"])
      .maybeSingle();
    if (!assignee) {
      return NextResponse.json({ error: "invalid_assignee" }, { status: 422 });
    }

    const { data: updated, error: updateErr } = await svc
      .from("applications")
      .update({ assigned_to: assignToUserId, assigned_at: now, updated_at: now })
      .eq("id", id)
      .select()
      .single();
    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });

    // Deactivate previous active assignments
    await svc
      .from("customer_assignments")
      .update({ active: false })
      .eq("application_id", id)
      .eq("active", true);

    // Create new assignment record
    const { error: assignErr } = await svc
      .from("customer_assignments")
      .insert({
        application_id: id,
        employee_id: assignToUserId,
        assigned_by: user.id,
        active: true,
        assigned_at: now,
      });
    if (assignErr) return NextResponse.json({ error: assignErr.message }, { status: 500 });

    // Audit: record the reassignment
    await svc.from("audit_logs").insert({
      actor_id: user.id,
      action: "app:assign",
      entity_type: "application",
      entity_id: id,
      meta: { assigned_to: assignToUserId },
    });

    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
