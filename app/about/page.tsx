import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "About — Policy Adda",
  description: "Policy Adda makes insurance accessible, understandable, and beneficial for everyone. Based in Ranchi, Jharkhand. Insurance intermediary/broker facilitating products from authorised insurers.",
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
              ? "पॉलिसी अड्डा का मिशन बीमा को सभी के लिए सुलभ, समझने योग्य और लाभदायक बनाना है। हम लाइफ, हेल्थ, मोटर, ट्रैवल और बिजनेस कवरेज सहित प्रमुख श्रेणियों में व्यक्तिगत बीमा समाधान प्रदान करते हैं।"
              : "At Policy Adda, our mission is to make insurance accessible, understandable, and beneficial for everyone. We provide personalised insurance solutions across key categories including life, health, motor, travel and business coverages, backed by real-time underwriting insights and expert advice."}
          </p>
          <p className="muted-sm">
            {locale === "hi"
              ? "अखंडता, टीम वर्क और सेवा उत्कृष्टता पर निर्मित, हम अपने ग्राहकों को वह सुरक्षित करने में मदद करते हैं जो सबसे अधिक मायने रखता है — उनकी बीमा यात्रा को सरल बनाते हुए।"
              : "Built on integrity, teamwork and service excellence, we help our clients protect what matters most — while simplifying their insurance journey."}
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
