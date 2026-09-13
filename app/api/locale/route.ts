import { NextResponse } from "next/server";
import { locales, setLocaleCookie } from "@/lib/i18n";

export const runtime = "edge";

function targetLocale(candidate: string | null | undefined): string {
  return locales.includes(candidate as never) ? (candidate as string) : "en";
}

function respond(req: Request, locale: string) {
  const origin = new URL(req.url).origin;
  const res = NextResponse.redirect(new URL("/", origin).toString(), 302);
  res.headers.append("set-cookie", setLocaleCookie(locale as never));
  return res;
}

export async function GET(req: Request) {
  const l = new URL(req.url).searchParams.get("l");
  return respond(req, targetLocale(l));
}

export async function POST(req: Request) {
  const { locale } = (await req.json().catch(() => ({}))) as { locale?: string };
  return respond(req, targetLocale(locale));
}