import type { Policy } from "@/lib/types";

/**
 * INITIAL SAMPLE / CLIENT-PROVIDED POLICY CONTENT.
 * Wording preserves "potential / example / depending on insurer" hedging —
 * these are NOT verified policy terms. An authorized administrator edits
 * this data (and later the CMS-backed copy) through the Admin Console.
 */
export const policies: Policy[] = [
  {
    id: "pol-two-wheeler",
    slug: "comprehensive-two-wheeler-insurance",
    categorySlug: "motor",
    name: "Comprehensive Two-Wheeler Insurance",
    providerNote: {
      en: "Aggregated via top general insurers. Examples include Liberty General Insurance and TATA AIG.",
      hi: "शीर्ष जनरल इंश्योरेंस कंपनियों के माध्यम से। उदाहरण: लिबर्टी जनरल और टाटा एआईजी।",
    },
    shortDescription: {
      en: "Financial protection for a bike or scooter against accidents, theft, and third-party liabilities.",
      hi: "दोपहिया वाहन के लिए दुर्घटना, चोरी और थर्ड-पार्टी देयता से वित्तीय सुरक्षा।",
    },
    fullDescription: {
      en: "This policy concept covers physical damage to a two-wheeler resulting from road accidents, natural disasters such as floods or earthquakes, fires, and malicious acts. It combines Own Damage protection with mandatory Third-Party Liability requirements.",
      hi: "यह पॉलिसी कॉन्सेप्ट दोपहिया वाहन को सड़क दुर्घटना, बाढ़ या भूकंप जैसी प्राकृतिक आपदाओं, आग और दुर्भावनापूर्ण कृत्यों से हुई भौतिक क्षति को कवर करता है। यह ओन डैमेज सुरक्षा को अनिवार्य थर्ड-पार्टी देयता आवश्यकताओं के साथ जोड़ता है।",
    },
    keyBenefits: {
      en: [
        "Cashless repair options where available.",
        "Digital claim assistance where supported by the insurer.",
        "Potential No Claim Bonus transfer.",
      ],
      hi: [
        "जहाँ उपलब्ध हो, कैशलेस मरम्मत विकल्प।",
        "जहाँ बीमाकर्ता समर्थन करे, डिजिटल क्लेम सहायता।",
        "संभावित नो क्लेम बोनस ट्रांसफर।",
      ],
    },
    eligibility: {
      en: [
        "Registered two-wheeler owner.",
        "Valid Indian driving license.",
        "Valid vehicle registration.",
      ],
      hi: [
        "पंजीकृत दोपहिया वाहन स्वामी।",
        "मान्य भारतीय ड्राइविंग लाइसेंस।",
        "मान्य वाहन पंजीकरण।",
      ],
    },
    coverage: {
      en: [
        "Own Damage protection subject to the policy terms and Insured Declared Value.",
        "Third-Party Liability coverage according to applicable policy and legal requirements.",
      ],
      hi: [
        "पॉलिसी की शर्तों और इंश्योर्ड डिक्लेयर्ड वैल्यू के अनुसार ओन डैमेज सुरक्षा।",
        "लागू पॉलिसी और कानूनी आवश्यकताओं के अनुसार थर्ड-पार्टी देयता कवरेज।",
      ],
    },
    exclusions: {
      en: [
        "Driving under the influence of alcohol or drugs.",
        "Driving without a valid license.",
        "Routine wear and tear.",
        "Mechanical breakdown.",
      ],
      hi: [
        "शराब या नशीली दवाओं के प्रभाव में वाहन चलाना।",
        "मान्य लाइसेंस के बिना वाहन चलाना।",
        "सामान्य टूट-फूट।",
        "मैकेनिकल खराबी।",
      ],
    },
    documents: [
      { label: { en: "Previous policy copy", hi: "पिछली पॉलिसी की कॉपी" } },
      { label: { en: "Registration Certificate", hi: "पंजीकरण प्रमाणपत्र" } },
      { label: { en: "KYC information", hi: "केवाईसी जानकारी" } },
    ],
    faqs: [
      {
        q: { en: "Is third-party liability cover included?", hi: "क्या थर्ड-पार्टी देयता कवर शामिल है?" },
        a: { en: "The comprehensive concept combines Own Damage protection with mandatory third-party liability cover. Exact terms depend on the insurer and policy wording.", hi: "कॉम्प्रिहेंसिव कॉन्सेप्ट ओन डैमेज सुरक्षा को अनिवार्य थर्ड-पार्टी देयता कवर के साथ जोड़ता है। सटीक शर्तें बीमाकर्ता और पॉलिसी की भाषा पर निर्भर करती हैं।" },
      },
      {
        q: { en: "Can I transfer my No Claim Bonus?", hi: "क्या मैं नो क्लेम बोनस ट्रांसफर कर सकता हूँ?" },
        a: { en: "A potential No Claim Bonus transfer may be available; eligibility depends on the insurer and policy conditions.", hi: "संभावित नो क्लेम बोनस ट्रांसफर उपलब्ध हो सकता है; पात्रता बीमाकर्ता और पॉलिसी की शर्तों पर निर्भर करती है।" },
      },
    ],
    disclaimer: {
      en: "This is an informative summary only, not a policy document. Actual coverage, exclusions, and terms depend on the insurer's policy wording. Please contact PolicyAdda for assistance before purchasing.",
      hi: "यह केवल सूचनात्मक सारांश है, पॉलिसी दस्तावेज़ नहीं। वास्तविक कवरेज, बहिष्करण और शर्तें बीमाकर्ता की पॉलिसी भाषा पर निर्भर करती हैं। खरीदने से पहले कृपया सहायता के लिए PolicyAdda से संपर्क करें।",
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
      en: "Aggregated partners may include examples such as Bajaj Allianz, HDFC ERGO, and Liberty General.",
      hi: "एग्रीगेटेड पार्टनर्स में बजाज अलियांज़, एचडीएफसी एर्गो और लिबर्टी जनरल जैसे उदाहरण शामिल हो सकते हैं।",
    },
    shortDescription: {
      en: "Comprehensive protection for private vehicles against accidental damage, theft, and third-party liabilities.",
      hi: "निजी वाहनों के लिए दुर्घटना क्षति, चोरी और थर्ड-पार्टी देयता से व्यापक सुरक्षा।",
    },
    fullDescription: {
      en: "A motor insurance solution designed to protect private car owners from unexpected losses. Coverage and add-ons may vary depending on the actual insurer and policy. Potential add-ons include Zero Depreciation, Engine Protection, and Roadside Assistance.",
      hi: "निजी कार मालिकों को अप्रत्याशित नुकसान से बचाने के लिए बनाया गया मोटर इंश्योरेंस समाधान। कवरेज और ऐड-ऑन वास्तविक बीमाकर्ता और पॉलिसी के आधार पर भिन्न हो सकते हैं। संभावित ऐड-ऑन में ज़ीरो डिप्रेशिएशन, इंजन प्रोटेक्शन और रोडसाइड असिस्टेंस शामिल हैं।",
    },
    keyBenefits: {
      en: [
        "Zero Depreciation options.",
        "Roadside Assistance.",
        "Third-Party Liability coverage.",
        "Own Damage protection.",
      ],
      hi: [
        "ज़ीरो डिप्रेशिएशन विकल्प।",
        "रोडसाइड असिस्टेंस।",
        "थर्ड-पार्टी देयता कवरेज।",
        "ओन डैमेज सुरक्षा।",
      ],
    },
    eligibility: {
      en: [
        "Private passenger vehicles registered in India.",
        "Individual or eligible corporate owners.",
      ],
      hi: [
        "भारत में पंजीकृत निजी यात्री वाहन।",
        "व्यक्तिगत या पात्र कॉर्पोरेट स्वामी।",
      ],
    },
    coverage: {
      en: [
        "Vehicle damage.",
        "Own Damage.",
        "Third-Party Liability.",
        "Owner-driver personal accident coverage where applicable.",
      ],
      hi: [
        "वाहन क्षति।",
        "ओन डैमेज।",
        "थर्ड-पार्टी देयता।",
        "जहाँ लागू हो, ओनर-ड्राइवर व्यक्तिगत दुर्घटना कवरेज।",
      ],
    },
    exclusions: {
      en: [
        "Depreciation depending on coverage type.",
        "Damage outside geographical limits.",
        "Using a private vehicle for unauthorized commercial purposes.",
      ],
      hi: [
        "कवरेज प्रकार के अनुसार डिप्रेशिएशन।",
        "भौगोलिक सीमा के बाहर क्षति।",
        "निजी वाहन का अनधिकृत व्यावसायिक उपयोग।",
      ],
    },
    documents: [
      { label: { en: "Vehicle Registration Certificate", hi: "वाहन पंजीकरण प्रमाणपत्र" } },
      { label: { en: "Previous policy document", hi: "पिछली पॉलिसी दस्तावेज़" } },
      { label: { en: "Owner identification", hi: "स्वामी की पहचान" } },
    ],
    faqs: [
      {
        q: { en: "What add-ons are available?", hi: "कौन से ऐड-ऑन उपलब्ध हैं?" },
        a: { en: "Potential add-ons include Zero Depreciation, Engine Protection, and Roadside Assistance, subject to the actual insurer and policy selection.", hi: "संभावित ऐड-ऑन में ज़ीरो डिप्रेशिएशन, इंजन प्रोटेक्शन और रोडसाइड असिस्टेंस शामिल हैं, जो वास्तविक बीमाकर्ता और पॉलिसी चयन पर निर्भर करते हैं।" },
      },
    ],
    disclaimer: {
      en: "This is an informative summary only, not a policy document. Coverage depends on actual insurer policy wording. Please contact PolicyAdda for assistance before purchasing.",
      hi: "यह केवल सूचनात्मक सारांश है, पॉलिसी दस्तावेज़ नहीं। कवरेज वास्तविक बीमाकर्ता की पॉलिसी भाषा पर निर्भर करती है। खरीदने से पहले कृपया सहायता के लिए PolicyAdda से संपर्क करें।",
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
      en: "Multiple health insurance providers. Specific providers must be confirmed.",
      hi: "एकाधिक हेल्थ इंश्योरेंस प्रदाता। विशिष्ट प्रदाताओं की पुष्टि आवश्यक है।",
    },
    shortDescription: {
      en: "A family health insurance concept where eligible family members share a common sum insured.",
      hi: "पारिवारिक हेल्थ इंश्योरेंस कॉन्सेप्ट जिसमें पात्र परिवार के सदस्य साझा सूम इंश्योर्ड का उपयोग करते हैं।",
    },
    fullDescription: {
      en: "A family floater structure allows designated family members to access a shared sum insured according to the policy terms. Potential coverage may include hospitalization, day-care procedures, pre-hospitalization expenses, and post-hospitalization expenses. Coverage depends on the actual insurer and selected policy.",
      hi: "फैमिली फ्लोटर संरचना नामित परिवार के सदस्यों को पॉलिसी की शर्तों के अनुसार साझा सूम इंश्योर्ड का उपयोग करने की अनुमति देती है। संभावित कवरेज में अस्पताल में भर्ती, डे-केयर प्रक्रियाएँ, प्री-हॉस्पिटलाइज़ेशन और पोस्ट-हॉस्पिटलाइज़ेशन खर्च शामिल हो सकते हैं।",
    },
    keyBenefits: {
      en: [
        "Cashless hospitalization at eligible network hospitals.",
        "Coverage for eligible hospitalization expenses.",
        "Day-care procedures where covered.",
        "Ambulance coverage where applicable.",
        "Potential tax benefits subject to applicable laws.",
      ],
      hi: [
        "पात्र नेटवर्क अस्पतालों में कैशलेस अस्पताल में भर्ती।",
        "पात्र अस्पताल खर्चों के लिए कवरेज।",
        "जहाँ कवर हो, डे-केयर प्रक्रियाएँ।",
        "जहाँ लागू हो, एम्बुलेंस कवरेज।",
        "लागू कानूनों के अधीन संभावित कर लाभ।",
      ],
    },
    eligibility: {
      en: [
        "Primary applicant.",
        "Spouse.",
        "Dependent children.",
        "Age limits vary by policy.",
      ],
      hi: [
        "मुख्य आवेदक।",
        "पति/पत्नी।",
        "आश्रित बच्चे।",
        "आयु सीमाएँ पॉलिसी के अनुसार भिन्न होती हैं।",
      ],
    },
    coverage: {
      en: [
        "Possible sum insured ranges and benefits must be confirmed with the actual insurer.",
      ],
      hi: [
        "संभावित सूम इंश्योर्ड सीमा और लाभ वास्तविक बीमाकर्ता से पुष्टि किए जाने चाहिए।",
      ],
    },
    exclusions: {
      en: [
        "Pre-existing disease waiting periods.",
        "Cosmetic procedures.",
        "Self-inflicted injuries.",
      ],
      hi: [
        "पहले से मौजूद बीमारियों की प्रतीक्षा अवधि।",
        "कॉस्मेटिक प्रक्रियाएँ।",
        "स्वयं को पहुँचाई गई चोटें।",
      ],
    },
    documents: [
      { label: { en: "Age proof", hi: "आयु प्रमाण" } },
      { label: { en: "Identity documents", hi: "पहचान दस्तावेज़" } },
      { label: { en: "Medical reports where required", hi: "जहाँ आवश्यक हो, मेडिकल रिपोर्ट" } },
    ],
    faqs: [
      {
        q: { en: "Is tax benefit available on this cover?", hi: "क्या इस कवर पर कर लाभ उपलब्ध है?" },
        a: { en: "Potential tax benefits are subject to applicable laws and the specific policy. Confirm with a PolicyAdda executive and your advisor.", hi: "संभावित कर लाभ लागू कानूनों और विशिष्ट पॉलिसी के अधीन हैं। PolicyAdda कार्यकारी और अपने सलाहकार से पुष्टि करें।" },
      },
    ],
    disclaimer: {
      en: "Family floater coverage and waiting periods depend on the actual insurer and policy wording. Please contact PolicyAdda for assistance before purchasing.",
      hi: "फैमिली फ्लोटर कवरेज और प्रतीक्षा अवधि वास्तविक बीमाकर्ता और पॉलिसी भाषा पर निर्भर करती हैं। खरीदने से पहले कृपया PolicyAdda से संपर्क करें।",
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
      en: "Customizable business solutions; the insurer is selected based on requirements.",
      hi: "अनुकूलन योग्य व्यावसायिक समाधान; बीमाकर्ता का चयन आवश्यकताओं के आधार पर किया जाता है।",
    },
    shortDescription: {
      en: "Insurance solutions designed for businesses and SMEs to provide employee health benefits and other relevant protection.",
      hi: "व्यवसायों और एसएमई के लिए कर्मचारी स्वास्थ्य लाभ और अन्य प्रासंगिक सुरक्षा प्रदान करने हेतु बीमा समाधान।",
    },
    fullDescription: {
      en: "Customizable business insurance solutions may help organizations provide employee health coverage and other forms of business protection. The exact policy structure depends on business requirements, workforce size, selected insurer, policy type, and underwriting.",
      hi: "अनुकूलन योग्य व्यावसायिक बीमा समाधान संगठनों को कर्मचारी स्वास्थ्य कवरेज और अन्य व्यावसायिक सुरक्षा प्रदान करने में मदद कर सकते हैं। सटीक पॉलिसी संरचना व्यावसायिक आवश्यकताओं, कार्यबल आकार, बीमाकर्ता, पॉलिसी प्रकार और अंडरराइटिंग पर निर्भर करती है।",
    },
    keyBenefits: {
      en: [
        "Employee health coverage.",
        "Corporate insurance benefits.",
        "Optional maternity benefits depending on the policy.",
        "Corporate wellness benefits.",
        "Customizable coverage structures.",
      ],
      hi: [
        "कर्मचारी स्वास्थ्य कवरेज।",
        "कॉर्पोरेट बीमा लाभ।",
        "पॉलिसी के अनुसार वैकल्पिक मातृत्व लाभ।",
        "कॉर्पोरेट वेलनेस लाभ।",
        "अनुकूलन योग्य कवरेज संरचनाएँ।",
      ],
    },
    eligibility: {
      en: [
        "Registered businesses or SMEs.",
        "Minimum employee requirements may vary.",
      ],
      hi: [
        "पंजीकृत व्यवसाय या एसएमई।",
        "न्यूनतम कर्मचारी आवश्यकताएँ भिन्न हो सकती हैं।",
      ],
    },
    coverage: {
      en: [
        "Customizable based on employee tier, sum insured, corporate requirements, and insurer underwriting.",
      ],
      hi: [
        "कर्मचारी स्तर, सूम इंश्योर्ड, कॉर्पोरेट आवश्यकताओं और बीमाकर्ता अंडरराइटिंग के आधार पर अनुकूलन योग्य।",
      ],
    },
    exclusions: {
      en: [
        "Depends on actual insurer policy wording.",
      ],
      hi: [
        "वास्तविक बीमाकर्ता की पॉलिसी भाषा पर निर्भर करता है।",
      ],
    },
    documents: [
      { label: { en: "Company PAN", hi: "कंपनी पैन" } },
      { label: { en: "GST information", hi: "जीएसटी जानकारी" } },
      { label: { en: "Employee roster", hi: "कर्मचारी रोस्टर" } },
      { label: { en: "Other business documentation", hi: "अन्य व्यावसायिक दस्तावेज़" } },
    ],
    faqs: [
      {
        q: { en: "Can an employee add parents to the group plan?", hi: "क्या कोई कर्मचारी ग्रुप प्लान में माता-पिता जोड़ सकता है?" },
        a: { en: "This depends on the specific corporate policy structure and whether parent inclusion is available.", hi: "यह विशिष्ट कॉर्पोरेट पॉलिसी संरचना पर निर्भर करता है कि माता-पिता का शामिल होना उपलब्ध है या नहीं।" },
      },
    ],
    disclaimer: {
      en: "Group coverage structure depends on the selected insurer and underwriting. This summary is not a policy document.",
      hi: "ग्रुप कवरेज संरचना चयनित बीमाकर्ता और अंडरराइटिंग पर निर्भर करती है। यह सारांश पॉलिसी दस्तावेज़ नहीं है।",
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