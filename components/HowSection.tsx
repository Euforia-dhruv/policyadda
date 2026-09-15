"use client";

import type { SiteCopy } from "@/content/copy";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";

export default function HowSection({ copy }: { copy: SiteCopy }) {
  const numbered = copy.how.steps.map((s, i) => ({ n: i + 1, t: s.t, d: s.d }));
  return (
    <section className="pad" id="how">
      <div className="wrap">
        <FadeInUp>
          <div className="section-head">
            <p className="eyebrow">{copy.how.eyebrow}</p>
            <h2>{copy.how.title}</h2>
            <p className="lead">{copy.how.lead}</p>
          </div>
        </FadeInUp>
        <StaggerContainer className="grid-steps">
          {numbered.map((s) => (
            <StaggerItem key={s.n}>
              <div className="step">
                <div className="step-no">{s.n}</div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
