import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get(name: string) { return request.cookies.get(name)?.value; }, set(name: string, value: string, options: any) { request.cookies.set({ name, value, ...options }); response.cookies.set({ name, value, ...options }); }, remove(name: string, options: any) { request.cookies.set({ name, value: "", ...options }); response.cookies.set({ name, value: "", ...options }); } } }
  );
  
  const { data: { user } } = await supabase.auth.getUser();
  
  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
    // Get user role
    const { data: profile } = await supabase.from("profiles").select("role_code").eq("user_id", user.id).single();
    const role = profile?.role_code || "customer";
    const path = request.nextUrl.pathname;
    
    // Staff-only routes
    if ((path.startsWith("/dashboard/admin") || path.includes("/admin/")) && !["super_admin", "admin"].includes(role)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    if (path.startsWith("/dashboard/team") && !["super_admin", "admin", "manager"].includes(role)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  
  return response;
}

export const config = { matcher: ["/dashboard/:path*"] };
