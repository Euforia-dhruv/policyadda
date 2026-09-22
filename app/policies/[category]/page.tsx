import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import PolicyCard from "@/components/PolicyCard";

type Params = { category: string };

const CATEGORY_IMAGE: Record<string, { src: string; alt: string }> = {
  motor: { src: "/assets/03 - Motor.webp", alt: "Motor insurance" },
  health: { src: "/assets/04 - Health.webp", alt: "Health insurance" },
  travel: { src: "/assets/05 - Travel.webp", alt: "Travel insurance" },
  business: { src: "/assets/06 - Business.webp", alt: "Business insurance" },
  life: { src: "/assets/02 - Advisor.webp", alt: "Life insurance advisor" },
  property: { src: "/assets/cards/Property & Home Insurance.png", alt: "Property and home insurance" },
};

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
  const image = CATEGORY_IMAGE[category];

  return (
    <>
      <section className="pad pb-7">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">{copy.nav.home}</a>
            <span className="sep">/</span>
            <a href="/policies">{copy.nav.categories}</a>
            <span className="sep">/</span>
            <span>{pick(locale, cat.name)}</span>
          </nav>
          <div className="cat-hero">
            <div className="section-head cat-hero-copy">
              <p className="eyebrow">{cat.icon} {copy.categories.eyebrow}</p>
              <h2>{pick(locale, cat.name)}</h2>
              <p className="lead">{pick(locale, cat.description)}</p>
            </div>
            {image && (
              <div className="cat-hero-media">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={400}
                  priority
                  className="cat-hero-img"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pad pt-2.5">
        <div className="wrap">
          {policies.length === 0 ? (
            <div className="notice-center">
              <h2>{copy.common.comingSoon}</h2>
              <p>{copy.common.comingSoonSub}</p>
              <p className="mt-3">
                <a href="/support" className="btn btn-primary">{copy.support.call}</a>
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