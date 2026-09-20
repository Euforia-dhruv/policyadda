"use client";

import type { SiteCopy } from "@/content/copy";

export default function HowPageSteps({ copy }: { copy: SiteCopy }) {
  const steps = copy.how.steps.map((s) => ({
    t: s.t,
    d: s.d,
    extra: s.extra || "",
  }));

  return (
    <>
      <div className="grid-steps" style={{ maxWidth: 720, margin: "0 auto" }}>
        {steps.map((s, i) => (
          <div key={i} className="step">
            <div className="step-no">{i + 1}</div>
            <div>
              <h3>{s.t}</h3>
              <p className="mb-1">{s.d}</p>
              {s.extra && <p className="faint-sm">{s.extra}</p>}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center">
        <a href="/policies" className="btn btn-primary">{copy.cta.primary}</a>
      </p>
    </>
  );
}
