import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Disclaimer — PolicyAdda",
  description: "Important disclaimers about insurance information on PolicyAdda.",
};

export default function DisclaimerPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  if (locale === "hi") {
    return (
      <section className="pad">
        <div className="wrap max-w-md">
          <div className="section-head">
            <p className="eyebrow">{copy.footer.disclaimer}</p>
            <h2>{copy.footer.disclaimer}</h2>
          </div>
          <div className="card card-pad">
            <div className="detail-block">
              <p className="muted-sm mb-4">
                Policy Adda बीमा उत्पादों और सेवाओं के बारे में सटीक, स्पष्ट और निष्पक्ष जानकारी प्रदान करने का प्रयास करता है। हालांकि, हमारी वेबसाइट, पोर्टल या मोबाइल एप्लिकेशन पर उपलब्ध जानकारी सामान्य सूचना उद्देश्यों के लिए है और बीमा कंपनियों से प्राप्त जानकारी पर आधारित है।
              </p>
              <p className="muted-sm mb-4">
                Policy Adda बिना किसी पूर्व सूचना के किसी भी जानकारी, उत्पाद विवरण, सुविधाओं या सेवाओं को संशोधित, अपडेट या बंद करने का अधिकार सुरक्षित रखता है।
              </p>
              <p className="muted-sm mb-4">
                Policy Adda, इसके निदेशकों, कर्मचारियों, अधिकारियों, साझेदारों और सहयोगियों को ऐसी जानकारी पर भरोसा करने से उत्पन्न किसी भी हानि, क्षति या परिणाम के लिए उत्तरदायी नहीं होगा।
              </p>
              <p className="muted-sm mb-4">
                बीमा <strong>आग्रह और बाज़ार जोखिमों</strong> के अधीन है। Policy Adda एक बीमा दलाल/सुविधाकर्ता के रूप में कार्य करता है और किसी भी बीमा पॉलिसी या दावे के जारी होने, स्वीकृति, नवीनीकरण या निपटान की गारंटी नहीं देता है।
              </p>
              <p className="muted-sm">
                इस वेबसाइट, पोर्टल या मोबाइल एप्लिकेशन में निहित कुछ भी किसी भी बीमा उत्पाद, कवरेज या दावे के परिणाम की गारंटी, वारंटी या आश्वासन के रूप में नहीं माना जाएगा।
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pad">
      <div className="wrap max-w-md">
        <div className="section-head">
          <p className="eyebrow">{copy.footer.disclaimer}</p>
          <h2>{copy.footer.disclaimer}</h2>
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <p className="muted-sm mb-4">
              Policy Adda endeavours to provide accurate, clear and unbiased information regarding insurance products and services. However, the information available on our website, portal or mobile application is for general informational purposes and is based on information provided by insurers. We do not guarantee that such information is complete, current or free from errors or omissions.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm mb-4">
              Policy Adda reserves the right to modify, update or discontinue any information, product details, features or services without prior notice.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm mb-4">
              While reasonable efforts are made to maintain the accuracy and quality of the information provided, Policy Adda, its directors, officers, employees, partners and associates shall not be liable for any loss, damage or consequence arising from reliance on such information. Users are advised to exercise their own judgment and carefully read the policy wording, prospectus, terms and other applicable documents before making any insurance decision.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm mb-4">
              Insurance is subject to <strong>solicitation and market risks</strong>. Policy Adda acts as an insurance broker/facilitator and does not guarantee the issuance, acceptance, renewal or settlement of any insurance policy or claim. The acceptance or rejection of a proposal or claim is solely at the discretion of the concerned insurer.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm mb-4">
              The customer is solely responsible for the authenticity and accuracy of documents and information submitted through our platform.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm mb-4">
              Policy Adda does not make any representation or warranty regarding the accuracy of quotes, comparisons, product features or other information provided by insurers. Any insurance purchase or investment decision is made solely at the customer&apos;s discretion and risk.
            </p>
          </div>

          <div className="detail-block">
            <p className="muted-sm">
              Nothing contained on this website, portal or mobile application shall be construed as a guarantee, warranty or assurance of any insurance product, coverage or claim outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
