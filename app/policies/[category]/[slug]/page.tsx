import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import { siteConfig } from "@/content/config";
import Accordion from "@/components/Accordion";

type Params = { category: string; slug: string };

export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return data.policies().map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = getLocale();
  const policy = data.policyBySlug(slug);
  if (!policy) return { title: "Not found — PolicyAdda" };
  return {
    title: `${policy.name} — PolicyAdda`,
    description: pick(locale, policy.shortDescription),
  };
}

export default async function PolicyDetailPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const locale = getLocale();
  const copy = getCopy(locale);
  const policy = data.policyBySlug(slug);
  if (!policy || policy.categorySlug !== category) notFound();

  const cat = data.categoryBySlug(category);
  const catName = cat ? pick(locale, cat.name) : category;
  const applyHref = policy.googleFormUrl ?? `/apply/${policy.slug}`;

  const blocks: { key: "benefits" | "eligibility" | "coverage" | "exclusions"; items: { en: string[]; hi: string[] }; bad?: boolean }[] = [
    { key: "benefits", items: policy.keyBenefits },
    { key: "eligibility", items: policy.eligibility },
    { key: "coverage", items: policy.coverage },
    { key: "exclusions", items: policy.exclusions, bad: true },
  ];
  const blockTitle: Record<string, string> = {
    benefits: copy.detail.benefits,
    eligibility: copy.detail.eligibility,
    coverage: copy.detail.coverage,
    exclusions: copy.detail.exclusions,
  };

  return (
    <>
      <section className="policy-hero wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href="/policies">{copy.nav.categories}</a>
          <span className="sep">/</span>
          <a href={`/policies/${policy.categorySlug}`}>{catName}</a>
          <span className="sep">/</span>
          <span>{policy.name}</span>
        </nav>

        <div className="section-head">
          <p className="eyebrow">{copy.categories.eyebrow} · {catName}</p>
          <h2 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)" }}>{policy.name}</h2>
          <p className="lead">{pick(locale, policy.shortDescription)}</p>
        </div>

        <p className="muted-text" style={{ fontSize: "var(--text-sm)", marginBottom: 6 }}>
          {pick(locale, policy.providerNote)}
        </p>
        <p className="faint-text">
          <em>Provider lines shown above are informational. No official partnership with these insurers is claimed unless separately confirmed.</em>
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--sp-12, 90px)" }}>
        <div className="detail-card">
          <div>
            <div className="card card-pad">
              <div className="detail-block">
                <h2>{copy.detail.about}</h2>
                <p>{pick(locale, policy.fullDescription)}</p>
              </div>

              {blocks.map((b) => (
                <div className="detail-block" key={b.key}>
                  <h2>{blockTitle[b.key]}</h2>
                  <ul>
                    {pick(locale, b.items).map((it, i) => (
                      <li key={i} className={b.bad ? "bad" : ""}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="detail-block">
                <h2>{copy.detail.documents}</h2>
                <ul>
                  {policy.documents.map((d, i) => (
                    <li key={i}>
                      {pick(locale, d.label)}
                      {d.optional ? <span className="faint-text"> · {copy.common.optional}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>

              {policy.faqs.length > 0 && (
                <div className="detail-block">
                  <h2>{copy.detail.frequent}</h2>
                  <Accordion
                    items={policy.faqs.map((f, i) => ({
                      id: `pf-${i}`,
                      q: pick(locale, f.q),
                      a: pick(locale, f.a),
                    }))}
                  />
                </div>
              )}

              <div className="disclaimer-box">
                <strong>{copy.detail.disclaimer}</strong> {pick(locale, policy.disclaimer)}
              </div>
            </div>
          </div>

          <aside className="side-card">
            <div className="card card-pad">
              <h3 style={{ marginBottom: 6 }}>{copy.detail.ready}</h3>
              <p className="muted-text" style={{ fontSize: "var(--text-sm)", marginBottom: 16 }}>
                {copy.detail.readySub}
              </p>
              <a
                href={applyHref}
                className="btn btn-primary btn-block"
                target={policy.googleFormUrl ? "_blank" : undefined}
                rel={policy.googleFormUrl ? "noreferrer" : undefined}
              >
                {policy.googleFormUrl ? copy.detail.openSignup : copy.detail.applyNow}
              </a>
              <a href="/support" className="btn btn-ghost btn-block mt-2">
                {copy.detail.trustSupport}
              </a>

              <div className="hero-meta mt-5 flex-col gap-2">
                <span className="chip">☎ {siteConfig.contact.phone.display}</span>
                <span className="chip">🕘 {pick(locale, siteConfig.contact.hours ?? { en: [""], hi: [""] })[0]}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}