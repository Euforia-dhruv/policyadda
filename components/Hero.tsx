"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import HeroVideo from "@/components/HeroVideo";
import HeroParticles from "@/components/effects/HeroParticles";
import MagneticButton from "@/components/effects/MagneticButton";

interface HeroContent {
  eyebrow: string;
  titleA: string;
  titleB: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  videoSrc: string;
  posterSrc: string;
  showVideo: boolean;
}

function HeroSplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const words = text.split(" ");
  let globalIdx = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char) => {
            const idx = globalIdx++;
            return (
              <motion.span
                key={`${char}-${idx}`}
                style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.025,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      )).reduce<ReactNode[]>((acc, wordEl, i) => {
        if (i === 0) return [wordEl];
        return [...acc, <span key={`sp-${i}`} style={{ display: "inline-block", width: "0.3em" }} />, wordEl];
      }, [])}
    </span>
  );
}

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  const [hero, setHero] = useState<HeroContent | null>(null);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.ok ? r.json() : null)
      .then((d) => { if (d?.hero) setHero(d.hero); })
      .catch(() => {});
  }, []);

  const h = hero ?? {
    eyebrow: copy.hero.eyebrow,
    titleA: copy.hero.titleA,
    titleB: copy.hero.titleB,
    sub: copy.hero.sub,
    ctaPrimary: copy.hero.ctaPrimary,
    ctaSecondary: copy.hero.ctaSecondary,
    videoSrc: "/videos/policyadda-hero-4k.mp4",
    posterSrc: "/videos/policyadda-hero-poster.jpg",
    showVideo: true,
  };

  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero hero--video">
      <motion.div className="hero-video" aria-hidden="true" style={{ scale: heroScale }}>
        <div className="hero-video-poster" />
        <HeroVideo videoSrc={h.videoSrc} posterSrc={h.posterSrc} showVideo={h.showVideo} />
      </motion.div>
      <HeroParticles quantity={50} color="255,255,255" className="z-[1]" />
      <div className="hero-tint hero-tint-light" aria-hidden="true" />
      <div className="hero-tint hero-tint-dark" aria-hidden="true" />
      <motion.div className="wrap" style={{ opacity: heroOpacity, y: heroY }}>
        <div className="hero-inner">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-eyebrow-line" />
            {h.eyebrow}
          </motion.p>

          <h1 className="hero-h1">
            <span className="block hero-title-line">
              <HeroSplitText text={h.titleA} delay={200} />
            </span>
            <span className="block hero-title-line hero-title-accent">
              <HeroSplitText text={h.titleB} delay={500} />
            </span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {h.sub}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton>
              <a href="/policies" className="btn btn-primary">{h.ctaPrimary}</a>
            </MagneticButton>
            <MagneticButton>
              <a href="/support" className="btn btn-ghost-light">{h.ctaSecondary}</a>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <span className="chip">{c.phone.display}</span>
            <span className="chip">{c.address ? pick(locale, c.address) : ""}</span>
            <span className="chip">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
