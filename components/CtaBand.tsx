"use client";

import type { SiteCopy } from "@/content/copy";
import ShineBorder from "@/components/effects/ShineBorder";
import MagneticButton from "@/components/effects/MagneticButton";
import { FadeInUp } from "@/components/effects/ScrollReveal";
import LumaDrift from "@/components/effects/LumaDrift";

export default function CtaBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad relative overflow-hidden" id="cta">
      <LumaDrift speed={0.4} height="100%" className="absolute inset-0 opacity-15 dark:opacity-25" />
      <div className="wrap relative z-10">
        <FadeInUp>
          <ShineBorder color="var(--accent)" duration={4}>
            <div className="cta-band">
              <h2>{copy.cta.title}</h2>
              <p className="lead">{copy.cta.sub}</p>
              <div className="cta-actions">
                <MagneticButton>
                  <a href="/support" className="btn btn-primary">{copy.cta.primary}</a>
                </MagneticButton>
                <MagneticButton>
                  <a href="/#faq" className="btn btn-ghost">{copy.cta.secondary}</a>
                </MagneticButton>
              </div>
            </div>
          </ShineBorder>
        </FadeInUp>
      </div>
    </section>
  );
}
