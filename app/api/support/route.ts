import { NextResponse } from "next/server";
import { ticketSchema, parseWith } from "@/lib/validation";
import { storage } from "@/lib/adapters";
import { clientIp, rateLimit } from "@/lib/utils";

export const runtime = "nodejs";

/** Open a support ticket. */
export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`ticket:${ip}`, 5, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = parseWith(ticketSchema, body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 422 });
  }

  const ticket = await storage.createTicket({
    ...parsed.data,
    name: parsed.data.name,
  });
  return NextResponse.json({ ok: true, ticketNo: ticket.ticketNo }, { status: 201 });
}