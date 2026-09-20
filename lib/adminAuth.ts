import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "policyadda2024";
const SESSION_COOKIE = "pa_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

export function verifySession(req: NextRequest): boolean {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  return token === ADMIN_PASSWORD;
}

export function createSession(): NextResponse {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, ADMIN_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
  return res;
}

export function destroySession(): NextResponse {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(SESSION_COOKIE);
  return res;
}
