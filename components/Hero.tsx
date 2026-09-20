"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Shield, Users, HeadphonesIcon, ThumbsUp } from "@/lib/icons";

export default function Hero({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-new">
      {/* Decorative blobs */}
      <div className="hero-new-deco" />
      <div className="hero-new-deco2" />

      {/* Background image behind right side */}
      <div className="hero-new-bg">
        <Image
          src="/assets/01 - Hero.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="55vw"
        />
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

        <motion.div
          className="hero-new-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-new-photo">
            <Image
              src="/assets/01 - Hero.webp"
              alt="Happy family — insurance made simple with PolicyAdda"
              fill
              className="object-cover"
              sizes="340px"
            />
          </div>

          <div className="hero-safety-card">
            <div className="hero-safety-icon">
              <Shield size={18} />
            </div>
            <div className="hero-safety-text">
              Your Safety<br />Our Priority
            </div>
          </div>

          <div className="hero-more-card">
            <div className="hero-more-label">More than just insurance</div>
            <div className="hero-more-sub">A safer tomorrow for the people that matter.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
