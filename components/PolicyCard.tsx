import type { Locale, Policy } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";

export default function PolicyCard({
  policy,
  locale,
  copy,
  full = false,
}: {
  policy: Policy;
  locale: Locale;
  copy: SiteCopy;
  full?: boolean;
}) {
  return (
    <div className="card card-hover policy-card">
      <span className="pcat">{policy.categorySlug}</span>
      <h3>{policy.name}</h3>
      <p>{pick(locale, policy.shortDescription)}</p>
      <div className="pbtns">
        <a href={`/policies/${policy.categorySlug}/${policy.slug}`} className="btn btn-ghost btn-sm">
          {copy.featured.learnMore}
        </a>
        <a href={`/apply/${policy.slug}`} className="btn btn-primary btn-sm">
          {copy.nav.apply}
        </a>
      </div>
    </div>
  );
}