"use client";

import type { Locale, PolicyCategory } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Home } from "@/lib/icons";

const CATEGORY_IMAGES: Record<string, string> = {
  motor: "/assets/03 - Motor.webp",
  health: "/assets/04 - Health.webp",
  travel: "/assets/05 - Travel.webp",
  business: "/assets/06 - Business.webp",
};

const CATEGORY_SHORT: Record<string, string> = {
  motor: "Protect your vehicle with comprehensive coverage",
  health: "Secure your family's health with the right plan",
  life: "Plan for the future with life insurance",
  business: "Shield your business from unexpected risks",
  property: "Safeguard your home and property",
  travel: "Travel with peace of mind worldwide",
};

function PhotoCard({ cat, locale }: { cat: PolicyCategory; locale: Locale }) {
  const img = CATEGORY_IMAGES[cat.slug];
  return (
    <a href={`/policies/${cat.slug}`} className="group block">
      <div className="cat-photo-card">
        {img && (
          <div className="cat-photo-img">
            <Image
              src={img}
              alt={pick(locale, cat.name)}
              width={600}
              height={400}
              className="cat-photo-photo"
            />
          </div>
        )}
        <div className="cat-photo-body">
          <span className="cat-photo-label">{pick(locale, cat.name)}</span>
          <p className="cat-photo-desc">{CATEGORY_SHORT[cat.slug] || pick(locale, cat.short)}</p>
          <span className="cat-photo-link">Explore <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </a>
  );
}

function IconCard({ cat, locale, icon }: { cat: PolicyCategory; locale: Locale; icon: React.ReactNode }) {
  return (
    <a href={`/policies/${cat.slug}`} className="group block">
      <div className="cat-icon-card">
        <div className="cat-icon-ico">{icon}</div>
        <h3 className="cat-icon-title">{pick(locale, cat.name)}</h3>
        <p className="cat-icon-desc">{CATEGORY_SHORT[cat.slug] || pick(locale, cat.short)}</p>
        <span className="cat-icon-link">Explore <span aria-hidden="true">→</span></span>
      </div>
    </a>
  );
}

export default function CategoriesSection({
  categories,
  copy,
  locale,
}: {
  categories: PolicyCategory[];
  copy: SiteCopy;
  locale: Locale;
}) {
  if (categories.length === 0) return null;

  const photoCategories = categories.filter((c) => CATEGORY_IMAGES[c.slug]);
  const iconCategories = categories.filter((c) => !CATEGORY_IMAGES[c.slug]);

  return (
    <section className="pad" id="categories" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">{copy.categories.eyebrow || "OUR INSURANCE PRODUCTS"}</p>
          <h2>{copy.categories.title || "Protection for every chapter of your life."}</h2>
          <p className="lead">{copy.categories.lead || "Explore a category, understand your options, and ask us anything."}</p>
        </div>

        <div className="cat-photo-grid">
          {photoCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <PhotoCard cat={cat} locale={locale} />
            </motion.div>
          ))}
        </div>

        {iconCategories.length > 0 && (
          <div className="cat-icon-grid">
            {iconCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <IconCard
                  cat={cat}
                  locale={locale}
                  icon={cat.slug === "life" ? <Shield size={24} /> : <Home size={24} />}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
