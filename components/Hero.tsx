import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import HeroVideo from "@/components/HeroVideo";

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  return (
    <section className="hero hero--video">
      <div className="hero-video" aria-hidden="true">
        <div className="hero-video-poster" />
        <HeroVideo />
      </div>
      <div className="hero-tint hero-tint-light" aria-hidden="true" />
      <div className="hero-tint hero-tint-dark" aria-hidden="true" />
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow right" />
      </div>
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
      </div>
    </section>
  );
}