"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import HeroVideo from "@/components/HeroVideo";
import GradientText from "@/components/effects/GradientText";
import MagneticButton from "@/components/effects/MagneticButton";
import { FadeInUp } from "@/components/effects/ScrollReveal";

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
          <FadeInUp>
            <p className="eyebrow">{copy.hero.eyebrow}</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1>
              <span className="block">{copy.hero.titleA}</span>
              <span className="block">
                <GradientText className="italic">{copy.hero.titleB}</GradientText>
              </span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="hero-sub">{copy.hero.sub}</p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="hero-actions">
              <MagneticButton>
                <a href="/policies" className="btn btn-primary">{copy.hero.ctaPrimary}</a>
              </MagneticButton>
              <MagneticButton>
                <a href="/support" className="btn btn-accent">{copy.hero.ctaSecondary}</a>
              </MagneticButton>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="hero-meta">
              <span className="chip">{c.phone.display}</span>
              <span className="chip">{c.address ? pick(locale, c.address) : ""}</span>
              <span className="chip">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</span>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
