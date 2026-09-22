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
            <p className="lead">www.policyadda.co.in और Policy Adda द्वारा संचालित किसी भी संबंधित मोबाइल एप्लिकेशन, डिजिटल प्लेटफ़ॉर्म या सेवाओं में आपका स्वागत है। Policy Adda भारत में लागू कानूनों और नियमों के अनुसार पंजीकृत और संचालित एक बीमा दलाल कंपनी है। वेबसाइट, एप्लिकेशन या सेवाओं तक पहुँचकर या उनका उपयोग करके, आप इन उपयोग की शर्तों (&quot;शर्तें&quot;), हमारी गोपनीयता नीति और वेबसाइट पर प्रदर्शित अन्य लागू नीतियों, सूचनाओं और शर्तों से बँधने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया वेबसाइट या हमारी सेवाओं का उपयोग न करें।</p>
          </div>
          <div className="dev-note mb-5">
            ⓘ अंग्रेज़ी संस्करण और अनुवादित संस्करण के बीच किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।
          </div>
          <div className="card card-pad">
            <div className="detail-block">
              <p className="muted-sm">
                हम समय-समय पर इन शर्तों को संशोधित कर सकते हैं। ऐसे परिवर्तनों के बाद वेबसाइट का आपका निरंतर उपयोग संशोधित शर्तों की आपकी स्वीकृति को दर्शाता है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">1. हमारी सेवाएं</h2>
              <p className="muted-sm">
                Policy Adda बीमा संबंधी जानकारी, सहायता और दलाली सेवाएँ प्रदान करता है, जिसमें बीमाकर्ताओं द्वारा पेश किए गए उत्पादों के लिए बीमा प्रस्तावों, पॉलिसी खरीद, नवीनीकरण और संबंधित सेवाओं की सुविधा शामिल है। वेबसाइट पर प्रदर्शित जानकारी बीमाकर्ताओं और अन्य अधिकृत स्रोतों से प्राप्त जानकारी पर आधारित है। Policy Adda गारंटी नहीं देता कि सभी जानकारी, मूल्य, सुविधाएँ, लाभ या पॉलिसी शर्तें हमेशा पूर्ण, सटीक या वर्तमान होंगी। बीमा अनुबंध संबंधित बीमाकर्ता द्वारा जारी और अंडरराइट किए जाते हैं। स्वीकृति, अस्वीकृति, प्रीमियम, कवरेज, शर्तों और दावों संबंधी अंतिम निर्णय संबंधित बीमाकर्ता के अंडरराइटिंग नीतियों और लागू कानून के अधीन संबंधित बीमाकर्ता के पास होता है। अपना संपर्क या अन्य व्यक्तिगत जानकारी जमा करके, आप Policy Adda को अपनी पूछताछ, बीमा आवश्यकताओं, नवीनीकरण, सेवा अनुरोधों और संबंधित मामलों के संबंध में टेलीफ़ोन, SMS, ईमेल, WhatsApp या अन्य अनुमत संचार चैनलों के माध्यम से संपर्क करने के लिए सहमति देते हैं, लागू कानून और आपकी प्राथमिकताओं के अधीन।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">2. पात्रता</h2>
              <p className="muted-sm">
                हमारी सेवाओं का उपयोग करने के लिए आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए और लागू भारतीय कानून के तहत बाध्यकारी अनुबंध में प्रवेश करने की कानूनी क्षमता होनी चाहिए। आपको सटीक, पूर्ण और वर्तमान जानकारी प्रदान करनी होगी।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">3. खाता और सुरक्षा</h2>
              <p className="muted-sm">
                जहाँ खाता आवश्यक हो, आप अपने लॉगिन क्रेडेंशियल्स की गोपनीयता और आपके खाते के माध्यम से किए गए सभी गतिविधियों के लिए ज़िम्मेदार हैं। किसी भी अनधिकृत पहुँच या संदिग्ध सुरक्षा उल्लंघन की तुरंत सूचना Policy Adda को देनी होगी।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">4. अनुमत उपयोग</h2>
              <p className="muted-sm">
                आप वेबसाइट का उपयोग केवल बीमा सेवाएँ प्राप्त करने या प्रबंधित करने से जुड़े वैध और व्यक्तिगत उद्देश्यों के लिए कर सकते हैं। आपको वेबसाइट सामग्री की प्रतिलिपि, पुनरुत्पादन, संशोधन या व्यावसायिक रूप से शोषण नहीं करना चाहिए; बॉट, स्पाइडर या स्वचालित उपकरणों का उपयोग नहीं करना चाहिए; वायरस या दुर्भावनापूर्ण कोड पेश नहीं करना चाहिए; अनधिकृत पहुँच का प्रयास नहीं करना चाहिए; किसी अन्य व्यक्ति का प्रतिरूपण नहीं करना चाहिए; या वेबसाइट का उपयोग धोखाधड़ी या गैरकानूनी गतिविधियों के लिए नहीं करना चाहिए।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">5. जानकारी और बीमा प्रस्ताव</h2>
              <p className="muted-sm">
                बीमा प्रस्ताव से संबंधित सभी जानकारी, घोषणाओं और दस्तावेज़ों के सत्य, पूर्ण और सटीक होने की ज़िम्मेदारी आपकी है। प्रस्ताव में दी गई जानकारी बीमा अनुबंध का आधार बनती है और बीमाकर्ता के अंडरराइटिंग नियमों के अधीन होती है। कोई भी सामग्री गलतबयानी, दबाव या गैर-प्रकटीकरण पॉलिसी जारी होने, कवरेज या दावा निपटान को प्रभावित कर सकता है। स्वास्थ्य और अन्य लागू बीमा उत्पादों के लिए, आप बीमाकर्ता और उसके अधिकृत प्रतिनिधियों को अंडरराइटिंग और दावा निपटान के उद्देश्यों के लिए, जहाँ कानूनी रूप से अनुमत हो, चिकित्सा सहित जानकारी प्राप्त और सत्यापित करने के लिए अधिकृत करते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">6. ग्राहक परिचय और KYC</h2>
              <p className="muted-sm">
                Policy Adda लागू कानूनों, नियमों और नियामक निर्देशों के अनुसार ग्राहक परिचय, KYC और अन्य सत्यापन कर सकता है। आप इन उद्देश्यों के लिए उचित रूप से आवश्यक जानकारी और दस्तावेज़ उपलब्ध कराने के लिए सहमत होते हैं। बीमा प्रीमियम भुगतान सामान्यतः आपके अपने बैंक खाते या ऐसे संयुक्त खाते से किया जाना चाहिए जिसमें आप धारक हों, लागू नियामक आवश्यकताओं के अधीन।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">7. छूट और प्रेरण</h2>
              <p className="muted-sm">
                बीमा प्रीमियम या कमीशन से संबंधित कोई भी व्यक्ति लागू कानून — जिसमें बीमा अधिनियम, 1938 की धारा 41, समय-समय पर संशोधित — की अनुमति के अतिरिक्त छूट या प्रेरण की पेशकश या स्वीकार नहीं करेगा। कोई भी उल्लंघन लागू कानून के तहत दंड का आकर्षित कर सकता है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">8. उपयोगकर्ता-जमा सामग्री</h2>
              <p className="muted-sm">
                वेबसाइट के माध्यम से आपके द्वारा जमा की गई किसी भी जानकारी, टिप्पणी, दस्तावेज़, छवि या अन्य सामग्री के लिए आप ज़िम्मेदार हैं। आप ऐसी सामग्री जमा नहीं करेंगे जो गैरकानूनी, मानहानिकारक, अश्लील, धमकीपूर्ण, धोखाधड़ीपूर्ण, भ्रामक हो, बौद्धिक संपदा या गोपनीयता अधिकारों का उल्लंघन करे, दुर्भावनापूर्ण कोड शामिल करे, या अन्यथा लागू कानून का उल्लंघन करे। Policy Adda ऐसी किसी भी सामग्री को हटा या पहुँच प्रतिबंधित कर सकता है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">9. बौद्धिक संपदा</h2>
              <p className="muted-sm">
                वेबसाइट पर उपलब्ध सभी ट्रेडमार्क, लोगो, डिज़ाइन, टेक्स्ट, ग्राफ़िक्स, सॉफ़्टवेयर और अन्य सामग्री Policy Adda या उनके संबंधित मालिकों की है और लागू बौद्धिक संपदा कानूनों द्वारा संरक्षित है। बिना पूर्व लिखित अनुमति के ऐसी सामग्री की प्रतिलिपि, पुनरुत्पादन, संशोधन, वितरण, प्रकाशन, बिक्री या व्यावसायिक उपयोग नहीं कर सकते। वेबसाइट तक पहुँच आपको इसकी बौद्धिक संपदा में कोई लाइसेंस या स्वामित्व अधिकार प्रदान नहीं करती।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">10. तृतीय-पक्ष लिंक और सेवाएं</h2>
              <p className="muted-sm">
                वेबसाइट में तृतीय-पक्ष वेबसाइटों, एप्लिकेशनों या सेवाओं के लिंक हो सकते हैं। ऐसे लिंक केवल सुविधा के लिए प्रदान किए जाते हैं। Policy Adda तृतीय-पक्ष वेबसाइटों को नियंत्रित या अनुमोदित नहीं करता और उनकी सामग्री, उपलब्धता, गोपनीयता प्रथाओं, उत्पादों या सेवाओं के लिए ज़िम्मेदार नहीं है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">11. अस्वीकरण</h2>
              <p className="muted-sm">
                वेबसाइट और इसकी सामग्री &quot;जैसी है&quot; के आधार पर उपलब्ध है। जबकि हम जानकारी को सटीक और अद्यतन रखने का प्रयास करते हैं, Policy Adda गारंटी नहीं देता कि वेबसाइट या उसकी सामग्री हमेशा पूर्ण, सटीक, निर्बाध, त्रुटि-रहित या हानिकारक घटकों से मुक्त होगी। बीमा उत्पाद, प्रीमियम, लाभ, बहिष्करण, शर्तें और उपलब्धता बदल सकती हैं। वेबसाइट पर कुछ भी पॉलिसी जारी होने, कवरेज या दावा निपटान की गारंटी के रूप में नहीं माना जाएगा।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">12. दायित्व की सीमा</h2>
              <p className="muted-sm">
                लागू कानून द्वारा अनुमत अधिकतम सीमा तक, Policy Adda, इसके निदेशक, कर्मचारी, अधिकारी, एजेंट और सहयोगी वेबसाइट के आपके उपयोग या इसकी सामग्री पर निर्भरता से उत्पन्न किसी भी अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी हानि के लिए उत्तरदायी नहीं होंगे। इन शर्तों में कुछ भी ऐसे दायित्व को बाहर या सीमित नहीं करेगा जिसे लागू भारतीय कानून के तहत वैधानिक रूप से बाहर या सीमित नहीं किया जा सकता।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">13. क्षतिपूर्ति</h2>
              <p className="muted-sm">
                आप Policy Adda, इसके निदेशक, अधिकारी, कर्मचारी, एजेंट और सहयोगियों को निम्नलिखित से उत्पन्न दावों, हानियों, क्षतियों, दंडों, लागतों और व्ययों से क्षतिपूर्ति और हानिरक्षण के लिए सहमत होते हैं: आपकी इन शर्तों का उल्लंघन; आपके द्वारा प्रदान की गई गलत, भ्रामक या धोखाधड़ी वाली जानकारी; आपका लागू कानून का उल्लंघन; या आपके द्वारा किसी तृतीय-पक्ष अधिकारों का उल्लंघन।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">14. इलेक्ट्रॉनिक संचार</h2>
              <p className="muted-sm">
                हमारी वेबसाइट का उपयोग करके या अपना संपर्क विवरण प्रदान करके, आप अपनी पूछताओं, पॉलिसियों, नवीनीकरण, सेवा अनुरोधों और अन्य संबंधित मामलों के संबंध में ईमेल, SMS, WhatsApp, टेलीफ़ोन या अन्य अनुमत चैनलों के माध्यम से इलेक्ट्रॉनिक रूप से संचार प्राप्त करने के लिए सहमति देते हैं, लागू कानून के अधीन। जहाँ कानून द्वारा अनुमत हो, इलेक्ट्रॉनिक संचारों को वैध संचार माना जाएगा।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">15. निलंबन या समाप्ति</h2>
              <p className="muted-sm">
                यदि आप इन शर्तों का उल्लंघन करते हैं, गलत जानकारी प्रदान करते हैं, धोखाधड़ी या गैरकानूनी गतिविधियों में संलग्न होते हैं, या जहाँ कानून या नियामक प्राधिकरणों द्वारा आवश्यक हो, तो Policy Adda वेबसाइट या सेवाओं तक आपकी पहुँच निलंबित या समाप्त कर सकता है। बौद्धिक संपदा, क्षतिपूर्ति, दायित्व की सीमा, लागू कानून और समाप्ति के बाद जीवित रहने वाले अन्य प्रावधान लागू रहेंगे।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">16. गोपनीयता</h2>
              <p className="muted-sm">
                आपकी व्यक्तिगत जानकारी हमारी गोपनीयता नीति और लागू भारतीय कानूनों व नियमों के अनुसार एकत्र, उपयोग, संग्रहित और संसाधित की जाएगी। वेबसाइट का उपयोग करके, आप पुष्टि करते हैं कि आपने गोपनीयता नीति पढ़ ली है और उसे समझ लिया है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">17. वेबसाइट और शर्तों में परिवर्तन</h2>
              <p className="muted-sm">
                Policy Adda लागू कानून के अधीन किसी भी समय वेबसाइट या सेवाओं के किसी भी हिस्से को संशोधित, निलंबित या बंद कर सकता है। हम इन शर्तों को भी संशोधित कर सकते हैं। अद्यतन शर्तें वेबसाइट पर प्रकाशित की जाएंगी और उसमें निर्दिष्ट तिथि से, या जहाँ कोई तिथि निर्दिष्ट न हो, प्रकाशन पर प्रभावी होंगी।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">18. शासी कानून और क्षेत्राधिकार</h2>
              <p className="muted-sm">
                इन शर्तों का शासन और व्याख्या भारत के कानूनों के अनुसार होगी। लागू नियामक और वैधानिक उपचारों के अधीन, इन शर्तों से उत्पन्न विवादों का क्षेत्राधिकार झारखंड के राँची में सक्षम न्यायालयों के पास होगा।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">19. सामान्य</h2>
              <p className="muted-sm">
                यदि इन शर्तों का कोई प्रावधान अमान्य या अप्रवर्तनीय पाया जाता है, तो शेष प्रावधान मान्य और प्रवर्तनीय रहेंगे। Policy Adda द्वारा किसी प्रावधान को लागू न करना बाद में उसे लागू करने के अधिकार के त्याग का गठन नहीं करेगा। ये शर्तें, गोपनीयता नीति और वेबसाइट पर प्रकाशित अन्य लागू नीतियों के साथ, वेबसाइट और सेवाओं के आपके उपयोग को नियंत्रित करने वाला समझौता बनाती हैं।
              </p>
            </div>

            <p className="faint-sm mt-4">
              © Policy Adda. सर्वाधिकार सुरक्षित। · संपर्क: {siteConfig.contact.phone.display} · {siteConfig.contact.email}
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
