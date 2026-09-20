import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });

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

  const { pathname } = request.nextUrl;

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
      .select("role")
      .eq("id", user.id)
      .single();

    const role = profile?.role;
    if (role !== "admin" && role !== "super_admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if ((pathname === "/login" || pathname === "/signup") && user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/signup"],
};
