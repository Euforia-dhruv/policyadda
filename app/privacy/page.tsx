import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Privacy Policy — PolicyAdda",
  description: "Privacy commitments for PolicyAdda. Full text to be published once verified.",
};

export default function PrivacyPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="section-head">
          <p className="eyebrow">{copy.footer.privacy}</p>
          <h2>{copy.footer.privacy}</h2>
          <p className="lead">Effective date: pending verification.</p>
        </div>

        <div className="dev-note" style={{ marginBottom: 20 }}>
          ⓘ {copy.verif.pendingBody}
        </div>

        <div className="card" style={{ padding: 26 }}>
          <p style={{ fontSize: 14.5, color: "var(--muted)" }}>
            Until the PolicyAdda team provides a formally approved Privacy Policy, the practices below describe the current default behaviour of this website. They will be replaced by the approved policy.
          </p>
          <ul className="tl-list" style={{ marginTop: 14, display: "grid", gap: 10, fontSize: 14.5, color: "var(--muted)", listStyle: "none" }}>
            <li>• Information submitted through enquiry, application, and support forms is used solely to respond to and process your request.</li>
            <li>• Contact details you provide may be used by a PolicyAdda executive to reach you about your enquiry.</li>
            <li>• Application status pages never display your personal details publicly.</li>
            <li>• Access to stored information is protected by role-based access control and server-side enforcement.</li>
            <li>• We do not sell customer information to third parties.</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--faint)", marginTop: 16 }}>
            Contact: {siteConfig.contact.phone.display} · {siteConfig.contact.address ? pick(locale, siteConfig.contact.address) : ""}
          </p>
        </div>
      </div>
    </section>
  );
}