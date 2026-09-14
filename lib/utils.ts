/** Small shared utilities. */

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Format an ISO date for display. Accepts app locale ("hi"|"en"). */
export function fmt(locale: string, d: string): string {
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "—";
  return dt.toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/** Format an ISO date for display (legacy alias). */
export function formatDate(iso: string | Date, locale = "en-IN"): string {
  const d = typeof iso === "string" ? new Date(iso) : iso;
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
}

/** Extract policy name from an application record. */
export function policyName(a: any): string {
  const l = Array.isArray(a.policies) ? a.policies[0] : a.policies;
  return l?.name || l?.slug || "—";
}

/* ── Status → pill class maps ── */

const ROLE_PILL: Record<string, string> = {
  super_admin: "pill pill-cancel",
  admin: "pill pill-cancel",
  manager: "pill pill-gold",
  sales: "pill pill-info",
  support: "pill pill-info",
  developer: "pill pill-info",
  customer: "pill pill-muted",
};

const STATUS_PILL: Record<string, string> = {
  /* Application statuses */
  completed: "pill pill-ok",
  cancelled: "pill pill-cancel",
  rejected: "pill pill-cancel",
  submitted: "pill pill-gold",
  under_review: "pill pill-gold",
  assigned: "pill pill-info",
  contacted: "pill pill-info",
  processing: "pill pill-info",
  on_hold: "pill pill-muted",
  /* Ticket statuses */
  open: "pill pill-gold",
  in_progress: "pill pill-info",
  waiting_customer: "pill pill-info",
  resolved: "pill pill-ok",
  closed: "pill pill-muted",
  /* Priority levels */
  low: "pill pill-muted",
  normal: "pill pill-info",
  high: "pill pill-gold",
  urgent: "pill pill-cancel",
};

/** Map a role code to its pill CSS class. */
export function rolePill(role: string): string {
  return ROLE_PILL[role] ?? "pill pill-muted";
}

/** Map a status/priority code to its pill CSS class. */
export function statusPill(code: string): string {
  return STATUS_PILL[code] ?? "pill pill-info";
}

/** Basic phone normalization for storing. Accepts Indian 10-digit + optional country code. */
export function normalizePhone(raw: string): string {
  let p = raw.replace(/[^+\d]/g, "");
  if (p.startsWith("+91")) p = p.slice(3);
  if (p.startsWith("91") && p.length === 12) p = p.slice(2);
  if (/^0\d{10}$/.test(p)) p = p.slice(1);
  return p;
}

export function isValidIndianPhone(raw: string): boolean {
  const p = normalizePhone(raw);
  return /^[6-9]\d{9}$/.test(p);
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(raw.trim());
}

const PAD = (n: number, s: number) => String(n).padStart(s, "0");

/** Human-friendly application number, e.g. PA-240913-0081. */
export function makeApplicationNo(seq = 0): string {
  const d = new Date();
  const stamp = `${String(d.getFullYear()).slice(2)}${PAD(d.getMonth() + 1, 2)}${PAD(d.getDate(), 2)}`;
  return `PA-${stamp}-${PAD((seq % 10000) + 1, 4)}`;
}

export function makeTicketNo(seq = 0): string {
  return `SUP-${PAD((seq % 100000) + 1, 5)}`;
}

/** Tiny in-memory sliding-window rate limiter keyed by IP. */
const buckets = new Map<string, number[]>();

export function rateLimit(key: string, max = 10, windowMs = 60_000): boolean {
  const now = Date.now();
  const arr = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (arr.length >= max) return false;
  arr.push(now);
  buckets.set(key, arr);
  if (buckets.size > 5000) buckets.clear();
  return true;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "local";
}