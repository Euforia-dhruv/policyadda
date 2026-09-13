import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export const runtime = "nodejs";

/**
 * Sign-in route. When Supabase is configured this authenticates via Supabase
 * Auth (server-side) and sets session cookies through the Next.js response.
 * Without credentials it returns a clear "not configured" error instead of
 * pretending to work.
 */
export async function POST(req: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "auth_not_configured", message: "Authentication is not active yet. Supabase credentials are required." },
      { status: 503 }
    );
  }
  const sb = await getServerSupabase();
  if (!sb) {
    return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });
  }

  const { email, password } = (await req.json().catch(() => ({}))) as { email?: string; password?: string };
  if (!email || !password) {
    return NextResponse.json({ error: "missing_credentials" }, { status: 422 });
  }

  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}