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

    // Fetch application
    const { data: app, error: appErr } = await sb
      .from("applications")
      .select("*")
      .eq("id", id)
      .single();
    if (appErr || !app) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    // Access check: customer owns it or user is staff
    if (!isStaff && app.customer_id !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Fetch policy name
    let policyName: string | null = null;
    if (app.policy_id) {
      const { data: policy } = await sb
        .from("policies")
        .select("name")
        .eq("id", app.policy_id)
        .single();
      policyName = policy?.name ?? null;
    }

    // Fetch current status label
    let statusLabel: Record<string, unknown> | null = null;
    if (app.status_code) {
      const { data: status } = await sb
        .from("application_statuses")
        .select("label, description")
        .eq("code", app.status_code)
        .single();
      statusLabel = status?.label ?? null;
    }

    // Fetch assigned staff name
    let assignedName: string | null = null;
    if (app.assigned_to) {
      const { data: assignee } = await sb
        .from("profiles")
        .select("full_name")
        .eq("user_id", app.assigned_to)
        .single();
      assignedName = assignee?.full_name ?? null;
    }

    // Fetch status history / timeline
    const { data: history } = await sb
      .from("application_status_history")
      .select("*")
      .eq("application_id", id)
      .order("created_at", { ascending: true });

    return NextResponse.json({
      application: app,
      policyName,
      statusLabel,
      assignedName,
      history: history ?? [],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
