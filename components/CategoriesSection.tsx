"use client";

import type { Locale, PolicyCategory } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import Image from "next/image";
import { motion } from "motion/react";

const CATEGORY_IMAGES: Record<string, string> = {
  motor: "/assets/03 - Motor.webp",
  health: "/assets/04 - Health.webp",
  travel: "/assets/05 - Travel.webp",
  business: "/assets/06 - Business.webp",
};

export function CategoryCard({ cat, locale }: { cat: PolicyCategory; locale: Locale }) {
  const img = CATEGORY_IMAGES[cat.slug];

  return (
    <a href={`/policies/${cat.slug}`} className="group block">
      <div className="cat-card-new">
        {img ? (
          <div className="cat-card-img">
            <Image
              src={img}
              alt={pick(locale, cat.name)}
              width={400}
              height={280}
              className="cat-card-photo"
            />
          </div>
        ) : null}
        <div className="cat-card-body">
          <h3 className="cat-card-title">{pick(locale, cat.name)}</h3>
          <p className="cat-card-desc">{pick(locale, cat.short)}</p>
          <span className="cat-card-link">
            Explore <span aria-hidden="true">→</span>
          </span>
        </div>
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
  return (
    <section className="pad" id="categories">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">{copy.categories.eyebrow || "OUR INSURANCE PRODUCTS"}</p>
          <h2>{copy.categories.title || "Protection for every chapter of your life."}</h2>
          <p className="lead">{copy.categories.lead}</p>
        </div>
        <div className="cat-grid-new">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CategoryCard cat={cat} locale={locale} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
