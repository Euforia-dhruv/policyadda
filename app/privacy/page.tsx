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
      <div className="wrap max-w-md">
        <div className="section-head">
          <p className="eyebrow">{copy.footer.privacy}</p>
          <h2>{copy.footer.privacy}</h2>
          <p className="lead">Effective date: pending verification.</p>
        </div>

        <div className="dev-note mb-5">
          ⓘ {copy.verif.pendingBody}
        </div>

        <div className="card card-pad">
          <p className="muted-sm">
            Until the PolicyAdda team provides a formally approved Privacy Policy, the practices below describe the current default behaviour of this website. They will be replaced by the approved policy.
          </p>
          <ul className="tl-list mt-3" style={{ fontSize: "var(--text-sm)", color: "var(--muted)" }}>
            <li>• Information submitted through enquiry, application, and support forms is used solely to respond to and process your request.</li>
            <li>• Contact details you provide may be used by a PolicyAdda executive to reach you about your enquiry.</li>
            <li>• Application status pages never display your personal details publicly.</li>
            <li>• Access to stored information is protected by role-based access control and server-side enforcement.</li>
            <li>• We do not sell customer information to third parties.</li>
          </ul>
          <p className="faint-sm mt-4">
            Contact: {siteConfig.contact.phone.display} · {siteConfig.contact.address ? pick(locale, siteConfig.contact.address) : ""}
          </p>
        </div>
      </div>
    </section>
  );
}