import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Terms & Conditions — PolicyAdda",
  description: "Terms of use for the PolicyAdda website and services.",
};

export default function TermsPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  if (locale === "hi") {
    return (
      <section className="pad">
        <div className="wrap max-w-md">
          <div className="section-head">
            <p className="eyebrow">{copy.footer.terms}</p>
            <h2>{copy.footer.terms}</h2>
            <p className="lead">अंतिम समीक्षा: सत्यापन के बाद अपडेट किया जाएगा।</p>
          </div>
          <div className="dev-note mb-5">
            ⓘ अंग्रेज़ी संस्करण और अनुवादित संस्करण के बीच किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।
          </div>
          <div className="card card-pad">
            <div className="detail-block">
              <h2 className="tl-label text-base">हमारी सेवाएं</h2>
              <p className="muted-sm">
                Policy Adda बीमा संबंधी जानकारी, सहायता और दलाली सेवाएं प्रदान करता है। वेबसाइट पर प्रदर्शित जानकारी बीमा कंपनियों और अन्य अधिकृत स्रोतों से प्राप्त जानकारी पर आधारित है। बीमा अनुबंध संबंधित बीमाकर्ता द्वारा जारी और अंडरराइट किए जाते हैं।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">आपकी जिम्मेदारी</h2>
              <p className="muted-sm">
                सटीक, पूर्ण और वर्तमान जानकारी प्रदान करें। खरीदने से पहले पॉलिसी की शर्तों की पुष्टि के लिए बीमाकर्ता या Policy Adda कार्यकारी से संपर्क करें।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">बौद्धिक संपदा</h2>
              <p className="muted-sm">
                वेबसाइट पर उपलब्ध सभी ट्रेडमार्क, लोगो, डिज़ाइन, टेक्स्ट, ग्राफिक्स और अन्य सामग्री Policy Adda या उनके संबंधित मालिकों की है और लागू बौद्धिक संपदा कानूनों द्वारा सुरक्षित है।
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
          <p className="eyebrow">{copy.footer.terms}</p>
          <h2>{copy.footer.terms}</h2>
          <p className="lead">Welcome to www.policyadda.co.in. By accessing or using the Website, you agree to be bound by these Terms.</p>
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <h2 className="tl-label text-base">1. Our Services</h2>
            <p className="muted-sm">
              Policy Adda provides insurance-related information, assistance and broking services, including facilitation of insurance proposals, policy purchase, renewals and related services for products offered by insurers. Information displayed on the Website is based on information received from insurers and other authorised sources. Insurance contracts are issued and underwritten by the respective insurers.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">2. Eligibility</h2>
            <p className="muted-sm">
              You must be 18 years or older and legally capable of entering into a binding contract under applicable Indian law to use our services. You must provide accurate, complete and current information.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">3. Account and Security</h2>
            <p className="muted-sm">
              Where an account is required, you are responsible for maintaining the confidentiality of your login credentials and for all activities carried out through your account. You must immediately inform Policy Adda of any unauthorised access or suspected security breach.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">4. Permitted Use</h2>
            <p className="muted-sm">
              You may use the Website only for lawful and personal purposes connected with obtaining or managing insurance services. You must not copy, reproduce, modify or commercially exploit Website content; use bots, spiders or automated tools; introduce viruses or malicious code; attempt unauthorised access; impersonate another person; or use the Website for fraudulent or unlawful activities.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">5. Information and Insurance Proposals</h2>
            <p className="muted-sm">
              You are responsible for ensuring that all information, declarations and documents provided in connection with an insurance proposal are true, complete and accurate. Any material misrepresentation, suppression or non-disclosure may affect policy issuance, coverage or claim settlement.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">6. Customer Due Diligence and KYC</h2>
            <p className="muted-sm">
              Policy Adda may undertake customer due diligence, KYC and other verification as required under applicable laws. Insurance premium payments should generally be made from your own bank account or a joint account in which you are a holder.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">7. Rebates and Inducements</h2>
            <p className="muted-sm">
              No person shall offer or accept any rebate or inducement in relation to insurance premiums or commission except as permitted under applicable law, including Section 41 of the Insurance Act, 1938.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">8. Intellectual Property</h2>
            <p className="muted-sm">
              All trademarks, logos, designs, text, graphics, software and other content available on the Website belong to Policy Adda or their respective owners and are protected by applicable intellectual property laws. Access to the Website does not grant you any licence or ownership rights.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">9. Third-Party Links</h2>
            <p className="muted-sm">
              The Website may contain links to third-party websites. Such links are provided for convenience only. Policy Adda does not control or endorse third-party websites and is not responsible for their content, availability or privacy practices.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">10. Disclaimer</h2>
            <p className="muted-sm">
              The Website and its content are provided on an &quot;as available&quot; basis. Insurance products, premiums, benefits, exclusions, terms and availability may change and are subject to the respective insurer&apos;s policies and applicable regulations. Nothing on the Website should be construed as a guarantee of policy issuance, coverage or claim settlement.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">11. Limitation of Liability</h2>
            <p className="muted-sm">
              To the maximum extent permitted by applicable law, Policy Adda, its directors, employees, officers, agents and affiliates shall not be liable for any indirect, incidental, special or consequential loss arising from your use of the Website or reliance on its content.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">12. Indemnity</h2>
            <p className="muted-sm">
              You agree to indemnify and hold harmless Policy Adda against claims, losses, damages, penalties, costs and expenses arising from your breach of these Terms, inaccurate or misleading information provided by you, your violation of applicable law, or infringement of any third-party rights.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">13. Governing Law and Jurisdiction</h2>
            <p className="muted-sm">
              These Terms shall be governed by and interpreted in accordance with the laws of India. Disputes shall be subject to the jurisdiction of the competent courts at Ranchi, Jharkhand, India.
            </p>
          </div>

          <p className="faint-sm mt-4">
            Contact: {siteConfig.contact.phone.display} · {siteConfig.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
