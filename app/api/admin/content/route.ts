import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/adminAuth";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const CONTENT_PATH = join(process.cwd(), "content", "siteContent.json");

function readContent() {
  return JSON.parse(readFileSync(CONTENT_PATH, "utf-8"));
}

function writeContent(data: Record<string, unknown>) {
  writeFileSync(CONTENT_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET(req: NextRequest) {
  if (!verifySession(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(readContent());
}

export async function PUT(req: NextRequest) {
  if (!verifySession(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  writeContent(body);
  return NextResponse.json({ ok: true });
}
