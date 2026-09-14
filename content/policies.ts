import type { Policy } from "@/lib/types";

export const policies: Policy[] = [
  {
    id: "pol-two-wheeler",
    slug: "comprehensive-two-wheeler-insurance",
    categorySlug: "motor",
    name: "Comprehensive Two-Wheeler Insurance",
    providerNote: {
      en: "Aggregated via top general insurers (e.g., Liberty General Insurance, TATA AIG).",
      hi: "शीर्ष जनरल इंश्योरेंस कंपनियों के माध्यम से (जैसे लिबर्टी जनरल, टाटा एआईजी)।",
    },
    shortDescription: {
      en: "Total financial protection for your bike or scooter against accidents, theft, and third-party liabilities.",
      hi: "दोपहिया वाहन के लिए दुर्घटना, चोरी और थर्ड-पार्टी देयता से पूर्ण वित्तीय सुरक्षा।",
    },
    fullDescription: {
      en: "This plan covers physical damage to your two-wheeler resulting from road accidents, natural disasters (floods, earthquakes), fires, and malicious acts. It satisfies all legal mandates under the Indian Motor Vehicles Act by bundling mandatory Third-Party Liability with Own Damage (OD) security.",
      hi: "यह योजना सड़क दुर्घटनाओं, प्राकृतिक आपदाओं (बाढ़, भूकंप), आग और दुर्भावनापूर्ण कृत्यों से आपके दोपहिया वाहन को हुई भौतिक क्षति को कवर करती है। यह अनिवार्य थर्ड-पार्टी देयता को ओन डैमेज (OD) सुरक्षा के साथ जोड़कर भारतीय मोटर वाहन अधिनियम के सभी कानूनी अनुपालनों को पूरा करती है।",
    },
    keyBenefits: {
      en: [
        "Cashless repairs across network garages in Patna, Ranchi, and Noida.",
        "Quick digital claim settlement with self-inspection capabilities.",
        "No Claim Bonus (NCB) transfers from previous insurance providers.",
      ],
      hi: [
        "पटना, रांची और नोएडा में नेटवर्क गैराज में कैशलेस मरम्मत।",
        "स्व-निरीक्षण क्षमताओं के साथ त्वरित डिजिटल दावा निपटान।",
        "पिछले बीमा प्रदाताओं से नो क्लेम बोनस (NCB) ट्रांसफर।",
      ],
    },
    eligibility: {
      en: [
        "Any registered two-wheeler owner with a valid Indian driving license and active vehicle registration.",
      ],
      hi: [
        "मान्य भारतीय ड्राइविंग लाइसेंस और सक्रिय वाहन पंजीकरण वाला कोई भी पंजीकृत दोपहिया मालिक।",
      ],
    },
    coverage: {
      en: [
        "Own Damage protection up to the fixed Insured Declared Value (IDV).",
        "Third-Party personal injury and property damage coverage up to ₹1 Lakh.",
      ],
      hi: [
        "निश्चित इंश्योर्ड डिक्लेयर्ड वैल्यू (IDV) तक ओन डैमेज सुरक्षा।",
        "₹1 लाख तक थर्ड-पार्टी व्यक्तिगत चोट और संपत्ति क्षति कवरेज।",
      ],
    },
    exclusions: {
      en: [
        "Damage incurred while driving under the influence of alcohol/drugs.",
        "Driving without a valid license.",
        "Routine wear-and-tear or mechanical breakdowns.",
      ],
      hi: [
        "शराब/नशीली दवाओं के प्रभाव में वाहन चलाने से हुई क्षति।",
        "मान्य लाइसेंस के बिना वाहन चलाना।",
        "सामान्य टूट-फूट या मैकेनिकल खराबी।",
      ],
    },
    documents: [
      { label: { en: "Previous policy copy", hi: "पिछली पॉलिसी की कॉपी" } },
      { label: { en: "Registration Certificate (RC)", hi: "पंजीकरण प्रमाणपत्र (RC)" } },
      { label: { en: "Owner's valid KYC details (Aadhaar/PAN)", hi: "स्वामी की मान्य केवाईसी जानकारी (आधार/पैन)" } },
    ],
    faqs: [
      {
        q: { en: "Is third-party liability cover included?", hi: "क्या थर्ड-पार्टी देयता कवर शामिल है?" },
        a: { en: "The comprehensive plan bundles Own Damage protection with mandatory Third-Party Liability cover. Exact terms depend on the insurer and policy wording.", hi: "कॉम्प्रिहेंसिव योजना ओन डैमेज सुरक्षा को अनिवार्य थर्ड-पार्टी देयता कवर के साथ जोड़ती है। सटीक शर्तें बीमाकर्ता और पॉलिसी की भाषा पर निर्भर करती हैं।" },
      },
      {
        q: { en: "Can I transfer my No Claim Bonus?", hi: "क्या मैं नो क्लेम बोनस ट्रांसफर कर सकता हूँ?" },
        a: { en: "Yes, No Claim Bonus (NCB) transfers from previous insurance providers are supported. Eligibility depends on the insurer and policy conditions.", hi: "हाँ, पिछले बीमा प्रदाताओं से नो क्लेम बोनस (NCB) ट्रांसफर समर्थित है। पात्रता बीमाकर्ता और पॉलिसी की शर्तों पर निर्भर करती है।" },
      },
    ],
    disclaimer: {
      en: "Final policy benefits, premiums, coverage, eligibility, and exclusions depend on the applicable insurer and policy documentation. This is an informational summary — not a policy document. Please contact PolicyAdda for assistance before purchasing.",
      hi: "अंतिम पॉलिसी लाभ, प्रीमियम, कवरेज, पात्रता और बहिष्करण लागू बीमाकर्ता और पॉलिसी दस्तावेज़ पर निर्भर करते हैं। यह एक सूचनात्मक सारांश है — पॉलिसी दस्तावेज़ नहीं। कृपया खरीदने से पहले सहायता के लिए PolicyAdda से संपर्क करें।",
    },
    isActive: true,
    isFeatured: true,
  },
  {
    id: "pol-private-car",
    slug: "comprehensive-private-car-insurance",
    categorySlug: "motor",
    name: "Comprehensive Private Car Insurance",
    providerNote: {
      en: "Aggregated partners may include Bajaj Allianz, HDFC ERGO, Liberty General.",
      hi: "एग्रीगेटेड पार्टनर्स में बजाज अलियांज़, एचडीएफसी एर्गो, लिबर्टी जनरल शामिल हो सकते हैं।",
    },
    shortDescription: {
      en: "Premium end-to-end coverage for your private vehicle against accidental damages, theft, and third-party liabilities.",
      hi: "दुर्घटना क्षति, चोरी और थर्ड-पार्टी देयता से आपके निजी वाहन के लिए प्रीमियम एंड-टू-एंड कवरेज।",
    },
    fullDescription: {
      en: "A complete motor policy designed to safeguard private cars against unexpected losses. This policy balances mandatory legal requirements with deep financial cushions, shielding owners from severe out-of-pocket repair costs while providing customizable add-on covers like Zero Depreciation or Engine Protection.",
      hi: "निजी कारों को अप्रत्याशित नुकसान से बचाने के लिए डिज़ाइन की गई एक पूर्ण मोटर पॉलिसी। यह पॉलिसी अनिवार्य कानूनी आवश्यकताओं को गहरे वित्तीय कुशन के साथ संतुलित करती है, मालिकों को भारी जेब खर्च मरम्मत लागत से बचाती है और ज़ीरो डिप्रेशिएशन या इंजन प्रोटेक्शन जैसे कस्टमाइज़ेबल ऐड-ऑन कवर प्रदान करती है।",
    },
    keyBenefits: {
      en: [
        "Zero Depreciation add-on options to secure full cost replacement on parts.",
        "24/7 Roadside Assistance (RSA) across major state highways in Bihar and Jharkhand.",
        "Hassle-free third-party liability management.",
      ],
      hi: [
        "पार्ट्स पर पूर्ण लागत प्रतिस्थापन सुरक्षित करने के लिए ज़ीरो डिप्रेशिएशन ऐड-ऑन विकल्प।",
        "बिहार और झारखंड में प्रमुख राज्य राजमार्गों पर 24/7 रोडसाइड असिस्टेंस (RSA)।",
        "हैसल-फ्री थर्ड-पार्टी देयता प्रबंधन।",
      ],
    },
    eligibility: {
      en: [
        "Individual or corporate owners of private passenger vehicles registered in India.",
      ],
      hi: [
        "भारत में पंजीकृत निजी यात्री वाहनों के व्यक्तिगत या कॉर्पोरेट मालिक।",
      ],
    },
    coverage: {
      en: [
        "Damage to the vehicle body.",
        "Mandatory Personal Accident cover for the owner-driver (₹15 Lakhs).",
        "Unlimited third-party bodily injury liabilities.",
      ],
      hi: [
        "वाहन बॉडी को क्षति।",
        "ओनर-ड्राइवर के लिए अनिवार्य व्यक्तिगत दुर्घटना कवर (₹15 लाख)।",
        "असीमित थर्ड-पार्टी शारीरिक चोट देयता।",
      ],
    },
    exclusions: {
      en: [
        "Depreciation on parts if standard policy is selected.",
        "Damage out of geographical boundaries.",
        "Driving outside usage guidelines (e.g., using a private car for commercial delivery).",
      ],
      hi: [
        "मानक पॉलिसी चुनने पर पार्ट्स पर डिप्रेशिएशन।",
        "भौगोलिक सीमा के बाहर क्षति।",
        "उपयोग दिशानिर्देशों के बाहर वाहन चलाना (जैसे व्यावसायिक डिलीवरी के लिए निजी कार का उपयोग)।",
      ],
    },
    documents: [
      { label: { en: "Car Registration Certificate (RC)", hi: "कार पंजीकरण प्रमाणपत्र (RC)" } },
      { label: { en: "Previous year policy document", hi: "पिछले वर्ष का पॉलिसी दस्तावेज़" } },
      { label: { en: "Owner's identification proof", hi: "स्वामी की पहचान प्रमाण" } },
    ],
    faqs: [
      {
        q: { en: "What add-ons are available?", hi: "कौन से ऐड-ऑन उपलब्ध हैं?" },
        a: { en: "Potential add-ons include Zero Depreciation, Engine Protection, and Roadside Assistance, subject to the actual insurer and policy selection.", hi: "संभावित ऐड-ऑन में ज़ीरो डिप्रेशिएशन, इंजन प्रोटेक्शन और रोडसाइड असिस्टेंस शामिल हैं, जो वास्तविक बीमाकर्ता और पॉलिसी चयन पर निर्भर करते हैं।" },
      },
    ],
    disclaimer: {
      en: "Final policy benefits, premiums, coverage, eligibility, and exclusions depend on the applicable insurer and policy documentation. This is an informational summary — not a policy document. Please contact PolicyAdda for assistance before purchasing.",
      hi: "अंतिम पॉलिसी लाभ, प्रीमियम, कवरेज, पात्रता और बहिष्करण लागू बीमाकर्ता और पॉलिसी दस्तावेज़ पर निर्भर करते हैं। यह एक सूचनात्मक सारांश है — पॉलिसी दस्तावेज़ नहीं। कृपया खरीदने से पहले सहायता के लिए PolicyAdda से संपर्क करें।",
    },
    isActive: true,
    isFeatured: true,
  },
  {
    id: "pol-health-family-floater",
    slug: "health-secure-family-floater-plan",
    categorySlug: "health",
    name: "Health Secure Family Floater Plan",
    providerNote: {
      en: "Multiple leading standalone health insurers.",
      hi: "अग्रणी स्वतंत्र हेल्थ इंश्योरेंस प्रदाताओं में से कई।",
    },
    shortDescription: {
      en: "A single comprehensive health policy covering medical and hospitalization expenses for your entire family.",
      hi: "आपके पूरे परिवार के लिए चिकित्सा और अस्पताल में भर्ती खर्चों को कवर करने वाली एक व्यापक हेल्थ पॉलिसी।",
    },
    fullDescription: {
      en: "This plan utilizes a floating sum insured layout, letting any designated family member tap into the collective coverage pool during medical emergencies. It provides extensive financial relief against medical inflation by taking care of inpatient costs, day-care treatments, and pre/post-hospitalization fees.",
      hi: "यह योजना एक फ्लोटिंग सूम इंश्योर्ड लेआउट का उपयोग करती है, जिससे किसी भी नामित परिवार के सदस्य को चिकित्सा आपातकाल में सामूहिक कवरेज पूल का उपयोग करने की अनुमति मिलती है। यह इनपेशेंट लागत, डे-केयर उपचार और प्री/पोस्ट-हॉस्पिटलाइज़ेशन शुल्क का ध्यान रखकर चिकित्सा मुद्रास्फीति के खिलाफ व्यापक वित्तीय राहत प्रदान करती है।",
    },
    keyBenefits: {
      en: [
        "Cashless hospitalization across thousands of networked hospitals nationwide.",
        "Tax exemptions under Section 80D of the Income Tax Act.",
        "Coverage for modern treatments, day-care procedures, and ambulance charges.",
      ],
      hi: [
        "देश भर के हजारों नेटवर्क अस्पतालों में कैशलेस अस्पताल में भर्ती।",
        "आयकर अधिनियम की धारा 80D के तहत कर छूट।",
        "आधुनिक उपचार, डे-केयर प्रक्रियाओं और एम्बुलेंस शुल्क के लिए कवरेज।",
      ],
    },
    eligibility: {
      en: [
        "Proposer age between 18 to 65 years.",
        "Dependent children covered from 91 days up to 25 years.",
      ],
      hi: [
        "प्रस्तावक की आयु 18 से 65 वर्ष के बीच।",
        "91 दिन से 25 वर्ष तक के आश्रित बच्चे कवर्ड।",
      ],
    },
    coverage: {
      en: [
        "Sum Insured ranges from ₹3 Lakhs to ₹1 Crore.",
        "Includes room rent, ICU charges, surgeon fees, and pre-hospitalization care (up to 60 days).",
      ],
      hi: [
        "सूम इंश्योर्ड ₹3 लाख से ₹1 करोड़ तक।",
        "कमरे का किराया, ICU शुल्क, सर्जन शुल्क और प्री-हॉस्पिटलाइज़ेशन देखभाल (60 दिनों तक) शामिल।",
      ],
    },
    exclusions: {
      en: [
        "Pre-existing diseases (PED) subject to a standard 2 to 4-year waiting period.",
        "Cosmetic surgery.",
        "Self-inflicted injuries.",
      ],
      hi: [
        "पहले से मौजूद बीमारियाँ (PED) मानक 2 से 4 वर्ष की प्रतीक्षा अवधि के अधीन।",
        "कॉस्मेटिक सर्जरी।",
        "स्वयं को पहुँचाई गई चोटें।",
      ],
    },
    documents: [
      { label: { en: "Age proof of all members", hi: "सभी सदस्यों का आयु प्रमाण" } },
      { label: { en: "Pre-policy medical check-up reports (if age > 45 or based on sum insured)", hi: "प्री-पॉलिसी मेडिकल चेक-अप रिपोर्ट (यदि आयु > 45 या सूम इंश्योर्ड के आधार पर)" } },
      { label: { en: "PAN/Aadhaar of the primary applicant", hi: "प्राथमिक आवेदक का पैन/आधार" } },
    ],
    faqs: [
      {
        q: { en: "Is tax benefit available on this cover?", hi: "क्या इस कवर पर कर लाभ उपलब्ध है?" },
        a: { en: "Yes, tax exemptions are available under Section 80D of the Income Tax Act. Consult your financial advisor for specifics.", hi: "हाँ, आयकर अधिनियम की धारा 80D के तहत कर छूट उपलब्ध है। विशिष्ट जानकारी के लिए अपने वित्तीय सलाहकार से परामर्श करें।" },
      },
    ],
    disclaimer: {
      en: "Final policy benefits, premiums, coverage, eligibility, and exclusions depend on the applicable insurer and policy documentation. This is an informational summary — not a policy document. Please contact PolicyAdda for assistance before purchasing.",
      hi: "अंतिम पॉलिसी लाभ, प्रीमियम, कवरेज, पात्रता और बहिष्करण लागू बीमाकर्ता और पॉलिसी दस्तावेज़ पर निर्भर करते हैं। यह एक सूचनात्मक सारांश है — पॉलिसी दस्तावेज़ नहीं। कृपया खरीदने से पहले सहायता के लिए PolicyAdda से संपर्क करें।",
    },
    isActive: true,
    isFeatured: true,
  },
  {
    id: "pol-group-health",
    slug: "group-health-and-liability-cover",
    categorySlug: "business",
    name: "Group Health & Liability Cover",
    providerNote: {
      en: "Custom B2B underwriting via major corporate insurers.",
      hi: "प्रमुख कॉर्पोरेट बीमाकर्ताओं के माध्यम से कस्टम B2B अंडरराइटिंग।",
    },
    shortDescription: {
      en: "Tailor-made employee health and liability benefits designed specifically for corporate houses and SMEs.",
      hi: "कॉर्पोरेट हाउस और एसएमई के लिए विशेष रूप से डिज़ाइन किए गए कस्टम-मेड कर्मचारी स्वास्थ्य और देयता लाभ।",
    },
    fullDescription: {
      en: "Built to assist evolving businesses in Noida, Ranchi, and regional hubs, this policy offers group medical protection to employees alongside business liability covers. It helps businesses protect their workforce, lower attrition rates, and comply with employer liability guidelines easily.",
      hi: "नोएडा, रांची और क्षेत्रीय केंद्रों में विकसित होते व्यवसायों की सहायता के लिए बनाया गया, यह पॉलिसी कर्मचारियों को समूह चिकित्सा सुरक्षा प्रदान करती है और साथ ही व्यावसायिक देयता कवर भी देती है। यह व्यवसायों को अपने कार्यबल की रक्षा करने, कर्मचारी पलायन दर कम करने और नियोक्ता देयता दिशानिर्देशों का पालन करने में आसानी से मदद करती है।",
    },
    keyBenefits: {
      en: [
        "Waiver on waiting periods for pre-existing medical conditions from day one.",
        "Maternity benefits and newborn cover options included seamlessly.",
        "Boosts employee retention and satisfies corporate wellness initiatives.",
      ],
      hi: [
        "पहले दिन से पहले से मौजूद चिकित्सा स्थितियों के लिए प्रतीक्षा अवधि में छूट।",
        "मातृत्व लाभ और नवजात शिशु कवर विकल्प सहज रूप से शामिल।",
        "कर्मचारी प्रतिधारण बढ़ाता है और कॉर्पोरेट वेलनेस पहल को पूरा करता है।",
      ],
    },
    eligibility: {
      en: [
        "Registered commercial business or SME with a minimum corporate workforce of 7 to 10 employees.",
      ],
      hi: [
        "7 से 10 कर्मचारियों के न्यूनतम कॉर्पोरेट कार्यबल वाला पंजीकृत व्यावसायिक व्यवसाय या एसएमई।",
      ],
    },
    coverage: {
      en: [
        "Customizable sum insured options per employee tier.",
        "Corporate buffer capabilities.",
        "Worldwide or nationwide coverage footprints.",
      ],
      hi: [
        "प्रति कर्मचारी स्तर अनुकूलन योग्य सूम इंश्योर्ड विकल्प।",
        "कॉर्पोरेट बफर क्षमताएँ।",
        "विश्वव्यापी या देशव्यापी कवरेज फुटप्रिंट।",
      ],
    },
    exclusions: {
      en: [
        "Non-medical hospital expenses.",
        "Experimental or unproven therapies.",
        "Intentional non-compliance with standard workplace safety norms.",
      ],
      hi: [
        "गैर-चिकित्सीय अस्पताल खर्च।",
        "प्रयोगात्मक या अप्रमाणित चिकित्सा।",
        "मानक कार्यस्थल सुरक्षा मानदंडों के जानबूझकर गैर-अनुपालन।",
      ],
    },
    documents: [
      { label: { en: "Company PAN card", hi: "कंपनी पैन कार्ड" } },
      { label: { en: "GST registration certificate", hi: "जीएसटी पंजीकरण प्रमाणपत्र" } },
      { label: { en: "Finalized Excel roster with employee details (Names, Ages, Relationships, Nominees)", hi: "कर्मचारी विवरण (नाम, आयु, संबंध, नामांकित) वाला अंतिम एक्सेल रोस्टर" } },
    ],
    faqs: [
      {
        q: { en: "Can an employee add their parents to the group plan?", hi: "क्या कोई कर्मचारी ग्रुप प्लान में अपने माता-पिता जोड़ सकता है?" },
        a: { en: "Yes, if the specific corporate plan structure has parent-inclusion features activated during corporate onboarding.", hi: "हाँ, यदि विशिष्ट कॉर्पोरेट प्लान संरचना में कॉर्पोरेट ऑनबोर्डिंग के दौरान माता-पिता-समावेश सुविधाएँ सक्रिय हैं।" },
      },
    ],
    disclaimer: {
      en: "Final policy benefits, premiums, coverage, eligibility, and exclusions depend on the applicable insurer and policy documentation. This is an informational summary — not a policy document. Please contact PolicyAdda for assistance before purchasing.",
      hi: "अंतिम पॉलिसी लाभ, प्रीमियम, कवरेज, पात्रता और बहिष्करण लागू बीमाकर्ता और पॉलिसी दस्तावेज़ पर निर्भर करते हैं। यह एक सूचनात्मक सारांश है — पॉलिसी दस्तावेज़ नहीं। कृपया खरीदने से पहले सहायता के लिए PolicyAdda से संपर्क करें।",
    },
    isActive: true,
    isFeatured: true,
  },
];

export const getPolicyBySlug = (slug: string) =>
  policies.find((p) => p.slug === slug);

export const getPoliciesByCategory = (categorySlug: string) =>
  policies.filter((p) => p.categorySlug === categorySlug && p.isActive);

export const getFeaturedPolicies = () =>
  policies.filter((p) => p.isActive && p.isFeatured);

export const getActivePolicies = () => policies.filter((p) => p.isActive);
