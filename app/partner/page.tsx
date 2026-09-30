import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import GoogleForm from "@/components/GoogleForm";

export const metadata: Metadata = {
  title: "Become a Partner — PolicyAdda",
  description:
    "Join the PolicyAdda network of insurance professionals. Earn up to 1 Lakh per month, from anywhere — share your details and our team will contact you.",
};

export default function PartnerPage() {
  const copy = getCopy(getLocale());
  const p = copy.partnerPopout;

  return (
    <section className="pad">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{p.tagline}</p>
          <h2>{p.title}</h2>
          <p className="lead">{p.lead}</p>
        </div>
        <GoogleForm formKey="partner" copy={copy} successMessage={p.thanks} />
      </div>
    </section>
  );
}
