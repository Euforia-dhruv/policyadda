"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Shield, Users, HeadphonesIcon } from "@/lib/icons";
import Image from "next/image";

const ENQUIRY_URL = siteConfig.forms?.enquiry ?? "#";

const SLIDES = [
  { src: "/assets/cards/Health Insurance.png", alt: "Health Insurance" },
  { src: "/assets/cards/Motor Insurance.png", alt: "Motor Insurance" },
  { src: "/assets/cards/Life Insurance.png", alt: "Life Insurance" },
  { src: "/assets/cards/Business Insurance.png", alt: "Business Insurance" },
  { src: "/assets/cards/Property & Home Insurance.png", alt: "Property Insurance" },
  { src: "/assets/cards/Travel Insurance.png", alt: "Travel Insurance" },
];

const DOUBLED = [...SLIDES, ...SLIDES];

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-new">
      <div className="hero-new-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/01 - Hero.webp"
          className="hero-video-el"
        >
          <source src="/videos/policyadda-hero-4k.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="wrap hero-new-inner">
        <div className="hero-new-content">
          <motion.p
            className="hero-new-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            INSURANCE, SIMPLIFIED
          </motion.p>

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
            <a href={ENQUIRY_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Explore Plans</a>
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
      </div>

      {/* Auto-scrolling product image strip */}
      <div className="hero-slideshow">
        <div className="hero-slideshow-track">
          {DOUBLED.map((s, i) => (
            <div className="hero-slideshow-slide" key={i}>
              <Image
                src={s.src}
                alt={s.alt}
                width={260}
                height={160}
                className="hero-slideshow-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-safety-tag">
        <Shield size={16} className="hero-safety-tag-icon" />
        <span>Your Safety Our Priority</span>
      </div>
    </section>
  );
}
