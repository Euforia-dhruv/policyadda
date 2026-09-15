"use client";

import type { SiteCopy } from "@/content/copy";
import { Search, User, Globe, Phone, Shield, ArrowRight } from "@/lib/icons";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { SplitText } from "@/components/effects/SplitText";

const ICONS = [Search, User, Globe, Phone, Shield, ArrowRight];

export default function WhySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="why">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.why.eyebrow}</p>
          <SplitText text={copy.why.title} as="h2" splitBy="words" staggerDelay={0.04} />
          <p className="lead">{copy.why.lead}</p>
        </div>
        <StaggerContainer className="grid-features">
          {copy.why.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={it.t}>
                <GlowCard glowColor="rgba(23, 79, 134, 0.08)" className="trust-item min-h-150">
                  <div className="trust-item-inner">
                    <div className="t-ico"><Icon size={28} /></div>
                    <h3>{it.t}</h3>
                    <p>{it.d}</p>
                  </div>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
