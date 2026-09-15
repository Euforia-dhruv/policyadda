import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "About — PolicyAdda",
  description: "PolicyAdda helps customers understand insurance categories and policy options in Ranchi, India.",
};

export default function AboutPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const c = siteConfig.contact;

  return (
    <section className="pad">
      <div className="wrap max-w-lg">
        <div className="section-head">
          <p className="eyebrow">{copy.nav.about}</p>
          <h2>About PolicyAdda</h2>
          <p className="lead">
            We help people understand insurance — before they buy. Clear information. Real assistance. A reachable team.
          </p>
        </div>

        <div className="card px-[30px] py-7 mb-6">
          <p className="text-base text-default mb-3">
            Insurance is often explained in complicated legal terms. Most customers are left confused — or worse, misled. PolicyAdda was created to change that experience.
          </p>
          <p className="muted-sm">
            We don't sell policies directly. Instead, we help you understand the available policy options for a given category, explain what is typically covered and excluded, and then assist you through the application process with a real person from our team.
          </p>
        </div>

        <div className="detail-block">
          <h2>Where we operate</h2>
          <p>
            {c.address ? pick(locale, c.address) : ""}<br />
            {c.phone.display}
          </p>
        </div>

        <div className="detail-block">
          <h2>Working hours</h2>
          {pick(locale, c.hours ?? { en: [], hi: [] }).map((h) => <p key={h}>{h}</p>)}
        </div>

        <div className="dev-note">
          ⓘ {copy.verif.pendingBody}
        </div>
      </div>
    </section>
  );
}