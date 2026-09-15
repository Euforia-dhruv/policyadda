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
          <h2>{locale === "hi" ? "पॉलिसी अड्डा के बारे में" : "About PolicyAdda"}</h2>
          <p className="lead">
            {locale === "hi"
              ? "हम लोगों को बीमा समझने में मदद करते हैं — खरीदने से पहले। स्पष्ट जानकारी, असली सहायता, और एक पहुंचने वाली टीम।"
              : "We help people understand insurance — before they buy. Clear information, real assistance, and a reachable team."}
          </p>
        </div>

        <div className="card px-[30px] py-7 mb-6">
          <p className="text-base text-default mb-3">
            {locale === "hi"
              ? "बीमा अक्सर जटिल कानूनी शब्दों में समझाया जाता है। अधिकांश ग्राहक भ्रमित रह जाते हैं — या बदतर, गुमराह हो जाते हैं। पॉलिसीअड्डा इस अनुभव को बदलने के लिए बनाया गया था।"
              : "Insurance is often explained in complicated legal terms. Most customers are left confused — or worse, misled. PolicyAdda was created to change that experience."}
          </p>
          <p className="muted-sm">
            {locale === "hi"
              ? "हम सीधे पॉलिसी नहीं बेचते। इसके बजाय, हम आपको किसी श्रेणी के लिए उपलब्ध पॉलिसी विकल्पों को समझने में मदद करते हैं, यह बताते हैं कि आमतौर पर क्या कवर होता है और क्या नहीं, और फिर आपकी आवेदन प्रक्रिया में हमारी टीम के एक वास्तव व्यक्ति के साथ सहायता करते हैं।"
              : "We don't sell policies directly. Instead, we help you understand the available policy options for a given category, explain what is typically covered and excluded, and then assist you through the application process with a real person from our team."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="card px-[26px] py-6">
            <h3 className="mb-2">{locale === "hi" ? "हमारा मिशन" : "Our Mission"}</h3>
            <p className="muted-sm">
              {locale === "hi"
                ? "बीमा को सरल, पारदर्शी और हर किसी के लिए सुलभ बनाना।"
                : "Make insurance simple, transparent, and accessible to everyone."}
            </p>
          </div>
          <div className="card px-[26px] py-6">
            <h3 className="mb-2">{locale === "hi" ? "हम कैसे काम करते हैं" : "How We Work"}</h3>
            <p className="muted-sm">
              {locale === "hi"
                ? "हम आपकी जरूरतों को समझते हैं, विकल्पों की तुलना करते हैं, और आवेदन से नीति तक हर कदम पर आपका मार्गदर्शन करते हैं।"
                : "We understand your needs, compare options, and guide you every step of the way — from enquiry to policy."}
            </p>
          </div>
        </div>

        <div className="detail-block">
          <h2>{locale === "hi" ? "हम कहां काम करते हैं" : "Where We Operate"}</h2>
          <p>
            {c.address ? pick(locale, c.address) : ""}<br />
            {c.phone.display}
          </p>
        </div>

        <div className="detail-block">
          <h2>{locale === "hi" ? "कार्य समय" : "Working Hours"}</h2>
          {pick(locale, c.hours ?? { en: [], hi: [] }).map((h) => <p key={h}>{h}</p>)}
        </div>
      </div>
    </section>
  );
}
