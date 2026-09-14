import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export const runtime = "nodejs";

export async function POST() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "auth_not_configured" }, { status: 503 });
  }
  const sb = await getServerSupabase();
  if (!sb) return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });
  await sb.auth.signOut();
  return NextResponse.json({ ok: true });
}