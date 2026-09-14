import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { pick } from "@/lib/i18n";

/**
 * Homepage support band — human first. Phone, working hours, and a ticket CTA.
 */
export default function SupportSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  return (
    <section className="pad" id="support" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="card support-home">
          <div className="section-head" style={{ maxWidth: 600, marginBottom: 26 }}>
            <p className="eyebrow">{copy.support.eyebrow}</p>
            <h2>{copy.support.homeTitle}</h2>
            <p className="lead">{copy.support.homeLead}</p>
          </div>
          <div className="support-grid" style={{ marginBottom: 0 }}>
            <a className="card support-card" href="tel:+917677888748">
              <div className="ico">☎</div>
              <h3>{copy.support.call}</h3>
              <p className="big">{c.phone.display}</p>
              <p>{copy.support.callSub}</p>
            </a>
            <div className="card support-card">
              <div className="ico">🕐</div>
              <h3>{copy.support.hours}</h3>
              <p className="big">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</p>
              <p>{copy.support.hoursSub}</p>
            </div>
            <a className="card support-card" href="/support">
              <div className="ico">✎</div>
              <h3>{copy.support.ticket}</h3>
              <p className="big">{copy.support.openTicket}</p>
              <p>{copy.support.ticketSub}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}