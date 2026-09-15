"use client";

import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";
import type { SiteCopy } from "@/content/copy";

export default function HowPageSteps({ copy }: { copy: SiteCopy }) {
  const steps = copy.how.steps.map((s, i) => ({
    t: s.t,
    d: s.d,
    extra: [
      "Browse /policies. Every category links to the policies available within it.",
      "Each policy page explains benefits, eligibility, coverage, exclusions and required documents. Nothing hidden.",
      "You receive an Application ID that lets you track your enquiry.",
      "Your executive contacts you at the phone number you provided — during working hours.",
      "We help you with paperwork, questions, and understanding the process.",
      "Policy documents and your information are made accessible through a secure customer portal (activated once your account is created).",
    ][i],
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
                <p className="faint-sm">{s.extra}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeInUp delay={0.3}>
        <p className="mt-8">
          <a href="/policies" className="btn btn-primary">Start exploring</a>
        </p>
      </FadeInUp>
    </>
  );
}
