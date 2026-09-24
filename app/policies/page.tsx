import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import CategoriesSection from "@/components/CategoriesSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Policies — PolicyAdda",
  description: "Browse insurance categories and policy sub-categories explained in plain language.",
};

const CATEGORY_IMAGES: Record<string, string> = {
  motor: "/assets/cards/Motor Insurance.png",
  health: "/assets/cards/Health Insurance.png",
  travel: "/assets/cards/Travel Insurance.png",
  business: "/assets/cards/Business Insurance.png",
  life: "/assets/cards/Life Insurance.png",
  property: "/assets/cards/Property & Home Insurance.png",
};

export default function PoliciesPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const categories = data.categories();
  const allPolicies = data.policies();

  return (
    <>
      <CategoriesSection categories={categories} copy={copy} locale={locale} />

      {categories.map((cat) => {
        const catPolicies = allPolicies.filter((p) => p.categorySlug === cat.slug);
        if (catPolicies.length === 0) return null;
        const img = CATEGORY_IMAGES[cat.slug];

        return (
          <section key={cat.id} className="cat-sub-section" id={`cat-${cat.slug}`}>
            <div className="wrap">
              <div className="cat-sub-header">
                {img && (
                  <div className="cat-sub-header-img">
                    <Image src={img} alt={pick(locale, cat.name)} width={80} height={50} />
                  </div>
                )}
                <div>
                  <h2 className="cat-sub-title">{pick(locale, cat.name)}</h2>
                  <p className="cat-sub-desc">{pick(locale, cat.short)}</p>
                </div>
              </div>
              <div className="cat-sub-grid">
                {catPolicies.map((p) => (
                  <a
                    key={p.id}
                    href={`/policies/${cat.slug}/${p.slug}`}
                    className="cat-sub-card"
                  >
                    <h3 className="cat-sub-card-title">{p.name}</h3>
                    <p className="cat-sub-card-desc">{pick(locale, p.shortDescription)}</p>
                    <span className="cat-sub-card-cta">
                      {locale === "hi" ? "जानें" : "Learn More"} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
