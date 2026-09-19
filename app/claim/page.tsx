import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";
import Accordion from "@/components/Accordion";
import { Phone, Message, ExternalLink, FileText } from "@/lib/icons";
import { claimFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "File a Claim — PolicyAdda",
  description: "Intimate your claim to PolicyAdda. Dedicated Claim expert, claim helpline and a transparent claim lifecycle from intimation to settlement.",
};

export default function ClaimPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;
  const claimUrl = siteConfig.forms?.claim;
  const whatsapp = c.whatsapp;

  return (
    <>
      <section className="pad pb-2.5">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{copy.claim.eyebrow}</p>
            <h2>{copy.claim.title}</h2>
            <p className="lead">{copy.claim.lead}</p>
          </div>
        </div>
      </section>

      <section className="pad section-pad-0">
        <div className="wrap">
          {claimUrl && (
            <a href={claimUrl} target="_blank" rel="noreferrer" className="btn btn-primary mb-3">
              {copy.claim.formCta} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
            </a>
          )}
          <p className="muted-xs mb-6">{copy.claim.formNote}</p>

          <div className="claim-thanks mb-8">
            <FileText size={18} />
            <span>{copy.claim.thanks}</span>
          </div>

          <div className="support-grid mb-6">
            <div className="card support-card">
              <div className="ico"><Phone size={22} /></div>
              <h3>{copy.claim.helpline}</h3>
              <p>{copy.claim.helplineSub}</p>
              <p className="big"><a href={`tel:${c.phone.tel}`} className="no-underline">{c.phone.display}</a> · <a href={`tel:${c.phoneSecondary?.tel}`} className="no-underline">{c.phoneSecondary?.display}</a></p>
            </div>
            {whatsapp && (
              <a className="card support-card no-underline" href={whatsapp} target="_blank" rel="noreferrer">
                <div className="ico"><Message size={22} /></div>
                <h3>{copy.claim.whatsappCta}</h3>
                <p>{copy.claim.helplineSub}</p>
              </a>
            )}
          </div>

          <div className="detail-block">
            <h2>{copy.claim.lifecycleTitle}</h2>
            <p className="muted-sm mb-4">{copy.claim.lifecycleLead}</p>
            <div className="claim-steps">
              {copy.claim.steps.map((s, i) => (
                <div className="card claim-step" key={s.t}>
                  <div className="claim-step-no">{i + 1}</div>
                  <div>
                    <h3 className="mb-1">{s.t}</h3>
                    <p className="muted-sm">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-block">
            <h2>{copy.faq.title}</h2>
            <Accordion items={claimFaqs.map((f) => ({ id: f.id, q: f.q[locale], a: f.a[locale] }))} />
          </div>
        </div>
      </section>
    </>
  );
}