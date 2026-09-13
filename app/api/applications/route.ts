import { NextResponse } from "next/server";
import { applicationSchema, parseWith } from "@/lib/validation";
import { storage } from "@/lib/adapters";
import { clientIp, rateLimit } from "@/lib/utils";
import { getPolicyBySlug } from "@/content/policies";

export const runtime = "nodejs";

/** Create an application/enquiry. */
export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`app:${ip}`, 8, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = parseWith(applicationSchema, body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 422 });
  }

  const policy = getPolicyBySlug(parsed.data.policyId);
  if (!policy || !policy.isActive) {
    return NextResponse.json({ error: "policy_not_found" }, { status: 404 });
  }

  const record = await storage.createApplication(parsed.data);
  return NextResponse.json(
    {
      ok: true,
      applicationNo: record.applicationNo,
      id: record.id,
      status: record.status,
      createdAt: record.createdAt,
      // Privacy: never echo back personal fields verbatim to non-parties.
    },
    { status: 201 }
  );
}

/**
 * Public status lookup — returns ONLY tracking-safe fields.
 * Never returns phone/email via this endpoint.
 */
export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id || !/^[A-Za-z0-9-]{6,32}$/.test(id)) {
    return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  }
  const rec = await storage.getApplication(id);
  if (!rec) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({
    applicationNo: rec.applicationNo,
    status: rec.status,
    policyId: rec.policyId,
    createdAt: rec.createdAt,
    updatedAt: rec.updatedAt,
  });
}