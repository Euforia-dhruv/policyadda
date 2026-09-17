import type { Metadata } from "next";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Privacy Policy — PolicyAdda",
  description: "Privacy commitments for PolicyAdda. How we collect, use, protect and manage your personal information.",
};

export default function PrivacyPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  if (locale === "hi") {
    return (
      <section className="pad">
        <div className="wrap max-w-md">
          <div className="section-head">
            <p className="eyebrow">{copy.footer.privacy}</p>
            <h2>{copy.footer.privacy}</h2>
            <p className="lead">असरदार तिथि: सत्यापन के बाद लागू होगी।</p>
          </div>
          <div className="dev-note mb-5">
            ⓘ अंग्रेज़ी संस्करण और अनुवादित संस्करण के बीच किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।
          </div>
          <div className="card card-pad">
            <p className="muted-sm mb-4">
              कृपया Policy Adda वेबसाइट और/या मोबाइल एप्लिकेशन (सामूहिक रूप से &quot;प्लेटफ़ॉर्म&quot;) पर जाने और हमारे बीमा संबंधी उत्पादों और सेवाओं में आपकी रुचि के लिए धन्यवाद।
            </p>
            <p className="muted-sm mb-4">
              Policy Adda, एक बीमा मध्यस्थ/दलाल के रूप में, आपकी व्यक्तिगत जानकारी की गोपनीयता और सुरक्षा की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता सूचना बताती है कि जब आप हमारे प्लेटफ़ॉर्म का उपयोग करते हैं या हमारी सेवाओं का लाभ उठाते हैं, तो हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग, संसाधन, संग्रह, प्रकट और सुरक्षित करते हैं।
            </p>
            <p className="muted-sm mb-4">
              बीमा मध्यस्थ/दलाल के रूप में, Policy Adda आपकी जानकारी को बीमा पूछताछ, उद्धरण, पॉलिसी खरीद, नवीनीकरण, सेवा और अन्य बीमा संबंधी सेवाओं को सुविधाजनक बनाने के लिए एकत्र और संसाधित कर सकता है।
            </p>
            <p className="muted-sm mb-4">
              <strong>जानकारी का उपयोग:</strong> हम आपकी व्यक्तिगत जानकारी का उपयोग अपनी बीमा दलाली और संबंधित सेवाओं को प्रदान करने और सुधारने के लिए करते हैं। सटीक जानकारी प्रदान करना महत्वपूर्ण है।
            </p>
            <p className="muted-sm mb-4">
              <strong>कुकीज़:</strong> हम आपकी वेबसाइट पर जाने पर आवश्यक कार्यों को सक्षम करने, प्राथमिकताओं को याद रखने और आपके अनुभव में सुधार करने के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं।
            </p>
            <p className="muted-sm mb-4">
              <strong>जानकारी साझा करना:</strong> हम आपकी व्यक्तिगत जानकारी को आवश्यकतानुसार सेवाएं प्रदान करने, व्यापार उद्देश्यों को पूरा करने या लागू कानून का पालन करने के लिए साझा कर सकते हैं। इसमें बीमा कंपनियों, अधिकृत सेवा प्रदाताओं और सरकारी निकायों के साथ साझा करना शामिल हो सकता है।
            </p>
            <p className="muted-sm mb-4">
              <strong>आपके अधिकार:</strong> लागू कानून के अधीन, आपके पास पहुंच, सुधार और मिटाने के अधिकार हो सकते हैं। अपने अधिकारों का प्रयोग करने या शिकायत उठाने के लिए, कृपया हमसे संपर्क करें: {siteConfig.contact.email}
            </p>
            <p className="muted-sm">
              <strong>डेटा सुरक्षा:</strong> हम व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी, संगठनात्मक और भौतिक सुरक्षा उपाय बनाए रखते हैं।
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pad">
      <div className="wrap max-w-md">
        <div className="section-head">
          <p className="eyebrow">{copy.footer.privacy}</p>
          <h2>{copy.footer.privacy}</h2>
          <p className="lead">Disclaimer: In the event of any discrepancy between the English version of this Privacy Notice and any translated version, the English version shall prevail.</p>
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <p className="muted-sm mb-4">
              Thank you for visiting the Policy Adda website and/or mobile application (collectively, the &quot;Platform&quot;) and for your interest in our insurance-related products and services.
            </p>
            <p className="muted-sm mb-4">
              Policy Adda, acting as an insurance intermediary/broker, is committed to protecting the privacy and security of your personal information. This Privacy Notice explains how we collect, use, process, store, disclose and protect your personal information when you access or use our Platform or avail of our services.
            </p>
            <p className="muted-sm mb-4">
              As an insurance intermediary/broker, Policy Adda may collect and process your information to facilitate insurance enquiries, quotations, policy purchases, renewals, servicing and other insurance-related services. Where required, your information may be shared with insurance companies, service providers and other authorised parties for processing your requests and providing the relevant services, in accordance with applicable laws and regulations.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Use of Personal Information</h2>
            <p className="muted-sm">
              We use your personal information to provide and improve our insurance broking and related services. Providing accurate information is important. If you provide incomplete or incorrect information, or request its deletion, we may be unable to provide certain services.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Cookies</h2>
            <p className="muted-sm">
              We use cookies and similar technologies when you visit our website to enable essential functions, remember your preferences and improve your experience. Strictly Necessary Cookies are required for the secure and proper functioning of the website. Optional Cookies help us understand website usage, improve our services and remember your preferences. You may manage cookie preferences through the cookie banner or your browser settings.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">How We Collect Personal Information</h2>
            <p className="muted-sm">
              We collect personal information only where necessary for insurance solicitation, policy servicing, claims assistance, regulatory compliance and other permitted purposes. Information may be collected through direct interactions (applications, forms, enquiries, claims), and from insurance partners and service providers as permitted by law.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">How We Use Personal Information</h2>
            <p className="muted-sm">
              We may use your personal information to: respond to your enquiries and requests; provide insurance quotations and facilitate policy applications and purchases; provide pre-sale, post-sale, policy servicing and claims assistance; communicate with you regarding policies, renewals, services, updates and relevant offers; improve our website, products and services; maintain records and comply with applicable legal and regulatory requirements; prevent fraud and protect our legal rights; and share relevant information with authorised service providers where necessary.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Sharing of Personal Information</h2>
            <p className="muted-sm">
              We may share your personal information where necessary to provide services, fulfil business purposes or comply with applicable law. This may include sharing with: Insurance Companies (to obtain quotations, process proposals, issue or service policies and assist with claims); Authorised Service Providers (for document management, secure data storage, technology and other operational support); Government and Regulatory Authorities (where required by law); and Business Transfers (in case of merger, acquisition or restructuring). We require third parties to maintain appropriate confidentiality and security.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Your Rights</h2>
            <p className="muted-sm">
              Subject to applicable law, you may have the right to: Access — request information about the personal data processed by us; Correction and Erasure — request correction, completion, updating or deletion of inaccurate or unnecessary personal data; and Grievance Redressal — raise concerns regarding the processing of your personal data. To exercise your rights or raise a grievance, please contact us at {siteConfig.contact.email}.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Data Security</h2>
            <p className="muted-sm">
              We maintain reasonable technical, organisational and physical security measures to protect personal information against unauthorised access, use, alteration, disclosure, loss or destruction. However, no method of transmission or electronic storage is completely secure. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Data Breach Notification</h2>
            <p className="muted-sm">
              In the event of a personal data breach, Policy Adda will take appropriate steps to contain and mitigate the breach and make notifications to affected individuals and the relevant authorities, wherever required under applicable laws, including the Digital Personal Data Protection Act, 2023.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Children&apos;s Data</h2>
            <p className="muted-sm">
              Policy Adda does not knowingly process personal data of children below 18 years of age, except where such information is required for insurance-related purposes, such as policyholder or insured member details, and is provided with the consent of the parent or lawful guardian, as applicable.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Grievance Redressal</h2>
            <p className="muted-sm">
              Policy Adda is committed to addressing privacy-related concerns promptly and in accordance with applicable data protection, insurance, and cybersecurity laws. You may raise your privacy-related grievance with our designated Grievance Officer through the contact details provided in this Privacy Notice.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Changes to This Privacy Notice</h2>
            <p className="muted-sm">
              Policy Adda may update this Privacy Notice from time to time to reflect changes in its practices, applicable laws, or regulatory requirements. The updated Privacy Notice will be published on our website and will be effective from the date specified therein.
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
