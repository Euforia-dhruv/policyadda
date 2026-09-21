"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Shield, Users, HeadphonesIcon, ThumbsUp, ChevronLeft, ChevronRight } from "@/lib/icons";

const SLIDES = [
  { src: "/assets/01 - Hero.webp", alt: "Family insurance made simple" },
  { src: "/assets/03 - Motor.webp", alt: "Motor insurance" },
  { src: "/assets/04 - Health.webp", alt: "Health insurance" },
  { src: "/assets/05 - Travel.webp", alt: "Travel insurance" },
  { src: "/assets/06 - Business.webp", alt: "Business insurance" },
];

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  const [inView, setInView] = useState(false);
  const [slide, setSlide] = useState(0);

  const next = useCallback(() => setSlide((s) => (s + 1) % SLIDES.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero-new">
      {/* Video background */}
      <div className="hero-new-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/01 - Hero.webp"
          className="hero-video-el"
        >
          <source src="/videos/policyadda-hero.webm" type="video/webm" />
          <source src="/videos/policyadda-hero-hd.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="wrap hero-new-inner">
        <div className="hero-new-content">
          <motion.div
            className="hero-new-badge"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="hero-new-badge-dot" />
            TRUSTED BY 1M+ INDIANS
          </motion.div>

          <motion.h1
            className="hero-new-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Insurance made{" "}
            <span className="hero-new-accent">simple,</span>{" "}
            for real life.
          </motion.h1>

          <motion.p
            className="hero-new-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Clear advice. Better choices. True support.
            Policy Adda — Policy Aapka, Adda Apna.
          </motion.p>

          <motion.div
            className="hero-new-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/policies" className="btn btn-primary btn-lg">Explore Plans</a>
            <a href={`tel:${c.phone.tel}`} className="btn btn-ghost btn-lg">Talk to an Expert</a>
          </motion.div>

          <motion.div
            className="hero-new-trust"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <div className="hero-trust-item">
              <Shield size={16} className="hero-trust-icon" />
              <span>100% Transparent</span>
            </div>
            <div className="hero-trust-item">
              <Users size={16} className="hero-trust-icon" />
              <span>Expert Guidance</span>
            </div>
            <div className="hero-trust-item">
              <HeadphonesIcon size={16} className="hero-trust-icon" />
              <span>Claims Support</span>
            </div>
          </motion.div>
        </div>

        {/* Image slideshow */}
        <motion.div
          className="hero-new-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-slideshow">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                className="hero-slide"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={SLIDES[slide].src}
                  alt={SLIDES[slide].alt}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </motion.div>
            </AnimatePresence>
            <div className="hero-slide-controls">
              <button onClick={prev} className="hero-slide-btn" aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <div className="hero-slide-dots">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-slide-dot ${i === slide ? "active" : ""}`}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="hero-slide-btn" aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="hero-safety-card">
            <div className="hero-safety-icon">
              <Shield size={18} />
            </div>
            <div className="hero-safety-text">
              Your Safety<br />Our Priority
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
