import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isMutationStaff, sameOrigin } from "@/lib/security";

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

  // Verify staff
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !isMutationStaff(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  // Staff (non manager/admin) may only act on tickets assigned to them.
  const managerLevel = ["manager", "admin", "super_admin"].includes(profile.role_code);
  if (!managerLevel) {
    const { data: ticket } = await sb
      .from("support_tickets")
      .select("assigned_to")
      .eq("id", id)
      .single();
    if (!ticket) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (ticket.assigned_to !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { statusCode } = body as { statusCode?: string };
  if (typeof statusCode !== "string" || !statusCode) {
    return NextResponse.json({ error: "statusCode_required" }, { status: 400 });
  }

  // Validate the status code is a known ticket status before writing.
  const { data: known } = await sb
    .from("ticket_statuses")
    .select("code")
    .eq("code", statusCode)
    .maybeSingle();
  if (!known) {
    return NextResponse.json({ error: "invalid_status" }, { status: 422 });
  }

  try {
    const { data: updated, error: updateErr } = await sb
      .from("support_tickets")
      .update({ status_code: statusCode, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });
    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
