import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Disclaimer — PolicyAdda",
  description: "Important disclaimers about insurance information on this website.",
};

export default function DisclaimerPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap max-w-md">
        <div className="section-head">
          <p className="eyebrow">{copy.footer.disclaimer}</p>
          <h2>{copy.footer.disclaimer}</h2>
        </div>

        <div className="dev-note mb-5">
          ⓘ {copy.verif.pendingBody}
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <h2 className="tl-label text-base">Not a legal or financial document</h2>
            <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>
              All policy information on this website is a summary for informational purposes only and does not constitute a policy document, legal advice, financial advice, or a guarantee of coverage.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label text-base">No unverified claims</h2>
            <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>
              PolicyAdda does not claim formal partnerships with any insurer, any regulatory registration (e.g. IRDAI), customer statistics, or testimonials unless such information has been explicitly verified and published.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label text-base">Coverage is insurer-defined</h2>
            <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>
              Exclusions, waiting periods, and coverage boundaries are defined by the actual insurer&apos;s policy wording. Always read the policy document and confirm with the insurer before purchasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}