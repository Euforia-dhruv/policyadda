"use client";

import type { SiteCopy } from "@/content/copy";
import { Search, User, Globe, Phone, Shield, ArrowRight } from "@/lib/icons";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { SplitText } from "@/components/effects/SplitText";
import LumaDrift from "@/components/effects/LumaDrift";

const ICONS = [Search, User, Globe, Phone, Shield, ArrowRight];

export default function WhySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad relative overflow-hidden" id="why">
      <LumaDrift speed={0.35} height="100%" className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]" />
      <div className="wrap relative z-10">
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
                <GlowCard glowColor="rgba(23, 79, 134, 0.08)" className="trust-item min-h-150 card-fx">
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
