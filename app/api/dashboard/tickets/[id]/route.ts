import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }
  const sb = await getServerSupabase();
  if (!sb) return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });

  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  try {
    // Fetch profile to check role
    const { data: profile } = await sb
      .from("profiles")
      .select("role_code")
      .eq("user_id", user.id)
      .single();

    const isStaff = profile && ["sales", "support", "manager", "admin"].includes(profile.role_code);

    // Fetch ticket
    const { data: ticket, error: ticketErr } = await sb
      .from("support_tickets")
      .select("*")
      .eq("id", id)
      .single();
    if (ticketErr || !ticket) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    // Access check: customer owns ticket or is staff
    if (!isStaff && ticket.customer_id !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Fetch messages with sender profile
    const { data: messages } = await sb
      .from("support_messages")
      .select("*, profiles:sender_id(full_name, role_code)")
      .eq("ticket_id", id)
      .order("created_at", { ascending: true });

    return NextResponse.json({
      ticket,
      messages: messages ?? [],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
