"use client";

import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";
import type { SiteCopy } from "@/content/copy";

export default function HowPageSteps({ copy }: { copy: SiteCopy }) {
  const steps = copy.how.steps.map((s) => ({
    t: s.t,
    d: s.d,
    extra: s.extra || "",
  }));

  return (
    <>
      <StaggerContainer className="grid-steps grid-cols-1">
        {steps.map((s, i) => (
          <StaggerItem key={i}>
            <div className="step">
              <div className="step-no">{i + 1}</div>
              <div>
                <h3>{s.t}</h3>
                <p className="mb-1">{s.d}</p>
                {s.extra && <p className="faint-sm">{s.extra}</p>}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeInUp delay={0.3}>
        <p className="mt-8">
          <a href="/policies" className="btn btn-primary">{copy.cta.primary}</a>
        </p>
      </FadeInUp>
    </>
  );
}
