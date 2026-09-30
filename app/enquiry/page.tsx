import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import GoogleForm from "@/components/GoogleForm";

export const metadata: Metadata = {
  title: "Get a Free Quote — PolicyAdda",
  description:
    "Fill in a short enquiry form and a PolicyAdda expert will contact you with the best insurance options. No obligation, no commitment.",
};

export default function EnquiryPage() {
  const copy = getCopy(getLocale());

  return (
    <section className="pad">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.home.enquiryEyebrow}</p>
          <h2>{copy.home.enquiryTitle}</h2>
          <p className="lead">{copy.home.enquiryLead}</p>
        </div>
        <GoogleForm formKey="enquiry" copy={copy} submitLabel={copy.forms.enquirySubmit} />
        {copy.home.enquiryNote && <p className="muted-xs mt-3">{copy.home.enquiryNote}</p>}
      </div>
    </section>
  );
}
