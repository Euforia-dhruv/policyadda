"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroVideo from "@/components/HeroVideo";
import HeroParticles from "@/components/effects/HeroParticles";
import MagneticButton from "@/components/effects/MagneticButton";

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  const titleA = copy.hero.titleA;
  const titleB = copy.hero.titleB;

  return (
    <section className="hero hero--video">
      <div className="hero-video" aria-hidden="true">
        <div className="hero-video-poster" />
        <HeroVideo />
      </div>
      <HeroParticles quantity={50} color="255,255,255" className="z-[1]" />
      <div className="hero-tint hero-tint-light" aria-hidden="true" />
      <div className="hero-tint hero-tint-dark" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-inner">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-eyebrow-line" />
            {copy.hero.eyebrow}
          </motion.p>

          <h1 className="hero-h1">
            <motion.span
              className="block hero-title-line"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {titleA}
            </motion.span>
            <motion.span
              className="block hero-title-line hero-title-accent"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {titleB}
            </motion.span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy.hero.sub}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton>
              <a href="/policies" className="btn btn-primary">{copy.hero.ctaPrimary}</a>
            </MagneticButton>
            <MagneticButton>
              <a href="/support" className="btn btn-ghost-light">{copy.hero.ctaSecondary}</a>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <span className="chip">{c.phone.display}</span>
            <span className="chip">{c.address ? pick(locale, c.address) : ""}</span>
            <span className="chip">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
