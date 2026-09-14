import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export const runtime = "nodejs";

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

  // Verify staff
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !["sales", "support", "manager", "admin"].includes(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { statusCode } = body as { statusCode?: string };
  if (!statusCode) {
    return NextResponse.json({ error: "statusCode_required" }, { status: 400 });
  }

  const { id } = await params;

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
