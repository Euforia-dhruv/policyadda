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
          <p className="lead">Welcome to www.policyadda.co.in and any related mobile application, digital platform or services operated by Policy Adda. Policy Adda is an insurance broking company registered and operating in accordance with applicable laws and regulations in India. By accessing or using the Website, application or services, you agree to be bound by these Terms of Use (&quot;Terms&quot;), our Privacy Policy and other applicable policies, notices and terms displayed on the Website. If you do not agree with these Terms, please do not use the Website or our services.</p>
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <p className="muted-sm">
              We may modify these Terms from time to time. Your continued use of the Website after such changes constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">1. Our Services</h2>
            <p className="muted-sm">
              Policy Adda provides insurance-related information, assistance and broking services, including facilitation of insurance proposals, policy purchase, renewals and related services for products offered by insurers. Information displayed on the Website is based on information received from insurers and other authorised sources. Policy Adda does not guarantee that all information, pricing, features, benefits or policy terms will always be complete, accurate or current. Insurance contracts are issued and underwritten by the respective insurers. The final decision regarding acceptance, rejection, premium, coverage, terms and claims rests with the concerned insurer, subject to its underwriting policies and applicable law. By submitting your contact or other personal information, you consent to Policy Adda contacting you through telephone, SMS, email, WhatsApp or other permitted communication channels regarding your enquiry, insurance requirements, renewals, service requests and related matters, subject to applicable law and your preferences.
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
              You are responsible for ensuring that all information, declarations and documents provided in connection with an insurance proposal are true, complete and accurate. Information provided in a proposal forms the basis of the insurance contract and is subject to the insurer&apos;s underwriting rules. Any material misrepresentation, suppression or non-disclosure may affect policy issuance, coverage or claim settlement in accordance with applicable law and the terms of the policy. For health and other applicable insurance products, you authorise the insurer and its authorised representatives to obtain and verify information, including medical information where lawfully permitted, for underwriting and claim settlement purposes.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">6. Customer Due Diligence and KYC</h2>
            <p className="muted-sm">
              Policy Adda may undertake customer due diligence, KYC and other verification as required under applicable laws, regulations and regulatory directions. You agree to provide such information and documents as may reasonably be required for these purposes. Insurance premium payments should generally be made from your own bank account or a joint account in which you are a holder, subject to applicable regulatory requirements. Where payment is made through a third-party account, enhanced due diligence may be undertaken.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">7. Rebates and Inducements</h2>
            <p className="muted-sm">
              No person shall offer or accept any rebate or inducement in relation to insurance premiums or commission except as permitted under applicable law, including Section 41 of the Insurance Act, 1938, as amended from time to time. Any violation may attract penalties under applicable law.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">8. User-Submitted Content</h2>
            <p className="muted-sm">
              You are responsible for any information, comments, documents, images or other content submitted by you through the Website. You must not submit content that is unlawful, defamatory, obscene, threatening, fraudulent, misleading, infringes intellectual property or privacy rights, contains malicious code, or otherwise violates applicable law. Policy Adda may remove or restrict access to any content that violates these Terms or applicable law.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">9. Intellectual Property</h2>
            <p className="muted-sm">
              All trademarks, logos, designs, text, graphics, software and other content available on the Website belong to Policy Adda or their respective owners and are protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute, publish, sell or commercially use such content without prior written permission. Access to the Website does not grant you any licence or ownership rights in its intellectual property.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">10. Third-Party Links and Services</h2>
            <p className="muted-sm">
              The Website may contain links to third-party websites, applications or services. Such links are provided for convenience only. Policy Adda does not control or endorse third-party websites and is not responsible for their content, availability, privacy practices, products or services. Your use of third-party services is subject to their respective terms and policies.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">11. Disclaimer</h2>
            <p className="muted-sm">
              The Website and its content are provided on an &quot;as available&quot; basis. While we endeavour to keep information accurate and updated, Policy Adda does not warrant that the Website or its content will always be complete, accurate, uninterrupted, error-free or free from harmful components. Insurance products, premiums, benefits, exclusions, terms and availability may change and are subject to the respective insurer&apos;s policies and applicable regulations. Nothing on the Website should be construed as a guarantee of policy issuance, coverage or claim settlement.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">12. Limitation of Liability</h2>
            <p className="muted-sm">
              To the maximum extent permitted by applicable law, Policy Adda, its directors, employees, officers, agents and affiliates shall not be liable for any indirect, incidental, special or consequential loss arising from your use of the Website or reliance on its content. Nothing in these Terms shall exclude or limit any liability that cannot lawfully be excluded or limited under applicable Indian law.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">13. Indemnity</h2>
            <p className="muted-sm">
              You agree to indemnify and hold harmless Policy Adda, its directors, officers, employees, agents and affiliates against claims, losses, damages, penalties, costs and expenses arising from: your breach of these Terms; inaccurate, misleading or fraudulent information provided by you; your violation of applicable law; or infringement of any third-party rights by you.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">14. Electronic Communications</h2>
            <p className="muted-sm">
              By using our Website or providing your contact details, you consent to receiving communications electronically through email, SMS, WhatsApp, telephone or other permitted channels regarding your enquiries, policies, renewals, service requests and other related matters, subject to applicable law. Electronic communications shall be treated as valid communications to the extent permitted by law.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">15. Suspension or Termination</h2>
            <p className="muted-sm">
              Policy Adda may suspend or terminate your access to the Website or services if you breach these Terms, provide false information, engage in fraudulent or unlawful activities, or where required by law or regulatory authorities. Provisions relating to intellectual property, indemnity, limitation of liability, applicable law and other provisions intended to survive termination shall continue to apply.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">16. Privacy</h2>
            <p className="muted-sm">
              Your personal information will be collected, used, stored and processed in accordance with our Privacy Policy and applicable Indian laws and regulations. By using the Website, you acknowledge that you have read and understood the Privacy Policy.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">17. Changes to Website and Terms</h2>
            <p className="muted-sm">
              Policy Adda may modify, suspend or discontinue any part of the Website or services at any time, subject to applicable law. We may also amend these Terms. Updated Terms will be published on the Website and will become effective from the date specified therein or, where no date is specified, upon publication.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">18. Governing Law and Jurisdiction</h2>
            <p className="muted-sm">
              These Terms shall be governed by and interpreted in accordance with the laws of India. Subject to applicable regulatory and statutory remedies, disputes arising in connection with these Terms shall be subject to the jurisdiction of the competent courts at Ranchi, Jharkhand, India.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">19. General</h2>
            <p className="muted-sm">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue to remain valid and enforceable. Failure by Policy Adda to enforce any provision shall not constitute a waiver of its right to enforce that provision subsequently. These Terms, together with the Privacy Policy and other applicable policies published on the Website, constitute the agreement governing your use of the Website and services.
            </p>
          </div>

          <p className="faint-sm mt-4">
            © Policy Adda. All Rights Reserved. · Contact: {siteConfig.contact.phone.display} · {siteConfig.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
