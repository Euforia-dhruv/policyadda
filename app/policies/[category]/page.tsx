import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import PolicyCard from "@/components/PolicyCard";

type Params = { category: string };

export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return data.categories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const locale = getLocale();
  const cat = data.categoryBySlug(category);
  if (!cat) return { title: "Not found — PolicyAdda" };
  return { title: `${pick(locale, cat.name)} — PolicyAdda` };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const locale = getLocale();
  const copy = getCopy(locale);
  const cat = data.categoryBySlug(category);
  if (!cat) notFound();

  const policies = data.policiesByCategory(category);

  return (
    <>
      <section className="pad" style={{ paddingBottom: 28 }}>
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/policies">{copy.nav.categories}</a>
            <span className="sep">/</span>
            <span>{pick(locale, cat.name)}</span>
          </nav>
          <div className="section-head">
            <p className="eyebrow">{cat.icon} {copy.categories.eyebrow}</p>
            <h2>{pick(locale, cat.name)}</h2>
            <p className="lead">{pick(locale, cat.description)}</p>
          </div>
        </div>
      </section>

      <section className="pad" style={{ paddingTop: 10 }}>
        <div className="wrap">
          {policies.length === 0 ? (
            <div className="notice-center">
              <h2>Coming soon</h2>
              <p>Policy concepts for this category are being prepared.</p>
              <p style={{ marginTop: 14 }}>
                <a href="/support" className="btn btn-primary">Contact support</a>
              </p>
            </div>
          ) : (
            <div className="grid-policies">
              {policies.map((p) => (
                <PolicyCard key={p.id} policy={p} locale={locale} copy={copy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}