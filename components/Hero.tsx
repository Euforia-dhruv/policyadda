import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import HeroVideo from "@/components/HeroVideo";

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  return (
    <section className="hero hero--video">
      {/* Layer 1 — cinematic background video + poster fallback */}
      <div className="hero-video" aria-hidden="true">
        <div className="hero-video-poster" />
        <HeroVideo />
      </div>

      {/* Layer 2 — theme-aware readability overlays (smooth crossfade) */}
      <div className="hero-tint hero-tint-light" aria-hidden="true" />
      <div className="hero-tint hero-tint-dark" aria-hidden="true" />

      {/* Layer 3 — legacy ambient texture (disabled on the video hero) */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow right" />
      </div>

      {/* Layer 4 — real HTML hero content */}
      <div className="wrap">
        <div className="hero-inner">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>
            <span className="block">{copy.hero.titleA}</span>
            <span className="block grad">{copy.hero.titleB}</span>
          </h1>
          <p className="hero-sub">{copy.hero.sub}</p>
          <div className="hero-actions">
            <a href="/policies" className="btn btn-primary">{copy.hero.ctaPrimary}</a>
            <a href="/support" className="btn btn-accent">{copy.hero.ctaSecondary}</a>
          </div>
          <div className="hero-meta">
            <span className="chip">{c.phone.display}</span>
            <span className="chip">{c.address ? pick(locale, c.address) : ""}</span>
            <span className="chip">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</span>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="card">
            <div className="hcline">
              Motor Insurance <span>explained ✓</span>
            </div>
            <div className="dia">
              <b>Accidental damage</b> — <span className="good">covered</span>
            </div>
            <div className="dia">
              <b>Theft</b> — <span className="good">covered</span>
            </div>
            <div className="dia">
              <b>Wear &amp; tear</b> — <span className="bad">excluded</span>
            </div>
            <div className="dia">
              <b>DUI / no licence</b> — <span className="bad">excluded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}