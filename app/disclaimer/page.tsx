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
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="section-head">
          <p className="eyebrow">{copy.footer.disclaimer}</p>
          <h2>{copy.footer.disclaimer}</h2>
        </div>

        <div className="dev-note" style={{ marginBottom: 20 }}>
          ⓘ {copy.verif.pendingBody}
        </div>

        <div className="card" style={{ padding: 26 }}>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>Not a legal or financial document</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              All policy information on this website is a summary for informational purposes only and does not constitute a policy document, legal advice, financial advice, or a guarantee of coverage.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>No unverified claims</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              PolicyAdda does not claim formal partnerships with any insurer, any regulatory registration (e.g. IRDAI), customer statistics, or testimonials unless such information has been explicitly verified and published.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>Coverage is insurer-defined</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              Exclusions, waiting periods, and coverage boundaries are defined by the actual insurer&apos;s policy wording. Always read the policy document and confirm with the insurer before purchasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}