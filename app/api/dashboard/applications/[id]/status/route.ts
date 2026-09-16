import { NextResponse } from "next/server";
import {
  getServerSupabase,
  getServiceSupabase,
  isSupabaseConfigured,
} from "@/lib/supabase/client";
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

  // Staff (non manager/admin) may only act on applications assigned to them.
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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { statusCode, note } = body as { statusCode?: string; note?: string };
  if (typeof statusCode !== "string" || !statusCode) {
    return NextResponse.json({ error: "statusCode_required" }, { status: 400 });
  }
  if (note !== undefined && typeof note !== "string") {
    return NextResponse.json({ error: "note_invalid" }, { status: 422 });
  }
  if (note && note.length > 2000) {
    return NextResponse.json({ error: "note_too_long" }, { status: 422 });
  }

  // Validate the status code is a known application status before writing.
  const { data: known } = await sb
    .from("application_statuses")
    .select("code")
    .eq("code", statusCode)
    .maybeSingle();
  if (!known) {
    return NextResponse.json({ error: "invalid_status" }, { status: 422 });
  }

  const svc = getServiceSupabase();
  if (!svc) return NextResponse.json({ error: "service_unavailable" }, { status: 503 });

  try {
    // Update status via service role (fires the trigger that records history)
    const { data: updated, error: updateErr } = await svc
      .from("applications")
      .update({ status_code: statusCode, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 });

    // Record who made the change (service-role writes bypass auth.uid() in the trigger).
    await svc
      .from("application_status_history")
      .update({ changed_by: user.id })
      .eq("application_id", id)
      .eq("to_status", statusCode)
      .is("changed_by", null)
      .order("created_at", { ascending: false })
      .limit(1);

    // If a note was provided, fetch the latest history record and update its note
    if (note && note.trim()) {
      const { data: latestHistory } = await svc
        .from("application_status_history")
        .select("id")
        .eq("application_id", id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (latestHistory) {
        await svc
          .from("application_status_history")
          .update({ note: note.trim() })
          .eq("id", latestHistory.id);
      }
    }

    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
