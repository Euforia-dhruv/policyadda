import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_SESSION = "pa_admin_session";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "policyadda2024";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(ADMIN_SESSION)?.value;

    if (pathname === "/admin" && token === ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    if (pathname !== "/admin" && token !== ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
