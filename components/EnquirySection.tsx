import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { ExternalLink } from "@/lib/icons";

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

          {formUrl && (
            <div className="enquiry-embed">
              <iframe
                src={`${formUrl}/viewform`}
                title={locale === "hi" ? "बीमा आवेदन फ़ॉर्म" : "Insurance enquiry form"}
                loading="lazy"
                className="enquiry-frame"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}