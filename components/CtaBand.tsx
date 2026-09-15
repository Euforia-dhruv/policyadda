"use client";

import type { SiteCopy } from "@/content/copy";
import ShineBorder from "@/components/effects/ShineBorder";
import MagneticButton from "@/components/effects/MagneticButton";
import { FadeInUp } from "@/components/effects/ScrollReveal";

export default function CtaBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="cta">
      <div className="wrap">
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
