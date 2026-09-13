import { NextResponse } from "next/server";
import { storage } from "@/lib/adapters";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "policyadda",
    storage: storage.name,
    time: new Date().toISOString(),
  });
}