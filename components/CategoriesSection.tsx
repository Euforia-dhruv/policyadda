"use client";

import type { Locale, PolicyCategory } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { CategoryIcon } from "@/lib/icons";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { SplitText } from "@/components/effects/SplitText";
import LumaDrift from "@/components/effects/LumaDrift";

export function CategoryCard({ cat, locale, copy }: { cat: PolicyCategory; locale: Locale; copy: SiteCopy }) {
  return (
    <a href={`/policies/${cat.slug}`} className="block">
      <GlowCard glowColor="rgba(23, 79, 134, 0.10)" className="cat-card card-fx">
        <div className="cat-card-inner">
          <div className="cat-ico"><CategoryIcon icon={cat.icon} size={22} /></div>
          <h3>{pick(locale, cat.name)}</h3>
          <p>{pick(locale, cat.short)}</p>
          <span className="cat-link">
            {copy.categories.view} <span aria-hidden="true">→</span>
          </span>
        </div>
      </GlowCard>
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
    <section className="pad section-pad-0 relative overflow-hidden" id="categories">
      <LumaDrift speed={0.3} height="100%" className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]" />
      <div className="wrap relative z-10">
        <div className="section-head">
          <p className="eyebrow">{copy.categories.eyebrow}</p>
          <SplitText text={copy.categories.title} as="h2" splitBy="words" staggerDelay={0.04} />
          <p className="lead">{copy.categories.lead}</p>
        </div>
        <StaggerContainer className="grid-categories">
          {categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <CategoryCard cat={cat} locale={locale} copy={copy} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
