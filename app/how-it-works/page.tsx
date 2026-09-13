import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "How It Works — PolicyAdda",
  description: "A transparent, step-by-step customer journey at PolicyAdda.",
};

export default function HowPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  const steps = [
    {
      title: copy.how.steps[0].t,
      body: copy.how.steps[0].d,
      extra: "Browse /policies. Every category links to the policies available within it.",
    },
    {
      title: copy.how.steps[1].t,
      body: copy.how.steps[1].d,
      extra: "Each policy page explains benefits, eligibility, coverage, exclusions and required documents. Nothing hidden.",
    },
    {
      title: copy.how.steps[2].t,
      body: copy.how.steps[2].d,
      extra: "You receive an Application ID that lets you track your enquiry.",
    },
    {
      title: copy.how.steps[3].t,
      body: copy.how.steps[3].d,
      extra: "Your executive contacts you at the phone number you provided — during working hours.",
    },
    {
      title: copy.how.steps[4].t,
      body: copy.how.steps[4].d,
      extra: "We help you with paperwork, questions, and understanding the process.",
    },
    {
      title: copy.how.steps[5].t,
      body: copy.how.steps[5].d,
      extra: "Policy documents and your information are made accessible through a secure customer portal (activated once your account is created).",
    },
  ];

  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="section-head">
          <p className="eyebrow">{copy.how.eyebrow}</p>
          <h2>{copy.how.title}</h2>
          <p className="lead">{copy.how.lead}</p>
        </div>

        <div className="grid-steps" style={{ gridTemplateColumns: "1fr" }}>
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-no">{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 4 }}>{s.body}</p>
                <p style={{ fontSize: 13, color: "var(--faint)" }}>{s.extra}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 30 }}>
          <a href="/policies" className="btn btn-primary">Start exploring</a>
        </p>
      </div>
    </section>
  );
}