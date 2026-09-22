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
    const rows: [string, string, string][] = [
      ["1", "व्यक्तिगत जानकारी", "नाम, जन्म तिथि, लिंग, नामांकित/लाभार्थी डेटा"],
      ["2", "संपर्क जानकारी", "फ़ोन नंबर, ईमेल पता, पता, पिनकोड"],
      ["3", "जनांकिक जानकारी", "आयु, वैवाहिक स्थिति, राष्ट्रीयता"],
      ["4", "रोज़गार जानकारी", "व्यवसाय, नियोक्ता का नाम, पद का नाम, रोज़गार स्थिति, आय सीमा"],
      ["5", "शिक्षा", "शैक्षणिक योग्यताएँ"],
      ["6", "स्वास्थ्य जानकारी", "चिकित्सा इतिहास, पूर्व-विद्यमान स्थितियाँ"],
      ["7", "मल्टीमीडिया डेटा", "फ़ोटोग्राफ़"],
      ["8", "डिजिटल इंटरैक्शन डेटा", "IP पता, ब्राउज़िंग इतिहास, कुकीज़, डिवाइस जानकारी, क्लिकस्ट्रीम डेटा"],
    ];

    return (
      <section className="pad">
        <div className="wrap max-w-md">
          <div className="section-head">
            <p className="eyebrow">{copy.footer.privacy}</p>
            <h2>{copy.footer.privacy}</h2>
            <p className="lead">अस्वीकरण: इस गोपनीयता सूचना के अंग्रेज़ी संस्करण और किसी अनुवादित संस्करण के बीच किसी भी विसंगति की स्थिति में, अंग्रेज़ी संस्करण प्रभावी होगा।</p>
          </div>
          <div className="card card-pad">
            <div className="detail-block">
              <p className="muted-sm mb-4">
                कृपया Policy Adda वेबसाइट और/या मोबाइल एप्लिकेशन (सामूहिक रूप से &quot;प्लेटफ़ॉर्म&quot;) पर जाने और हमारे बीमा संबंधी उत्पादों और सेवाओं में आपकी रुचि के लिए धन्यवाद।
              </p>
              <p className="muted-sm mb-4">
                Policy Adda, एक बीमा मध्यस्थ/दलाल के रूप में, आपकी व्यक्तिगत जानकारी की गोपनीयता और सुरक्षा की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता सूचना बताती है कि जब आप हमारे प्लेटफ़ॉर्म का उपयोग करते हैं या हमारी सेवाओं का लाभ उठाते हैं, तो हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग, संसाधित, संग्रहित, प्रकट और सुरक्षित करते हैं।
              </p>
              <p className="muted-sm mb-4">
                बीमा मध्यस्थ/दलाल के रूप में, Policy Adda बीमा पूछताछ, उद्धरण, पॉलिसी खरीद, नवीनीकरण, सेवा और अन्य बीमा संबंधी सेवाओं को सुविधाजनक बनाने के लिए आपकी जानकारी एकत्र और संसाधित कर सकता है। जहाँ आवश्यक हो, आपकी जानकारी लागू कानूनों और नियमों के अनुसार बीमा कंपनियों, सेवा प्रदाताओं और अन्य अधिकृत पक्षों के साथ साझा की जा सकती है।
              </p>
              <p className="muted-sm mb-4">
                यह गोपनीयता सूचना प्लेटफ़ॉर्म के माध्यम से एकत्र जानकारी पर लागू होती है। प्लेटफ़ॉर्म में तृतीय-पक्ष वेबसाइटों के लिंक भी हो सकते हैं, जिनमें बीमाकर्ताओं और अन्य सेवा प्रदाताओं की वेबसाइटें शामिल हैं। ऐसी तृतीय-पक्ष वेबसाइटों को सीधे दी गई कोई भी जानकारी उनकी संबंधित गोपनीयता नीतियों और शर्तों के अधीन होगी। कृपया व्यक्तिगत जानकारी साझा करने से पहले उनकी गोपनीयता नीतियाँ समीक्षा करें।
              </p>
              <p className="muted-sm mb-4">
                यह गोपनीयता सूचना Policy Adda द्वारा जारी लागू नियमों और शर्तों, समझौतों और अन्य सूचनाओं के साथ पठनीय होगी और लागू भारतीय कानूनों, नियमों व नियामक आवश्यकताओं — विशेषकर बीमा मध्यस्थों पर लागू — के अधीन होगी।
              </p>
              <p className="muted-sm mb-4">
                Policy Adda समय-समय पर लागू कानूनों, नियामक आवश्यकताओं, व्यावसायिक प्रथाओं या सेवाओं में परिवर्तनों को दर्शाने के लिए इस गोपनीयता सूचना को संशोधित या अद्यतन कर सकता है। अद्यतन गोपनीयता सूचना प्लेटफ़ॉर्म पर प्रकाशित की जाएगी। उपयोगकर्ताओं को नवीनतम संस्करण के लिए इस पृष्ठ की समय-समय पर समीक्षा करने की सलाह दी जाती है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">हम जो व्यक्तिगत जानकारी एकत्र करते हैं उसकी श्रेणियाँ</h2>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                      <th className="text-left py-2 pr-3 font-semibold">क्र.सं.</th>
                      <th className="text-left py-2 pr-3 font-semibold">श्रेणी</th>
                      <th className="text-left py-2 font-semibold">एकत्र की गई जानकारी के प्रकार</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([n, cat, types]) => (
                      <tr key={n} style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                        <td className="py-2 pr-3 align-top">{n}</td>
                        <td className="py-2 pr-3 align-top">{cat}</td>
                        <td className="py-2 align-top">{types}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">व्यक्तिगत जानकारी का उपयोग</h2>
              <p className="muted-sm">
                हम अपनी बीमा दलाली और संबंधित सेवाएँ प्रदान करने और सुधारने के लिए आपकी व्यक्तिगत जानकारी का उपयोग करते हैं। सटीक जानकारी प्रदान करना महत्वपूर्ण है। यदि आप अधूरी या गलत जानकारी प्रदान करते हैं, या उसके मिटाने का अनुरोध करते हैं, तो हम कुछ सेवाएँ प्रदान करने में असमर्थ हो सकते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">कुकीज़</h2>
              <p className="muted-sm">
                जब आप हमारी वेबसाइट पर जाते हैं तो हम आवश्यक कार्य सक्षम करने, प्राथमिकताएँ याद रखने और अनुभव में सुधार के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं। सख्ती से आवश्यक कुकीज़ वेबसाइट के सुरक्षित व ठीक से कार्य करने के लिए आवश्यक हैं। वैकल्पिक कुकीज़ वेबसाइट उपयोग को समझने, सेवाएँ सुधारने और प्राथमिकताएँ याद रखने में सहायता करती हैं। आप कुकी बैनर या ब्राउज़र सेटिंग्स से कुकी प्राथमिकताएँ प्रबंधित कर सकते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">हम व्यक्तिगत जानकारी कैसे एकत्र करते हैं</h2>
              <p className="muted-sm">
                हम व्यक्तिगत जानकारी केवल तब एकत्र करते हैं जब बीमा सॉलिसिटेशन, पॉलिसी सेवा, क्लेम सहायता, नियामक अनुपालन और अन्य अनुमत उद्देश्यों के लिए आवश्यक हो। जानकारी प्रत्यक्ष संपर्कों (आवेदन, फ़ॉर्म, पूछताछ, क्लेम) के माध्यम से, तथा कानून द्वारा अनुमत बीमा साझेदारों और सेवा प्रदाताओं से एकत्र की जा सकती है।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">हम व्यक्तिगत जानकारी का उपयोग कैसे करते हैं</h2>
              <p className="muted-sm">
                हम आपकी व्यक्तिगत जानकारी का उपयोग निम्नलिखित के लिए कर सकते हैं: आपकी पूछताछ और अनुरोधों का उत्तर देना; बीमा उद्धरण प्रदान करना व पॉलिसी आवेदन व खरीद में सहायता; प्री-सेल, पोस्ट-सेल, पॉलिसी सेवा और क्लेम सहायता; पॉलिसी, नवीनीकरण, सेवाओं, अपडेट व प्रासंगिक ऑफ़र के बारे में संचार; वेबसाइट, उत्पादों व सेवाओं में सुधार; रिकॉर्ड बनाए रखना व लागू कानूनी व नियामक आवश्यकताओं का अनुपालन; धोखाधड़ी रोकना व कानूनी अधिकारों की रक्षा; तथा आवश्यकतानुसार अधिकृत सेवा प्रदाताओं के साथ प्रासंगिक जानकारी साझा करना।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">प्रसंस्करण का वैध आधार</h2>
              <p className="muted-sm">
                हम वैध आधारों पर व्यक्तिगत जानकारी संसाधित करते हैं, जिनमें शामिल हैं: सेवा प्रावधान (उद्धरण, प्रस्ताव प्रस्तुति, पॉलिसी सेवा व क्लेम सहायता जैसी बीमा दलाली सेवाएँ); कानूनी व नियामक अनुपालन; वैध उपयोग (नवीनीकरण, ग्राहक सहायता, सेवा प्रबंधन, धोखाधड़ी रोकथाम व व्यावसायिक संचालन); तथा सहमति (जहाँ आवश्यक हो, विशेषकर प्रचार संचार के लिए — आप लागू कानून के अधीन अपनी सहमति वापस ले या प्रबंधित कर सकते हैं)। हम व्यक्तिगत जानकारी कानूनी, निष्पक्ष और पारदर्शी रूप से तथा केवल वैध व अनुमत उद्देश्यों के लिए संसाधित करते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">व्यक्तिगत जानकारी का साझाकरण</h2>
              <p className="muted-sm">
                हम व्यक्तिगत जानकारी तब साझा कर सकते हैं जब सेवाएँ प्रदान करने, व्यावसायिक उद्देश्य पूरे करने या लागू कानून का पालन करने के लिए आवश्यक हो। इसमें शामिल हो सकता है: बीमा कंपनियाँ (उद्धरण, प्रस्ताव, पॉलिसी जारी/सेवा व क्लेम सहायता); अधिकृत सेवा प्रदाता (दस्तावेज़ प्रबंधन, सुरक्षित डेटा संग्रह, तकनीक व अन्य संचालन सहायता); सरकारी व नियामक प्राधिकरण (जहाँ कानून द्वारा आवश्यक); तथा व्यावसायिक हस्तांतरण (विलय, अधिग्रहण या पुनर्गठन की स्थिति में)। हम तृतीय पक्षों से उचित गोपनीयता व सुरक्षा बनाए रखने की आवश्यकता करते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">आपके अधिकार</h2>
              <p className="muted-sm">
                लागू कानून के अधीन, आपके पास अधिकार हो सकते हैं: पहुँच — हमारे द्वारा संसाधित व्यक्तिगत डेटा के बारे में जानकारी का अनुरोध; सुधार और मिटान — गलत या अनावश्यक व्यक्तिगत डेटा के सुधार, पूर्णता, अद्यतन या मिटान का अनुरोध; तथा शिकायत निवारण — व्यक्तिगत डेटा के प्रसंस्करण से संबंधित चिंताएँ उठाना। अपने अधिकारों का प्रयोग करने या शिकायत उठाने के लिए, कृपया हमसे संपर्क करें: {siteConfig.contact.email}
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">डेटा प्रसंस्करण का स्थान</h2>
              <p className="muted-sm">
                आपकी व्यक्तिगत जानकारी भारत में एकत्र, संसाधित और संग्रहित की जा सकती है, लागू कानून व नियामक आवश्यकताओं के अधीन। हम आपकी जानकारी की रक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">डेटा सुरक्षा</h2>
              <p className="muted-sm">
                हम अनधिकृत पहुँच, उपयोग, परिवर्तन, प्रकटीकरण, हानि या विनाश से व्यक्तिगत जानकारी की रक्षा के लिए उचित तकनीकी, संगठनात्मक और भौतिक सुरक्षा उपाय बनाए रखते हैं। हालाँकि, ट्रांसमिशन या इलेक्ट्रॉनिक संग्रहण का कोई भी तरीका पूर्णतः सुरक्षित नहीं है। आप अपने खाता क्रेडेंशियल्स की गोपनीयता बनाए रखने के लिए ज़िम्मेदार हैं।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">व्यक्तिगत डेटा कितने समय तक रखा जाता है</h2>
              <p className="muted-sm">
                Policy Adda व्यक्तिगत डेटा केवल उतने समय तक रखता है जितना उसे एकत्र करने के उद्देश्यों के लिए और लागू कानूनों, नियामक आवश्यकताओं तथा व्यावसायिक आवश्यकताओं के अनुसार आवश्यक हो।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">डेटा उल्लंघन अधिसूचना</h2>
              <p className="muted-sm">
                व्यक्तिगत डेटा उल्लंघन की स्थिति में, Policy Adda उल्लंघन को रोकने और कम करने के उचित कदम उठाएगा तथा जहाँ लागू कानूनों — जिनमें डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 शामिल है — के तहत आवश्यक हो, प्रभावित व्यक्तियों और संबंधित अधिकारियों को अधिसूचना देगा।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">बच्चों का डेटा</h2>
              <p className="muted-sm">
                Policy Adda जानबूझकर 18 वर्ष से कम आयु के बच्चों का व्यक्तिगत डेटा संसाधित नहीं करता, सिवाय जहाँ ऐसी जानकारी बीमा संबंधी उद्देश्यों — जैसे पॉलिसीधारक या बीमित सदस्य विवरण — के लिए आवश्यक हो और माता-पिता या वैध अभिभावक की सहमति से प्रदान की गई हो, जहाँ लागू हो।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">शिकायत निवारण</h2>
              <p className="muted-sm">
                Policy Adda गोपनीयता संबंधी चिंताओं को शीघ्रता से और लागू डेटा संरक्षण, बीमा व साइबर सुरक्षा कानूनों के अनुरूप संबोधित करने के लिए प्रतिबद्ध है। आप इस गोपनीयता सूचना में दिए संपर्क विवरण के माध्यम से हमारे नामित शिकायत अधिकारी के पास अपनी गोपनीयता शिकायत दर्ज कर सकते हैं। जहाँ लागू हो, आप आगे सक्षम नियामक या वैधानिक प्राधिकरण के पास भी जा सकते हैं। सूचना प्रौद्योगिकी (मध्यवर्ती दिशानिर्देश और डिजिटल मीडिया आचार संहिता) नियम, 2021 के अंतर्गत आने वाली शिकायतों के लिए, Policy Adda लागू कानून के तहत निर्धारित समयसीमा के भीतर शिकायतों को स्वीकार और संबोधित करेगा।
              </p>
            </div>

            <div className="detail-block">
              <h2 className="tl-label text-base">इस गोपनीयता सूचना में परिवर्तन</h2>
              <p className="muted-sm">
                Policy Adda अपनी प्रथाओं, लागू कानूनों या नियामक आवश्यकताओं में परिवर्तनों को दर्शाने के लिए समय-समय पर इस गोपनीयता सूचना को अद्यतन कर सकता है। अद्यतन गोपनीयता सूचना हमारी वेबसाइट पर प्रकाशित की जाएगी और उसमें निर्दिष्ट तिथि से प्रभावी होगी।
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
            <p className="muted-sm mb-4">
              This Privacy Notice applies to information collected through the Platform. The Platform may also contain links to third-party websites, including websites of insurers and other service providers. Any information provided directly to such third-party websites will be governed by their respective privacy policies and terms. We recommend reviewing their privacy policies before sharing your personal information.
            </p>
            <p className="muted-sm mb-4">
              This Privacy Notice shall be read together with the applicable terms and conditions, agreements and other notices issued by Policy Adda and shall be subject to applicable Indian laws, regulations and regulatory requirements, including those applicable to insurance intermediaries.
            </p>
            <p className="muted-sm mb-4">
              Policy Adda may amend or update this Privacy Notice from time to time to reflect changes in applicable laws, regulatory requirements, business practices or services. The updated Privacy Notice will be published on the Platform. Users are advised to review this page periodically for the latest version.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Categories of Personal Information We Collect</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                    <th className="text-left py-2 pr-3 font-semibold">Sr. No.</th>
                    <th className="text-left py-2 pr-3 font-semibold">Category</th>
                    <th className="text-left py-2 font-semibold">Types of Information Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Personal Information", "Name, Date of Birth, Gender, Nominee/Beneficiary Data"],
                    ["2", "Contact Information", "Phone Number, Email Address, Address, Pincode"],
                    ["3", "Demographic Information", "Age, Marital Status, Nationality"],
                    ["4", "Employment Information", "Occupation, Employer Name, Job Title, Employment Status, Income Range"],
                    ["5", "Education", "Educational Qualifications"],
                    ["6", "Health Information", "Medical History, Pre-existing Conditions"],
                    ["7", "Multimedia Data", "Photographs"],
                    ["8", "Digital Interaction Data", "IP Address, Browsing History, Cookies, Device Information, Clickstream Data"],
                  ].map(([n, cat, types]) => (
                    <tr key={n} style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                      <td className="py-2 pr-3 align-top">{n}</td>
                      <td className="py-2 pr-3 align-top">{cat}</td>
                      <td className="py-2 align-top">{types}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <h2 className="tl-label text-base">Legal Basis for Processing</h2>
            <p className="muted-sm">
              We process personal information on lawful grounds, including: Provision of Services (insurance broking services such as quotations, proposal submission, policy servicing and claims assistance); Legal and Regulatory Compliance; Legitimate Uses (policy renewals, customer support, service management, fraud prevention and business operations); and Consent (where required, particularly for promotional communications — you may withdraw or manage your consent subject to applicable law). We process personal information lawfully, fairly and transparently and only for legitimate and permitted purposes.
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
            <h2 className="tl-label text-base">Location of Data Processing</h2>
            <p className="muted-sm">
              Your personal information may be collected, processed and stored in India, subject to applicable law and regulatory requirements. We implement appropriate technical and organisational measures to protect your information.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">Data Security</h2>
            <p className="muted-sm">
              We maintain reasonable technical, organisational and physical security measures to protect personal information against unauthorised access, use, alteration, disclosure, loss or destruction. However, no method of transmission or electronic storage is completely secure. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </div>

          <div className="detail-block">
            <h2 className="tl-label text-base">How Long Personal Data is Retained</h2>
            <p className="muted-sm">
              Policy Adda retains personal data only for as long as necessary for the purposes for which it was collected and as required under applicable laws, regulatory requirements, and business needs.
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
              Policy Adda is committed to addressing privacy-related concerns promptly and in accordance with applicable data protection, insurance, and cybersecurity laws. You may raise your privacy-related grievance with our designated Grievance Officer through the contact details provided in this Privacy Notice. Where applicable, you may further approach the competent regulatory or statutory authority. For grievances covered under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Policy Adda will acknowledge and address complaints within the timelines prescribed under applicable law.
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
