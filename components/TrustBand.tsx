"use client";

import type { SiteCopy } from "@/content/copy";
import { Shield, User, Globe, Lock } from "@/lib/icons";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";

const ICONS = [Shield, User, Globe, Lock];

export default function TrustBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="trust">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.trust.eyebrow}</p>
          <h2>{copy.trust.title}</h2>
          <p className="lead">{copy.trust.lead}</p>
        </div>
        <StaggerContainer className="trust-band">
          {copy.trust.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={it.t}>
                <div className="trust-item">
                  <div className="t-ico"><Icon size={28} /></div>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
