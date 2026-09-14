import { NextResponse } from "next/server";
import { getServiceSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { clientIp, rateLimit } from "@/lib/utils";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

/**
 * Customer self sign-up. Uses the service-role admin API so accounts are
 * usable immediately (email confirmation skipped for now — see docs). The
 * profile row is created with the user; RLS then scopes everything to that
 * user via auth.uid(phone) matching.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`signup:${ip}`, 6, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "auth_not_configured", message: "Authentication is not active yet." },
      { status: 503 }
    );
  }

  const sb = getServiceSupabase();
  if (!sb) {
    return NextResponse.json({ error: "auth_unavailable" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const { fullName, phone, email, password, city } = (body ?? {}) as {
    fullName?: string;
    phone?: string;
    email?: string;
    password?: string;
    city?: string;
  };

  const name = fullName?.trim() ?? "";
  if (name.length < 2) {
    return NextResponse.json({ error: "name_too_short" }, { status: 422 });
  }
  if (!PHONE_RE.test(phone ?? "")) {
    return NextResponse.json({ error: "invalid_phone" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email ?? "")) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ error: "password_too_short" }, { status: 422 });
  }

  const { data, error } = await sb.auth.admin.createUser({
    email: email!.trim().toLowerCase(),
    password,
    email_confirm: true,
    app_metadata: { phone: phone!.trim() },
    user_metadata: { full_name: name },
  });
  if (error) {
    const conflict = /already registered|already been registered|already exists/i.test(error.message);
    return NextResponse.json(
      { error: conflict ? "email_taken" : "signup_failed", message: error.message },
      { status: conflict ? 409 : 400 }
    );
  }

  const userId = data.user!.id;
  const locale = (req.headers.get("cookie") ?? "")
    .match(/policyadda_locale=([a-z]+)/)?.[1] ?? "en";

  // handle_new_user trigger already pre-creates a lean profile row on signup;
  // enrich it (name/phone/city/locale) via upsert instead of a raw insert.
  const { error: profileError } = await sb.from("profiles").upsert({
    user_id: userId,
    role_code: "customer",
    full_name: name,
    phone: phone!.trim(),
    email: email!.trim().toLowerCase(),
    city: city?.trim() || null,
    locale: locale === "hi" ? "hi" : "en",
  }, { onConflict: "user_id" });
  if (profileError) {
    // Account exists but profile row failed — surface cleanly for now.
    return NextResponse.json(
      { error: "profile_creation_failed", message: profileError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, userId }, { status: 201 });
}