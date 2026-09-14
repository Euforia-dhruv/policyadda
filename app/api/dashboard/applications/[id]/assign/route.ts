import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

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
  if (!profile || !["manager", "admin"].includes(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { assignToUserId } = body as { assignToUserId?: string };
  if (!assignToUserId) {
    return NextResponse.json({ error: "assignToUserId_required" }, { status: 400 });
  }

  const { id } = await params;

  try {
    const now = new Date().toISOString();

    const { data: updated, error: updateErr } = await sb
      .from("applications")
      .update({ assigned_to: assignToUserId, assigned_at: now, updated_at: now })
      .eq("id", id)
      .select()
      .single();
    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });

    // Deactivate previous active assignments
    await sb
      .from("customer_assignments")
      .update({ active: false })
      .eq("application_id", id)
      .eq("active", true);

    // Create new assignment record
    const { error: assignErr } = await sb
      .from("customer_assignments")
      .insert({
        application_id: id,
        employee_id: assignToUserId,
        assigned_by: user.id,
        active: true,
        assigned_at: now,
      });
    if (assignErr) return NextResponse.json({ error: assignErr.message }, { status: 500 });

    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
