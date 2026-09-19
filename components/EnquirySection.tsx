import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { ExternalLink, Phone, Mail } from "@/lib/icons";

export default function EnquirySection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const formUrl = siteConfig.forms?.enquiry;

  return (
    <section className="pad" id="enquiry">
      <div className="wrap">
        <div className="enquiry-grid">
          <div className="section-head">
            <p className="eyebrow">{copy.home.enquiryEyebrow}</p>
            <h2>{copy.home.enquiryTitle}</h2>
            <p className="lead">{copy.home.enquiryLead}</p>
            {formUrl && (
              <a href={formUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                {copy.home.enquiryCta} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
              </a>
            )}
            {copy.home.enquiryNote && <p className="muted-xs">{copy.home.enquiryNote}</p>}
          </div>

          <div className="enquiry-contact-cards">
            <a href={`tel:${siteConfig.contact.phone.tel}`} className="card contact-card">
              <Phone size={22} />
              <div>
                <p className="font-semibold">{siteConfig.contact.phone.display}</p>
                <p className="muted-xs">Free Consultation</p>
              </div>
            </a>
            {siteConfig.contact.phoneSecondary && (
              <a href={`tel:${siteConfig.contact.phoneSecondary.tel}`} className="card contact-card">
                <Phone size={22} />
                <div>
                  <p className="font-semibold">{siteConfig.contact.phoneSecondary.display}</p>
                  <p className="muted-xs">Free Consultation</p>
                </div>
              </a>
            )}
            <a href={`mailto:${siteConfig.contact.salesEmail}`} className="card contact-card">
              <Mail size={22} />
              <div>
                <p className="font-semibold">{siteConfig.contact.salesEmail}</p>
                <p className="muted-xs">Sales Enquiry</p>
              </div>
            </a>
            {siteConfig.contact.whatsapp && (
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="card contact-card">
                <ExternalLink size={22} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="muted-xs">Chat with us</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}