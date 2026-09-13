import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Terms & Conditions — PolicyAdda",
  description: "Terms of use for the PolicyAdda website. To be updated once verified.",
};

export default function TermsPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="section-head">
          <p className="eyebrow">{copy.footer.terms}</p>
          <h2>{copy.footer.terms}</h2>
          <p className="lead">Last reviewed: pending verification.</p>
        </div>

        <div className="dev-note" style={{ marginBottom: 20 }}>
          ⓘ {copy.verif.pendingBody}
        </div>

        <div className="card" style={{ padding: 26 }}>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>Nature of this platform</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              This website provides informational assistance about insurance categories and policy concepts. It is not itself an insurer, and nothing on this site is a policy document or offer of coverage. Enquiries submitted here are requests for assistance, not applications for insurance.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>Your responsibility</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              Provide accurate contact information. Policy terms are ultimately defined by the insurer&apos;s policy wording; confirm specifics with the insurer or a PolicyAdda executive before purchase.
            </p>
          </div>
          <div className="detail-block">
            <h2 className="tl-label" style={{ fontSize: "1.05rem" }}>Full terms</h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
              The complete Terms &amp; Conditions document will replace this summary once provided and approved by the PolicyAdda team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}