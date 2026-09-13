"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How does Policy ADDA read my policy?",
    a: "You upload a PDF (or connect your insurer's portal). We extract the entire document and index every clause, exclusion, condition, and date. From that point, every answer you get is grounded in your actual document — with the clause cited.",
  },
  {
    q: "Is this a substitute for a lawyer?",
    a: "For understanding your policy, yes — we explain what your document says and what it means for common situations. For disputes, denials, or litigation, we connect you with verified insurance-law professionals. We never give legal advice that constitutes counsel.",
  },
  {
    q: "Is my policy data safe?",
    a: "Your document is encrypted at rest and in transit. We don't use it to train models, we don't share it with third parties, and you can permanently delete it from our systems at any time with one click.",
  },
  {
    q: "What kinds of policies do you support?",
    a: "Health, motor, term life, home, travel, and group insurance policies, in English and in Hindi documents. If a policy was issued by a regulated Indian insurer, there's a very good chance we can read it.",
  },
  {
    q: "What does it cost?",
    a: "Reading one policy and asking questions is free. Premium features — claim checklists, deadline tracking, and certified legal referral — start from ₹199 per policy or a flat yearly plan.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions people actually ask.</h2>
          </div>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className={`faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span className="chev">▾</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}