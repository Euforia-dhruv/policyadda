import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { edgeAllow, clientIp } from "@/lib/rate-limit";

export async function GET(request: Request) {
  const ip = clientIp(request);
  if (!edgeAllow(`auth-cb:${ip}`, 10, 60_000)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": "60" },
    });
  }

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  // Only allow relative redirects (block open redirect via ?next=)
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${safeNext}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
