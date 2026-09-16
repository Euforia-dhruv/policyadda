import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { clientIp, rateLimit } from "@/lib/utils";
import { sameOrigin } from "@/lib/security";

export const runtime = "nodejs";

/**
 * Sign-in route. When Supabase is configured this authenticates via Supabase
 * Auth (server-side) and sets session cookies through the Next.js response.
 * Without credentials it returns a clear "not configured" error instead of
 * pretending to work.
 */
export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const ip = clientIp(req);
  if (!rateLimit(`login:${ip}`, 10, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

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
  if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
    return NextResponse.json({ error: "missing_credentials" }, { status: 422 });
  }

  const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
  if (error) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}