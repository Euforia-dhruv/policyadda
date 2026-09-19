import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";
import { company, pickLocale, careersFormUrl } from "@/content/company";
import type { Bilingual } from "@/content/company";
import StatCard from "@/components/dashboard/StatCard";
import { ExternalLink } from "@/lib/icons";

export const metadata: Metadata = {
  title: "About Us — Policy Adda",
  description: "Policy Adda is a customer-focused insurance consultancy established in 2018. Learn about our journey, mission, values, leadership team and careers at Policy Adda.",
};

function T({ value, locale }: { value: Bilingual; locale: "en" | "hi" }) {
  return <>{pickLocale(value, locale)}</>;
}

export default function AboutPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;
  const l = locale;

  return (
    <section className="pad">
      <div className="wrap max-w-4xl">
        <div className="section-head section-head-compact">
          <p className="eyebrow">{copy.nav.about}</p>
          <h2><T value={company.tagline} locale={l} /></h2>
          <p className="lead"><T value={company.intro} locale={l} /></p>
        </div>

        <div className="detail-block">
          <p className="muted-sm"><T value={company.valueLine} locale={l} /></p>
        </div>

        <div className="detail-block">
          <h2><T value={{ en: "Who We Are", hi: "हम कौन हैं" }} locale={l} /></h2>
          <p className="text-base text-default"><T value={company.whoWeAre} locale={l} /></p>
        </div>

        <div className="detail-block">
          <h2><T value={company.journey.title} locale={l} /></h2>
        </div>
        <div className="stat-grid mb-8">
          {company.journey.stats.map((s) => (
            <StatCard
              key={s.value}
              label={pickLocale(s.label, l)}
              value={s.value}
              sub={s.note ? pickLocale(s.note, l) : undefined}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="card px-[26px] py-6">
            <h3 className="mb-2"><T value={company.mission.title} locale={l} /></h3>
            <p className="text-base text-default mb-2"><T value={company.mission.text} locale={l} /></p>
            <p className="muted-sm"><T value={company.mission.note} locale={l} /></p>
          </div>
          <div className="card px-[26px] py-6">
            <h3 className="mb-2"><T value={company.vision.title} locale={l} /></h3>
            <p className="text-base text-default mb-2"><T value={company.vision.text} locale={l} /></p>
            <p className="muted-sm"><T value={company.vision.note} locale={l} /></p>
          </div>
        </div>

        <div className="detail-block">
          <h2><T value={company.coreValues.title} locale={l} /></h2>
        </div>
        <div className="grid-features mb-8">
          {company.coreValues.items.map((v) => (
            <div className="trust-item card card-fx" key={v.title.en} style={{ minHeight: 130 }}>
              <div className="trust-item-inner">
                <h3><T value={v.title} locale={l} /></h3>
                <p><T value={v.text} locale={l} /></p>
              </div>
            </div>
          ))}
        </div>

        <div className="detail-block">
          <h2><T value={company.solutions.title} locale={l} /></h2>
          <p className="muted-sm mb-3"><T value={company.solutions.note} locale={l} /></p>
          <h3 className="mb-1"><T value={company.solutions.individual.title} locale={l} /></h3>
          <ul className="mb-4">
            {company.solutions.individual.items.map((i) => (
              <li key={i.en}><T value={i} locale={l} /></li>
            ))}
          </ul>
          <h3 className="mb-1"><T value={company.solutions.business.title} locale={l} /></h3>
          <ul>
            {company.solutions.business.items.map((i) => (
              <li key={i.en}><T value={i} locale={l} /></li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <h2><T value={company.claims.title} locale={l} /></h2>
          <h3 className="mb-1"><T value={company.claims.sub} locale={l} /></h3>
          <p className="muted-sm mb-3"><T value={company.claims.intro} locale={l} /></p>
          <ul className="mb-4">
            {company.claims.supports.map((i) => (
              <li key={i.en}><T value={i} locale={l} /></li>
            ))}
          </ul>
          <p className="muted-sm mb-2"><T value={company.claims.objective} locale={l} /></p>
          <p className="muted-xs"><T value={company.claims.disclaimer} locale={l} /></p>
        </div>

        <div className="detail-block">
          <h2><T value={company.team.title} locale={l} /></h2>
          <p className="muted-sm mb-4"><T value={company.team.intro} locale={l} /></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company.team.members.map((m) => (
              <div className="card px-[22px] py-5" key={m.name}>
                <h3 className="mb-1">{m.name}</h3>
                <p className="muted-xs mb-2" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {pickLocale(m.role, l)}
                </p>
                <p className="muted-sm"><T value={m.text} locale={l} /></p>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-block">
          <h2><T value={company.awards.title} locale={l} /></h2>
          <p className="muted-sm"><T value={company.awards.text} locale={l} /></p>
        </div>

        <div className="detail-block">
          <h2><T value={company.careers.title} locale={l} /></h2>
          <h3 className="mb-1"><T value={company.careers.tagline} locale={l} /></h3>
          <p className="muted-sm mb-4"><T value={company.careers.intro} locale={l} /></p>

          <h3 className="mb-1"><T value={company.careers.why.title} locale={l} /></h3>
          <div className="grid-features mb-5">
            {company.careers.why.items.map((v) => (
              <div className="trust-item card card-fx" key={v.title.en} style={{ minHeight: 110 }}>
                <div className="trust-item-inner">
                  <h3><T value={v.title} locale={l} /></h3>
                  <p><T value={v.text} locale={l} /></p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-1"><T value={company.careers.life.title} locale={l} /></h3>
          <p className="muted-sm mb-3"><T value={company.careers.life.text} locale={l} /></p>
          <div className="flex flex-wrap gap-2 mb-5">
            {company.careers.life.areas.map((a) => (
              <span className="btn btn-ghost" style={{ cursor: "default", padding: "0.45rem 0.9rem", fontSize: "var(--text-sm)" }} key={a}>{a}</span>
            ))}
          </div>
          <p className="muted-sm mb-5"><T value={company.careers.life.note} locale={l} /></p>

          <h3 className="mb-1"><T value={company.careers.whoCanJoin.title} locale={l} /></h3>
          <ul className="mb-4">
            {company.careers.whoCanJoin.items.map((i) => (
              <li key={i.en}><T value={i} locale={l} /></li>
            ))}
          </ul>
          <p className="muted-xs mb-4"><T value={company.careers.whoCanJoin.note} locale={l} /></p>

          <h3 className="mb-1"><T value={company.careers.resume.title} locale={l} /></h3>
          <p className="muted-sm mb-4"><T value={company.careers.resume.text} locale={l} /></p>
          <p className="mb-4">
            <a href={careersFormUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <T value={company.careers.resume.cta} locale={l} /> <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
            </a>
          </p>

          <h3 className="mb-1"><T value={company.careers.workCulture.title} locale={l} /></h3>
          <div className="grid-features mb-5">
            {company.careers.workCulture.items.map((v) => (
              <div className="trust-item card card-fx" key={v.title.en} style={{ minHeight: 110 }}>
                <div className="trust-item-inner">
                  <h3><T value={v.title} locale={l} /></h3>
                  <p><T value={v.text} locale={l} /></p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-1"><T value={company.careers.joinCta} locale={l} /></h3>
          <p className="muted-sm mb-4"><T value={company.careers.joinText} locale={l} /></p>

          <div className="card px-[26px] py-6" style={{ borderLeft: "4px solid var(--bad)" }}>
            <h3 className="mb-2"><T value={company.careers.safety.title} locale={l} /></h3>
            <p className="muted-sm"><T value={company.careers.safety.text} locale={l} /></p>
          </div>
        </div>
      </div>
    </section>
  );
}