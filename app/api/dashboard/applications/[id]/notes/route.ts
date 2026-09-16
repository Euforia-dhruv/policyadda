import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isMutationStaff, sameOrigin } from "@/lib/security";

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

  // Staff only — notes are internal.
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !isMutationStaff(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  // Staff (non manager/admin) may only read notes for applications assigned to them.
  const managerLevel = ["manager", "admin", "super_admin"].includes(profile.role_code);
  if (!managerLevel) {
    const { data: app } = await sb
      .from("applications")
      .select("assigned_to")
      .eq("id", id)
      .single();
    if (!app) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (app.assigned_to !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  try {
    const { data, error } = await sb
      .from("application_status_history")
      .select("*, profiles:changed_by(full_name)")
      .eq("application_id", id)
      .not("note", "is", null)
      .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const notes = (data ?? []).map((row: Record<string, unknown>) => ({
      id: row.id,
      note: row.note,
      toStatus: row.to_status,
      changedBy: (row.profiles as Record<string, unknown> | null)?.full_name ?? "System",
      createdAt: row.created_at,
    }));

    return NextResponse.json(notes);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

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

  // Verify staff
  const { data: profile } = await sb
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  if (!profile || !isMutationStaff(profile.role_code)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { note } = body as { note?: string };
  if (typeof note !== "string" || !note.trim()) {
    return NextResponse.json({ error: "note_required" }, { status: 400 });
  }
  if (note.trim().length > 2000) {
    return NextResponse.json({ error: "note_too_long" }, { status: 422 });
  }

  const { id } = await params;

  // Staff (non manager/admin) may only add notes for assigned applications.
  const managerLevel = ["manager", "admin", "super_admin"].includes(profile.role_code);
  if (!managerLevel) {
    const { data: app } = await sb
      .from("applications")
      .select("assigned_to")
      .eq("id", id)
      .single();
    if (!app) return NextResponse.json({ error: "not_found" }, { status: 404 });
    if (app.assigned_to !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  try {
    // Get current status of the application
    const { data: app } = await sb
      .from("applications")
      .select("status_code")
      .eq("id", id)
      .single();

    const { data: created, error: insertErr } = await sb
      .from("application_status_history")
      .insert({
        application_id: id,
        to_status: app?.status_code ?? "submitted",
        changed_by: user.id,
        note: note.trim(),
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
