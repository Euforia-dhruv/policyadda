/**
 * Edge-friendly sliding-window rate limiter (Middleware / Route Handlers).
 * In-memory only: per isolate on Vercel. Stops single-IP floods; not a
 * substitute for Vercel Firewall / WAF against distributed attacks.
 */
const hits = new Map<string, number[]>();
const MAX_KEYS = 10_000;

export function edgeAllow(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (arr.length >= max) {
    hits.set(key, arr);
    return false;
  }
  arr.push(now);
  hits.set(key, arr);
  if (hits.size > MAX_KEYS) {
    hits.forEach((v, k) => {
      if (v.length === 0 || now - (v[v.length - 1] ?? 0) > windowMs) hits.delete(k);
    });
  }
  return true;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/** Suspicious / tool-like user agents (empty UA is common in flood bots). */
export function isSuspiciousUa(ua: string | null): boolean {
  if (!ua || ua.trim() === "") return true;
  const s = ua.toLowerCase();
  const bad = [
    "sqlmap", "nikto", "masscan", "zgrab", "python-requests",
    "go-http-client", "curl/", "wget/", "libwww-perl", "httpclient",
    "scrapy", "dirbuster", "nessus", "acunetix",
  ];
  return bad.some((b) => s.includes(b));
}
