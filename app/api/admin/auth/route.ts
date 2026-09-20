import { NextRequest, NextResponse } from "next/server";
import { verifySession, createSession, destroySession } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  if (body.action === "logout") {
    return destroySession();
  }

  if (body.password === (process.env.ADMIN_PASSWORD || "policyadda2024")) {
    return createSession();
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ authenticated: verifySession(req) });
}
