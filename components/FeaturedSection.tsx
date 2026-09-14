import type { Locale, Policy } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import PolicyCard from "./PolicyCard";

export default function FeaturedSection({
  policies,
  copy,
  locale,
}: {
  policies: Policy[];
  copy: SiteCopy;
  locale: Locale;
}) {
  if (policies.length === 0) return null;
  return (
    <section className="pad" id="featured">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.featured.eyebrow}</p>
          <h2>{copy.featured.title}</h2>
          <p className="lead">{copy.featured.lead}</p>
        </div>
        <div className="grid-policies">
          {policies.map((p) => (
            <PolicyCard key={p.id} policy={p} locale={locale} copy={copy} />
          ))}
        </div>
        <p className="mt-6">
          <a href="/policies" className="cat-link">
            {copy.featured.viewAll} →
          </a>
        </p>
      </div>
    </section>
  );
}