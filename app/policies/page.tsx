import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import CategoriesSection from "@/components/CategoriesSection";
import PolicyCard from "@/components/PolicyCard";

export const metadata: Metadata = {
  title: "Policies — PolicyAdda",
  description: "Browse insurance categories and policy concepts explained in plain language.",
};

export default function PoliciesPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const categories = data.categories();
  const policies = data.policies();

  return (
    <>
      <section className="pad" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{copy.categories.eyebrow}</p>
            <h2>{copy.categories.title}</h2>
            <p className="lead">{copy.categories.lead}</p>
          </div>
        </div>
      </section>

      <CategoriesSection categories={categories} copy={copy} locale={locale} />

      <section className="pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{copy.featured.eyebrow}</p>
            <h2>{copy.featured.title}</h2>
          </div>
          <div className="grid-policies">
            {policies.map((p) => (
              <PolicyCard key={p.id} policy={p} locale={locale} copy={copy} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}