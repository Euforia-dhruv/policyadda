"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { data } from "@/lib/data";
import Accordion from "./Accordion";
import { FadeInUp } from "@/components/effects/ScrollReveal";
import LumaDrift from "@/components/effects/LumaDrift";

export default function FaqSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const items = data.faqs().map((f) => ({
    id: f.id,
    q: pick(locale, f.q),
    a: pick(locale, f.a),
  }));

  return (
    <section className="pad relative overflow-hidden" id="faq">
      <LumaDrift speed={0.25} height="100%" className="absolute inset-0 opacity-[0.05] dark:opacity-[0.09]" />
      <div className="wrap relative z-10">
        <FadeInUp>
          <div className="section-head">
            <p className="eyebrow">{copy.faq.eyebrow}</p>
            <h2>{copy.faq.title}</h2>
            <p className="lead">{copy.faq.lead}</p>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <Accordion items={items} />
        </FadeInUp>
        <FadeInUp delay={0.25}>
          <p className="mt-6 faint-sm">
            <a href="/support" className="cat-link">{copy.support.openTicket} →</a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
