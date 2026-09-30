import { NextResponse } from "next/server";
import { GOOGLE_FORMS, validateForm, type FormKey } from "@/content/googleForms";
import { clientIp, rateLimit } from "@/lib/utils";

export const runtime = "nodejs";

/**
 * Browser → this route → Google formResponse.
 * Google's formResponse has no CORS for third-party origins, so the
 * submission happens server-side here (form ids are public anyway).
 */
export async function POST(req: Request) {
  if (!rateLimit(`forms:${clientIp(req)}`, 10, 60_000)) {
    return NextResponse.json({ error: "rate" }, { status: 429 });
  }

  let body: { form?: unknown; values?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const formKey = typeof body.form === "string" ? body.form : "";
  const def = Object.hasOwn(GOOGLE_FORMS, formKey) ? GOOGLE_FORMS[formKey as FormKey] : undefined;
  const raw = body.values;
  if (!def || !raw || typeof raw !== "object") {
    return NextResponse.json({ error: "unknown_form" }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const f of def.fields) {
    const v = (raw as Record<string, unknown>)[f.key];
    values[f.key] = typeof v === "string" ? v.trim() : "";
  }

  const errors = validateForm(def, values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 400 });
  }

  const payload = new URLSearchParams();
  for (const f of def.fields) payload.append(f.entry, values[f.key]);

  try {
    const res = await fetch(`https://docs.google.com/forms/d/e/${def.id}/formResponse`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      redirect: "follow",
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) return NextResponse.json({ error: "upstream" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
