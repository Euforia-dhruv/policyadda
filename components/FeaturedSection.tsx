"use client";

import type { Locale, Policy } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import PolicyCard from "./PolicyCard";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";

export default function FeaturedSection({
  policies,
  copy,
  locale,
}: {
  policies: Policy[];
  copy: SiteCopy;
  locale: Locale;
}) {
  if (policies.length === 0) return null;
  return (
    <section className="pad" id="featured">
      <div className="wrap">
        <FadeInUp>
          <div className="section-head">
            <p className="eyebrow">{copy.featured.eyebrow}</p>
            <h2>{copy.featured.title}</h2>
            <p className="lead">{copy.featured.lead}</p>
          </div>
        </FadeInUp>
        <StaggerContainer className="grid-policies">
          {policies.map((p) => (
            <StaggerItem key={p.id}>
              <PolicyCard policy={p} locale={locale} copy={copy} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeInUp delay={0.3}>
          <p className="mt-6">
            <a href="/policies" className="cat-link">
              {copy.featured.viewAll} →
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
