import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { edgeAllow, clientIp, isSuspiciousUa } from "@/lib/rate-limit";

/** Per-path rate limits (requests per IP per minute). */
function limitFor(pathname: string): { max: number; windowMs: number } {
  if (pathname.startsWith("/api/")) return { max: 20, windowMs: 60_000 };
  if (pathname.startsWith("/admin")) return { max: 30, windowMs: 60_000 };
  if (pathname === "/login" || pathname === "/signup") return { max: 15, windowMs: 60_000 };
  if (pathname === "/api/auth/callback") return { max: 10, windowMs: 60_000 };
  // General page traffic — generous enough for real users, tight for floods
  return { max: 120, windowMs: 60_000 };
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = clientIp(request);
  const ua = request.headers.get("user-agent");

  // ── Edge anti-flood: run BEFORE any auth/DB work ──
  if (isSuspiciousUa(ua) && pathname.startsWith("/api/")) {
    return new NextResponse(null, { status: 429, headers: { "Retry-After": "60" } });
  }

  // Block common scanner / exploit probe paths (never valid for this app)
  const probe =
    /(\.\.[/\\])|(wp-admin|wp-login|phpmyadmin|\.env|\.git\/|\.DS_Store)|(<script|javascript:)/i;
  if (probe.test(decodeURIComponent(pathname))) {
    return new NextResponse(null, { status: 403 });
  }

  const { max, windowMs } = limitFor(pathname);
  if (!edgeAllow(`mw:${ip}:${pathname.startsWith("/api") ? "api" : pathname}`, max, windowMs)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(Math.ceil(windowMs / 1000)),
        "Cache-Control": "no-store",
      },
    });
  }

  let response = NextResponse.next({ request: { headers: request.headers } });

  // Auth-gated paths only — skip Supabase round-trip on public pages
  const needsAuthCheck =
    pathname.startsWith("/admin") || pathname === "/login" || pathname === "/signup";
  if (!needsAuthCheck) return response;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return request.cookies.get(name)?.value; },
        set(name: string, value: string, options: any) {
          request.cookies.set({ name, value, ...options });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          request.cookies.set({ name, value: "", ...options });
          response.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (pathname.startsWith("/admin")) {
      if (pathname === "/admin") {
        if (user) return NextResponse.redirect(new URL("/admin/dashboard", request.url));
        return response;
      }

      if (!user) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role_code")
        .eq("user_id", user.id)
        .single();

      const role = profile?.role_code;
      if (role !== "admin" && role !== "super_admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    if ((pathname === "/login" || pathname === "/signup") && user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch {
    // If supabase is unreachable, let the request through
  }

  return response;
}

export const config = {
  // Rate-limit all app traffic; skip immutable static assets
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
