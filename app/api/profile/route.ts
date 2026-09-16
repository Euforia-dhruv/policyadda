import { NextResponse } from "next/server";
import { getServerSupabase, getServiceSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { isValidIndianPhone } from "@/lib/utils";
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

  const { data, error } = await sb
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { fullName, phone, city } = body as { fullName?: string; phone?: string; city?: string };

  // Validate allowed fields only — no role_code or other privileged columns
  const updates: Record<string, unknown> = {};
  if (fullName !== undefined) {
    const name = String(fullName).trim();
    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "name_invalid" }, { status: 422 });
    }
    updates.full_name = name;
  }
  if (phone !== undefined) {
    const p = String(phone).trim();
    if (p !== "" && !isValidIndianPhone(p)) {
      return NextResponse.json({ error: "phone_invalid" }, { status: 422 });
    }
    updates.phone = p || null;
  }
  if (city !== undefined) {
    const c = String(city).trim();
    if (c.length > 80) {
      return NextResponse.json({ error: "city_invalid" }, { status: 422 });
    }
    updates.city = c || null;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "no_updates" }, { status: 400 });
  }

  // Use service-role to bypass RLS; the authenticated session is already verified
  // above and we restrict the update to exactly the columns listed.
  const svc = getServiceSupabase();
  if (!svc) return NextResponse.json({ error: "service_unavailable" }, { status: 503 });

  const { data, error } = await svc
    .from("profiles")
    .update(updates)
    .eq("user_id", user.id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
