/** @type {import('next').NextConfig} */

function securityHeaders() {
  let supabaseHost = "";
  try {
    supabaseHost = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL || "").host;
  } catch {
    supabaseHost = "";
  }
  const connectSrc = supabaseHost
    ? `'self' https://${supabaseHost} wss://${supabaseHost}`
    : "'self'";

  return [
    {
      key: "Content-Security-Policy",
      // 'unsafe-inline' is required for the theme-init script and Next.js RSC
      // hydration payloads; object/base/form restrictions still block the
      // classic injection vectors.
      value: [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        `connect-src ${connectSrc}`,
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "media-src 'self'",
        "frame-src 'none'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join("; "),
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    { key: "X-DNS-Prefetch-Control", value: "off" },
    { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  ];
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders(),
      },
    ];
  },
};

export default nextConfig;