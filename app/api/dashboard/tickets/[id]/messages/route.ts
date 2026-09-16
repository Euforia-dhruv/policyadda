import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isMutationStaff, sameOrigin } from "@/lib/security";

export const runtime = "nodejs";

export async function POST(
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

  const { id } = await params;

  // Verify access: customer owns ticket or is staff
  const { data: ticket } = await sb
    .from("support_tickets")
    .select("customer_id, assigned_to")
    .eq("id", id)
    .single();
  if (!ticket) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();

  const isStaff = isMutationStaff(profile?.role_code || "customer");
  if (!isStaff && ticket.customer_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Staff (non manager/admin) may only reply on tickets assigned to them.
  if (isStaff && !["manager", "admin", "super_admin"].includes(profile?.role_code || "")) {
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

  const { body: msgBody } = body as { body?: string };
  if (typeof msgBody !== "string" || !msgBody.trim()) {
    return NextResponse.json({ error: "body_required" }, { status: 400 });
  }
  if (msgBody.trim().length > 4000) {
    return NextResponse.json({ error: "body_too_long" }, { status: 422 });
  }

  try {
    const { data: created, error: insertErr } = await sb
      .from("support_messages")
      .insert({
        ticket_id: id,
        sender_id: user.id,
        sender_role: profile?.role_code ?? "customer",
        body: msgBody.trim(),
      })
      .select()
      .single();

    if (insertErr) return NextResponse.json({ error: insertErr.message }, { status: 500 });
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
