import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { siteConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Cookie Policy — PolicyAdda",
  description: "How PolicyAdda uses cookies and similar technologies on policyadda.co.in.",
};

export default function CookiePolicyPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  if (locale === "hi") {
    return (
      <section className="pad">
        <div className="wrap max-w-md">
          <div className="section-head">
            <p className="eyebrow">कुकी नीति</p>
            <h2>कुकी नीति</h2>
            <p className="lead">अनुवादित संस्करण और अंग्रेज़ी संस्करण में विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।</p>
          </div>
          <div className="card card-pad">
            <div className="detail-block">
              <h2 className="tl-label text-base">1. परिचय</h2>
              <p className="muted-sm">
                Policy Adda अपनी वेबसाइट पर उपयोगकर्ता अनुभव में सुधार, वेबसाइट कार्यक्षमता सक्षम करने, वेबसाइट उपयोग को समझने और हमारी सेवाओं को बेहतर बनाने के लिए कुकीज़ और समान तकनीकों का उपयोग करता है। यह कुकी नीति बताती है कि कुकीज़ क्या हैं, हम उनका उपयोग कैसे करते हैं और आप अपनी कुकी प्राथमिकताओं को कैसे प्रबंधित कर सकते हैं।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">2. कुकीज़ क्या हैं?</h2>
              <p className="muted-sm">
                कुकीज़ छोटी टेक्स्ट फ़ाइलें हैं जो आपकी वेबसाइट पर जाने पर आपके डिवाइस में संग्रहित होती हैं। वे वेबसाइट को प्राथमिकताएँ याद रखने, कार्यक्षमता में सुधार करने और आगंतुकों की वेबसाइट का उपयोग कैसे करते हैं, इसे समझने में मदद करती हैं। हम पिक्सेल, वेब बीकन और लोकल स्टोरेज जैसी समान तकनीकों का भी उपयोग कर सकते हैं।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">3. हम उपयोग करने वाली कुकीज़ के प्रकार</h2>
              <p className="muted-sm mb-3">
                <strong>क. अनिवार्य कुकीज़:</strong> ये कुकीज़ वेबसाइट के ठीक से और सुरक्षित रूप से कार्य करने के लिए आवश्यक हैं। वे आवश्यक सुविधाओं को सक्षम करती हैं और अन्य वेबसाइटों पर मार्केटिंग के लिए आपकी गतिविधि को ट्रैक नहीं करती हैं।
              </p>
              <p className="muted-sm">
                <strong>ख. वैकल्पिक कुकीज़:</strong> ये कुकीज़ वेबसाइट उपयोग को समझने, प्राथमिकताएँ याद रखने और हमारी वेबसाइट व सेवाओं के प्रदर्शन व प्रासंगिकता में सुधार करने में मदद करती हैं। आप ब्राउज़र सेटिंग्स के माध्यम से वैकल्पिक कुकीज़ को प्रबंधित या अक्षम कर सकते हैं।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">4. इस कुकी नीति में परिवर्तन</h2>
              <p className="muted-sm">
                हम अपनी प्रथाओं, सेवाओं या लागू कानूनों व नियमों में परिवर्तनों को दर्शाने के लिए समय-समय पर इस कुकी नीति को अद्यतन कर सकते हैं। हम इस नीति की समय-समय पर समीक्षा करने की सलाह देते हैं।
              </p>
            </div>
            <div className="detail-block">
              <h2 className="tl-label text-base">5. हमसे संपर्क करें</h2>
              <p className="muted-sm">
                इस कुकी नीति या हमारी कुकीज़ के उपयोग के बारे में कोई भी प्रश्न के लिए, कृपया policyadda.co.in पर दिए संपर्क विवरण के माध्यम से हमसे संपर्क करें। व्यक्तिगत डेटा कैसे एकत्र, उपयोग और सुरक्षित किया जाता है, इस बारे में विवरण के लिए कृपया हमारी गोपनीयता नीति देखें।
              </p>
            </div>
            <p className="faint-sm mt-4">
              संपर्क: {siteConfig.contact.phone.display} · {siteConfig.contact.email}
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
          <p className="eyebrow">Cookie Policy</p>
          <h2>Cookie Policy</h2>
          <p className="lead">Disclaimer: In case of any discrepancy between the translated version and the English version, the English version shall prevail.</p>
        </div>

        <div className="card card-pad">
          <div className="detail-block">
            <h2 className="tl-label text-base">1. Introduction</h2>
            <p className="muted-sm">
              Policy Adda uses cookies and similar technologies on its website to improve user experience, enable website functionality, understand website usage and enhance our services. This Cookie Policy explains what cookies are, how we use them and how you can manage your cookie preferences.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">2. What Are Cookies?</h2>
            <p className="muted-sm">
              Cookies are small text files stored on your device when you visit a website. They help the website remember preferences, improve functionality and understand how visitors use the website. We may also use similar technologies, such as pixels, web beacons and local storage.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">3. Types of Cookies We Use</h2>
            <p className="muted-sm mb-3">
              <strong>a. Mandatory Cookies:</strong> These cookies are necessary for the website to function properly and securely. They enable essential features and do not track your activity across other websites for marketing purposes.
            </p>
            <p className="muted-sm">
              <strong>b. Optional Cookies:</strong> These cookies help us understand website usage, remember preferences and improve the performance and relevance of our website and services. You may manage or disable optional cookies through your browser settings.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">4. Changes to this Cookie Policy</h2>
            <p className="muted-sm">
              We may update this Cookie Policy from time to time to reflect changes in our practices, services or applicable laws and regulations. We recommend reviewing this policy periodically.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">5. Contact Us</h2>
            <p className="muted-sm">
              For any questions regarding this Cookie Policy or our use of cookies, please contact us through the contact details provided on policyadda.co.in. For details on how we collect, use and protect personal data, please refer to our Privacy Policy.
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
