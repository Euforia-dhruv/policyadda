import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Contact — PolicyAdda",
  description: "Contact PolicyAdda in Ranchi during working hours.",
};

export default function ContactPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;

  return (
    <section className="pad">
      <div className="wrap max-w-lg">
        <div className="section-head">
          <p className="eyebrow">{copy.footer.contact}</p>
          <h2>Talk to PolicyAdda</h2>
          <p className="lead">{copy.support.lead}</p>
        </div>

        <div className="support-grid">
          <a href={`tel:${c.phone.tel}`} className="card support-card">
            <div className="ico">☎</div>
            <h3>{copy.support.call}</h3>
            <p className="big">{c.phone.display}</p>
          </a>
          <div className="card support-card">
            <div className="ico">📍</div>
            <h3>Address</h3>
            <p>{c.address ? pick(locale, c.address) : ""}</p>
          </div>
          <div className="card support-card">
            <div className="ico">💬</div>
            <h3>{copy.support.whatsapp}</h3>
            <p>{copy.support.whatsappSub}</p>
          </div>
          <div className="card support-card">
            <div className="ico">📷</div>
            <h3>Instagram</h3>
            <a className="big" href="https://instagram.com/policyadda.co.in" target="_blank" rel="noreferrer">{c.instagram}</a>
          </div>
        </div>

        <div className="card" style={{ padding: "24px 26px", marginTop: 10 }}>
          <h3 style={{ marginBottom: 10 }}>{copy.support.hours}</h3>
          {pick(locale, c.hours ?? { en: [], hi: [] }).map((h) => (
            <p key={h} className="text-sm">{h}</p>
          ))}
          <p className="faint-text" style={{ marginTop: 10 }}>
            {copy.support.email}: {copy.support.emailSub}
          </p>
        </div>

        <p className="mt-5 text-sm">
          <a href="/support" className="cat-link">{copy.support.openTicket} →</a>
        </p>
      </div>
    </section>
  );
}