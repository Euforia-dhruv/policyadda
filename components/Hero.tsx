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
            Insurance, without the{" "}
            <span className="hero-new-accent">confusion.</span>
          </motion.h1>

          <motion.p
            className="hero-new-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Clear advice. Better choices. True support.<br />
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
              <Shield size={18} className="hero-trust-icon" />
              <span>100% Transparent</span>
            </div>
            <div className="hero-trust-item">
              <Users size={18} className="hero-trust-icon" />
              <span>Expert Guidance</span>
            </div>
            <div className="hero-trust-item">
              <HeadphonesIcon size={18} className="hero-trust-icon" />
              <span>Claims Support</span>
            </div>
            <div className="hero-trust-item">
              <ThumbsUp size={18} className="hero-trust-icon" />
              <span>Customer First</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-new-image"
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/assets/01 - Hero.webp"
            alt="Happy family — insurance made simple with PolicyAdda"
            width={700}
            height={500}
            className="hero-img"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
