import type { Locale, PolicyCategory } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";

export function CategoryCard({ cat, locale, copy }: { cat: PolicyCategory; locale: Locale; copy: SiteCopy }) {
  return (
    <a href={`/policies/${cat.slug}`} className="card card-hover cat-card">
      <div className="cat-ico">{cat.icon}</div>
      <h3>{pick(locale, cat.name)}</h3>
      <p>{pick(locale, cat.short)}</p>
      <span className="cat-link">
        {copy.categories.view} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export default function CategoriesSection({
  categories,
  copy,
  locale,
}: {
  categories: PolicyCategory[];
  copy: SiteCopy;
  locale: Locale;
}) {
  if (categories.length === 0) return null;
  return (
    <section className="pad section-pad-0" id="categories">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.categories.eyebrow}</p>
          <h2>{copy.categories.title}</h2>
          <p className="lead">{copy.categories.lead}</p>
        </div>
        <div className="grid-categories">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} locale={locale} copy={copy} />
          ))}
        </div>
      </div>
    </section>
  );
}