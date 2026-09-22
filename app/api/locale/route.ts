import { NextRequest, NextResponse } from "next/server";
import { isLocale, setLocaleCookie } from "@/lib/i18n";

export async function GET(req: NextRequest) {
  const l = req.nextUrl.searchParams.get("l");
  if (!isLocale(l)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }
  const url = new URL("/", req.url);
  return NextResponse.redirect(url, {
    headers: { "Set-Cookie": setLocaleCookie(l) },
  });
}
