import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";
import { Phone, Clock, Mail, Message, ExternalLink } from "@/lib/icons";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Support — PolicyAdda",
  description: "Contact PolicyAdda for help, submit enquiries, or reach our support team.",
};

export default function SupportPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;
  const enquiryUrl = siteConfig.forms?.enquiry;
  const claimUrl = siteConfig.forms?.claim;

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
              {c.phoneSecondary && <p className="big">{c.phoneSecondary.display}</p>}
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
            <a href={c.whatsapp ?? "#"} target="_blank" rel="noreferrer" className="card support-card no-underline">
              <div className="ico"><Message size={22} /></div>
              <h3>{copy.support.whatsapp}</h3>
              <p>{copy.support.whatsappSub}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="pad section-pad-0">
        <div className="wrap">
          <div className="support-grid">
            {enquiryUrl && (
              <a href={enquiryUrl} target="_blank" rel="noreferrer" className="card support-card no-underline">
                <h3>{locale === "hi" ? "सहायता के लिए आवेदन करें" : "Get Assistance"}</h3>
                <p>{locale === "hi" ? "आवेदन फ़ॉर्म भरें — PolicyAdda एक्सपर्ट आपसे संपर्क करेगा।" : "Fill the enquiry form — a PolicyAdda expert will contact you."}</p>
                <span className="btn btn-primary mt-2">
                  {locale === "hi" ? "आवेदन फ़ॉर्म खोलें" : "Open Enquiry Form"} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
                </span>
              </a>
            )}
            {claimUrl && (
              <a href={claimUrl} target="_blank" rel="noreferrer" className="card support-card no-underline">
                <h3>{locale === "hi" ? "दावा दायर करें" : "File a Claim"}</h3>
                <p>{locale === "hi" ? "क्लेम सूचना फ़ॉर्म भरें — हमारी टीम आपसे संपर्क करेगी।" : "Fill the claim intimation form — our team will reach out."}</p>
                <span className="btn btn-primary mt-2">
                  {locale === "hi" ? "क्लेम फ़ॉर्म खोलें" : "Open Claim Form"} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      <FaqSection copy={copy} locale={locale} />
    </>
  );
}