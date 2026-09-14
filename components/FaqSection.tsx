import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { data } from "@/lib/data";
import Accordion from "./Accordion";

export default function FaqSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const items = data.faqs().map((f) => ({
    id: f.id,
    q: pick(locale, f.q),
    a: pick(locale, f.a),
  }));

  return (
    <section className="pad" id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.faq.eyebrow}</p>
          <h2>{copy.faq.title}</h2>
          <p className="lead">{copy.faq.lead}</p>
        </div>
        <Accordion items={items} />
        <p className="mt-6 faint-text" style={{ fontSize: "var(--text-sm)" }}>
          <a href="/support" className="cat-link">{copy.support.openTicket} →</a>
        </p>
      </div>
    </section>
  );
}