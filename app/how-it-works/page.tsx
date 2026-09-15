import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import HowPageSteps from "@/components/HowPageSteps";

export const metadata: Metadata = {
  title: "How It Works — PolicyAdda",
  description: "A transparent, step-by-step customer journey at PolicyAdda.",
};

export default function HowPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap max-w-lg">
        <div className="section-head">
          <p className="eyebrow">{copy.how.eyebrow}</p>
          <h2>{copy.how.title}</h2>
          <p className="lead">{copy.how.lead}</p>
        </div>
        <HowPageSteps copy={copy} />
      </div>
    </section>
  );
}
