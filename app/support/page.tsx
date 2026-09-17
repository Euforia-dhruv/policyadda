import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";
import { data } from "@/lib/data";
import { Phone, Clock, Mail, Message, Info } from "@/lib/icons";
import Accordion from "@/components/Accordion";
import TicketForm from "@/components/TicketForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Support — PolicyAdda",
  description: "Contact PolicyAdda for help, submit enquiries, or raise a support ticket.",
};

export default function SupportPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;

  return (
    <>
      <section className="pad pb-2.5">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{copy.support.eyebrow}</p>
            <h2>{copy.support.title}</h2>
            <p className="lead">{copy.support.lead}</p>
          </div>
        </div>
      </section>

      <section className="pad section-pad-0">
        <div className="wrap">
          <div className="support-grid">
            <a href={`tel:${c.phone.tel}`} className="card support-card">
              <div className="ico"><Phone size={22} /></div>
              <h3>{copy.support.call}</h3>
              <p className="big">{c.phone.display}</p>
              <p>{copy.support.callSub}</p>
            </a>
            <div className="card support-card">
              <div className="ico"><Clock size={22} /></div>
              <h3>{copy.support.hours}</h3>
              {pick(locale, c.hours ?? { en: [], hi: [] }).map((h) => <p key={h}>{h}</p>)}
            </div>
            <div className="card support-card">
              <div className="ico"><Mail size={22} /></div>
              <h3>{copy.support.email}</h3>
              <p>{copy.support.emailSub}</p>
            </div>
            <div className="card support-card">
              <div className="ico"><Message size={22} /></div>
              <h3>{copy.support.whatsapp}</h3>
              <p>{copy.support.whatsappSub}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad section-pad-0">
        <div className="wrap">
          <div className="detail-card">
            <TicketForm locale={locale} copy={copy} />
            <aside className="side-card">
              <div className="card card-pad">
                <h3>{copy.support.ticket}</h3>
                <p className="muted-text text-sm mt-2">
                  {copy.support.tNote}
                </p>
              </div>
              <div className="dev-note mt-3.5">
                <Info size={16} className="inline-block align-[-3px] mr-1.5" /> {copy.verif.note}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FaqSection copy={copy} locale={locale} />
    </>
  );
}