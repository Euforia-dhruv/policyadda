import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import { siteConfig } from "@/content/config";
import ApplyForm from "@/components/ApplyForm";

type Params = { slug: string };

export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return data.policies().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = getLocale();
  const policy = data.policyBySlug(slug);
  if (!policy) return { title: "Not found — PolicyAdda" };
  return { title: `Get assistance — ${policy.name} — PolicyAdda` };
}

export default async function ApplyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const locale = getLocale();
  const copy = getCopy(locale);
  const policy = data.policyBySlug(slug);
  if (!policy || !policy.isActive) notFound();

  const cat = data.categoryBySlug(policy.categorySlug);
  const catName = cat ? pick(locale, cat.name) : policy.categorySlug;
  const statuses = data.statuses();

  return (
    <section className="pad">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href="/policies">{copy.nav.categories}</a>
          <span className="sep">/</span>
          <a href={`/policies/${policy.categorySlug}`}>{catName}</a>
          <span className="sep">/</span>
          <a href={`/policies/${policy.categorySlug}/${policy.slug}`}>{policy.name}</a>
        </nav>

        <div className="section-head">
          <p className="eyebrow">{copy.apply.title}</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3.4vw,2.4rem)", marginBottom: 10 }}>{policy.name}</h2>
          <p className="lead">{copy.apply.sub}</p>
        </div>

        <div className="detail-card">
<ApplyForm
          locale={locale}
          copy={copy}
          statuses={statuses}
          policyName={policy.name}
          policyId={policy.slug}
        />

          <aside className="side-card">
            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ marginBottom: 10 }}>Prefer to talk first?</h3>
              <p style={{ fontSize: 13.5, marginBottom: 12 }}>
                Call us during working hours and speak to a person directly.
              </p>
              <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-ghost btn-block">
                ☎ {siteConfig.contact.phone.display}
              </a>
              <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 12 }}>
                {copy.support.hoursSub}
              </p>
            </div>

            <div className="dev-note" style={{ marginTop: 14 }}>
              ⓘ {copy.verif.note}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}