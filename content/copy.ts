export type SiteCopy = {
  nav: { home: string; categories: string; about: string; how: string; support: string; login: string; cta: string; apply: string };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { t: string; d: string }[];
  };
  categories: { eyebrow: string; title: string; lead: string; view: string };
  how: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { t: string; d: string }[];
  };
  featured: { eyebrow: string; title: string; lead: string; viewAll: string; learnMore: string };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { t: string; d: string }[];
  };
  faq: { eyebrow: string; title: string; lead: string };
  support: {
    eyebrow: string;
    title: string;
    lead: string;
    call: string;
    callSub: string;
    hours: string;
    hoursSub: string;
    email: string;
    emailSub: string;
    whatsapp: string;
    whatsappSub: string;
    ticket: string;
    ticketSub: string;
    openTicket: string;
    tName: string;
    tEmail: string;
    tPhone: string;
    tSubject: string;
    tDescription: string;
    tSubmit: string;
    tSuccess: string;
    tSuccessSub: string;
    tNote: string;
    cats: string[];
  };
  footer: {
    tagline: string;
    explore: string;
    categoriesLabel: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    aboutPage: string;
    contact: string;
    verifiedNote: string;
    rights: string;
  };
  cta: {
    title: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  detail: {
    about: string;
    benefits: string;
    eligibility: string;
    coverage: string;
    exclusions: string;
    documents: string;
    frequent: string;
    disclaimer: string;
    ready: string;
    readySub: string;
    applyNow: string;
    trustSupport: string;
    openSignup: string;
  };
  apply: {
    title: string;
    sub: string;
    fullName: string;
    phone: string;
    phoneHint: string;
    email: string;
    city: string;
    message: string;
    msgPlaceholder: string;
    submitCta: string;
    privacyNote: string;
    doneTitle: string;
    doneSub: string;
    yourId: string;
    trackNow: string;
    nextTitle: string;
  };
  track: { title: string; sub: string; idInput: string; idPlaceholder: string; check: string; found: string; notFound: string; privacy: string; updated: string };
  verif: { note: string; pendingTitle: string; pendingBody: string };
  common: {
    close: string;
    open: string;
    back: string;
    all: string;
    loading: string;
    submit: string;
    optional: string;
  };
};

export const en: SiteCopy = {
  nav: {
    home: "Home",
    categories: "Insurance",
    about: "About",
    how: "How It Works",
    support: "Support",
    login: "Login",
    cta: "Get Assistance",
    apply: "Apply",
  },
  hero: {
    eyebrow: "Insurance assistance · Ranchi",
    titleA: "Unexpected things happen.",
    titleB: "Insurance shouldn't be confusing.",
    sub: "PolicyAdda helps you understand insurance categories and policy options in plain language — then guides you through every step, from enquiry to policy access. Policy aapka, adda humara.",
    ctaPrimary: "Explore policies",
    ctaSecondary: "Talk to us",
  },
  trust: {
    eyebrow: "Why people choose PolicyAdda",
    title: "Insurance you can understand.",
    lead: "No hidden clauses, no pressure, no jargon walls. We take you from confusion to clarity — professionally, transparently, and at your pace.",
    items: [
      { t: "Transparent information", d: "Policies are explained in plain language with clear sections — benefits, coverage, exclusions, and required documents." },
      { t: "Real human assistance", d: "When you submit an enquiry, a PolicyAdda executive contacts you and stays with you through the process." },
      { t: "Clear process", d: "You always know where your application stands, with a status you can track anytime." },
      { t: "Secure handling", d: "Your details are used only to serve you. Access to your information is permission-based and server-protected." },
    ],
  },
  categories: {
    eyebrow: "Insurance categories",
    title: "Start with what you need.",
    lead: "Explore a category, understand your options, and ask us anything.",
    view: "View policies",
  },
  how: {
    eyebrow: "How it works",
    title: "From confusion to clarity, step by step.",
    lead: "A simple, transparent journey — no surprises.",
    steps: [
      { t: "Explore", d: "Browse insurance categories and understand your options in plain language." },
      { t: "Understand", d: "Read clear, structured policy information — benefits, coverage, exclusions." },
      { t: "Submit enquiry", d: "Fill a short form or use the provided application link. No commitment." },
      { t: "Get contacted", d: "A PolicyAdda executive reaches out to assist you personally." },
      { t: "Receive assistance", d: "Get helped through the policy process, from paperwork to answers." },
      { t: "Access your policy", d: "Customers receive access to their policy information through our secure portal." },
    ],
  },
  featured: {
    eyebrow: "Featured policies",
    title: "Popular policy concepts.",
    lead: "A few concepts customers often ask about. Full clarity before any decision.",
    viewAll: "View all policies",
    learnMore: "Learn more",
  },
  why: {
    eyebrow: "Why PolicyAdda",
    title: "Built on trust, not pressure.",
    lead: "We behave like the advisor you wanted — someone who explains, supports, and stays reachable.",
    items: [
      { t: "Clarity first", d: "Every policy is explained in clear sections. No walls of legal jargon." },
      { t: "Personal assistance", d: "A real executive contacts you after each enquiry and supports your application." },
      { t: "Trackable progress", d: "Check your application status anytime using your application ID." },
      { t: "Support that answers", d: "Call, message, or raise a ticket — support hours are clearly published." },
      { t: "Secure by design", d: "Customer data is protected with role-based access and secure storage." },
      { t: "Transparent relationship", d: "Partnerships and regulatory details are disclosed as soon as they are verified." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions customers ask.",
    lead: "Straight answers, before you even ask.",
  },
  support: {
    eyebrow: "Support",
    title: "Talk to a real person.",
    lead: "Questions, applications, or anything else — reach us during working hours and we'll take it from there.",
    call: "Call us",
    callSub: "Monday–Saturday, 9:30 AM – 6:00 PM",
    email: "Email",
    emailSub: "Official email to be published once verified",
    hours: "Working hours",
    hoursSub: "Monday–Saturday 9:30 AM – 6:00 PM · Sunday closed",
    whatsapp: "WhatsApp",
    whatsappSub: "Available on request",
    ticket: "Support ticket",
    ticketSub: "Prefer writing? Raise a ticket — we'll reply.",
    openTicket: "Open a ticket",
    tName: "Your name",
    tEmail: "Email",
    tPhone: "Phone (optional)",
    tSubject: "Subject",
    tDescription: "How can we help?",
    tSubmit: "Submit ticket",
    tSuccess: "Ticket created",
    tSuccessSub: "We've received your ticket and will reply by email.",
    tNote: "With the ticket number you receive, you can follow up by mentioning it in the subject of your email or call.",
    cats: ["General question", "Application status", "Policy question", "Claim support", "Other"],
  },
  footer: {
    tagline: "Policy Aapka. Adda Humara.",
    explore: "Explore",
    categoriesLabel: "Categories",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    aboutPage: "About",
    contact: "Contact",
    verifiedNote: "All information on this website is subject to verification by the PolicyAdda team. No formal insurer partnerships, regulatory registrations, or statistics are claimed unless explicitly stated and verified.",
    rights: "All rights reserved.",
  },
  cta: {
    title: "Not sure where to start?",
    sub: "Tell us what you're looking for and a PolicyAdda executive will guide you — free, with no obligation.",
    primary: "Get assistance",
    secondary: "Read the FAQ",
  },
  detail: {
    about: "About this policy concept",
    benefits: "Key benefits",
    eligibility: "Eligibility",
    coverage: "Coverage",
    exclusions: "Important exclusions",
    documents: "Required documents",
    frequent: "Policy FAQs",
    disclaimer: "Disclaimer:",
    ready: "Ready to explore this cover?",
    readySub: "Submit an enquiry — a PolicyAdda executive will contact you and guide you through the application.",
    applyNow: "Get assistance",
    trustSupport: "Talk to support",
    openSignup: "Open application form",
  },
  apply: {
    title: "Get assistance",
    sub: "Tell us about yourself — a PolicyAdda executive will contact you. No commitment, no obligation.",
    fullName: "Your full name",
    phone: "Phone number",
    phoneHint: "Enter a valid 10-digit mobile number.",
    email: "Email",
    city: "City",
    message: "Anything you'd like us to know",
    msgPlaceholder: "e.g. I drive a 2021 Activa and want to understand my renewal options.",
    submitCta: "Submit enquiry",
    privacyNote: "Your details are used only to respond to this enquiry, and are handled in line with our privacy commitments. A formal Privacy Policy will be published once verified.",
    doneTitle: "Application submitted",
    doneSub: "Note this Application ID — you can check your status anytime on the Track page. A PolicyAdda executive will contact you shortly.",
    yourId: "Your Application ID",
    trackNow: "Track application status",
    nextTitle: "What happens next",
  },
  track: {
    title: "Track your application",
    sub: "Enter the Application ID you received after submitting — e.g. PA-260913-0001 — to see your current status.",
    idInput: "Application ID",
    idPlaceholder: "PA-260913-0001",
    check: "Check status",
    found: "Application found",
    notFound: "No application found with that ID. Double-check and try again, or call us.",
    privacy: "Only your application status is shown here — never personal details.",
    updated: "Last updated",
  },
  verif: {
    note: "Submitting this form is an enquiry, not a purchase. Nothing is confirmed until you speak with a PolicyAdda executive.",
    pendingTitle: "Awaiting verified details",
    pendingBody: "This section will be completed once the PolicyAdda team provides verified information.",
  },
  common: {
    close: "Close",
    open: "Open",
    back: "Back",
    all: "All",
    loading: "Loading…",
    submit: "Submit",
    optional: "optional",
  },
};

export const hi: SiteCopy = {
  nav: {
    home: "होम",
    categories: "बीमा",
    about: "हमारे बारे में",
    how: "कैसे काम करता है",
    support: "सहायता",
    login: "लॉगिन",
    cta: "सहायता लें",
    apply: "आवेदन करें",
  },
  hero: {
    eyebrow: "बीमा सहायता · राँची",
    titleA: "अप्रत्याशित घटनाएँ होती हैं।",
    titleB: "बीमा को भ्रमित करने वाला नहीं होना चाहिए।",
    sub: "PolicyAdda आपको बीमा श्रेणियों और पॉलिसी विकल्पों को सरल भाषा में समझने में मदद करता है — फिर पूछताछ से पॉलिसी तक हर कदम पर आपका मार्गदर्शन करता है। पॉलिसी आपकी, अड्डा हमारा।",
    ctaPrimary: "पॉलिसी देखें",
    ctaSecondary: "हमसे बात करें",
  },
  trust: {
    eyebrow: "PolicyAdda क्यों चुनें",
    title: "बीमा जो आप समझ सकें।",
    lead: "न छिपी शर्तें, न दबाव, न जटिल भाषा की दीवार। हम आपको भ्रम से स्पष्टता तक ले जाते हैं — पेशेवर, पारदर्शी और आपकी गति से।",
    items: [
      { t: "पारदर्शी जानकारी", d: "पॉलिसी को सरल भाषा में स्पष्ट खंडों के साथ समझाया जाता है — लाभ, कवरेज, बहिष्करण और आवश्यक दस्तावेज़।" },
      { t: "वास्तविक मानव सहायता", d: "जब आप आवेदन जमा करते हैं, एक PolicyAdda कार्यकारी आपसे संपर्क करता है और पूरी प्रक्रिया में आपके साथ रहता है।" },
      { t: "स्पष्ट प्रक्रिया", d: "आप हमेशा जानते हैं कि आपका आवेदन कहाँ है, एक ऐसी स्थिति के साथ जिसे आप कभी भी ट्रैक कर सकते हैं।" },
      { t: "सुरक्षित संभाल", d: "आपकी जानकारी केवल आपकी सेवा के लिए उपयोग होती है। आपकी जानकारी तक पहुँच अनुमति-आधारित और सर्वर-सुरक्षित है।" },
    ],
  },
  categories: {
    eyebrow: "बीमा श्रेणियाँ",
    title: "जो आपको चाहिए उससे शुरू करें।",
    lead: "कोई श्रेणी देखें, अपने विकल्प समझें, और हमसे कुछ भी पूछें।",
    view: "पॉलिसी देखें",
  },
  how: {
    eyebrow: "कैसे काम करता है",
    title: "भ्रम से स्पष्टता तक, चरण दर चरण।",
    lead: "एक सरल, पारदर्शी यात्रा — बिना किसी आश्चर्य के।",
    steps: [
      { t: "एक्सप्लोर करें", d: "बीमा श्रेणियाँ देखें और अपने विकल्पों को सरल भाषा में समझें।" },
      { t: "समझें", d: "स्पष्ट, संरचित पॉलिसी जानकारी पढ़ें — लाभ, कवरेज, बहिष्करण।" },
      { t: "आवेदन जमा करें", d: "एक छोटा फ़ॉर्म भरें या दिए गए आवेदन लिंक का उपयोग करें। कोई प्रतिबद्धता नहीं।" },
      { t: "संपर्क प्राप्त करें", d: "एक PolicyAdda कार्यकारी आपकी व्यक्तिगत सहायता के लिए पहुँचता है।" },
      { t: "सहायता प्राप्त करें", d: "पॉलिसी प्रक्रिया में कागजी कार्रवाई से लेकर उत्तरों तक हर कदम पर सहायता।" },
      { t: "अपनी पॉलिसी तक पहुँचें", d: "ग्राहकों को हमारे सुरक्षित पोर्टल के माध्यम से पॉलिसी जानकारी तक पहुँच मिलती है।" },
    ],
  },
  featured: {
    eyebrow: "चुनिंदा पॉलिसी",
    title: "लोकप्रिय पॉलिसी कॉन्सेप्ट।",
    lead: "कुछ कॉन्सेप्ट जिनके बारे में ग्राहक अक्सर पूछते हैं। किसी भी निर्णय से पहले पूरी स्पष्टता।",
    viewAll: "सभी पॉलिसी देखें",
    learnMore: "और जानें",
  },
  why: {
    eyebrow: "PolicyAdda क्यों",
    title: "भरोसे पर आधारित, दबाव पर नहीं।",
    lead: "हम उस सलाहकार की तरह व्यवहार करते हैं जिसकी आपको ज़रूरत थी — जो समझाता है, सहायता करता है और पहुँच में रहता है।",
    items: [
      { t: "पहले स्पष्टता", d: "हर पॉलिसी स्पष्ट खंडों में समझाई जाती है। कानूनी जटिल भाषा की दीवारें नहीं।" },
      { t: "व्यक्तिगत सहायता", d: "हर आवेदन के बाद एक वास्तविक कार्यकारी आपसे संपर्क करता है और आपकी सहायता करता है।" },
      { t: "ट्रैक होने वाली प्रगति", d: "अपने आवेदन आईडी से कभी भी अपनी आवेदन स्थिति जाँचें।" },
      { t: "सहायता जो जवाब देती है", d: "कॉल करें, संदेश भेजें या टिकट दर्ज करें — सहायता समय स्पष्ट रूप से प्रकाशित है।" },
      { t: "सुरक्षा से डिज़ाइन", d: "ग्राहक डेटा भूमिका-आधारित पहुँच और सुरक्षित भंडारण से सुरक्षित है।" },
      { t: "पारदर्शी संबंध", d: "साझेदारी और नियामक विवरण सत्यापित होते ही प्रकट किए जाते हैं।" },
    ],
  },
  faq: {
    eyebrow: "सामान्य प्रश्न",
    title: "ग्राहकों के सवाल।",
    lead: "पूछने से पहले ही सीधे उत्तर।",
  },
  support: {
    eyebrow: "सहायता",
    title: "वास्तविक व्यक्ति से बात करें।",
    lead: "प्रश्न, आवेदन या कुछ और — कार्य घंटों के दौरान हमसे संपर्क करें।",
    call: "हमें कॉल करें",
    callSub: "सोमवार–शनिवार, 9:30 AM – 6:00 PM",
    email: "ईमेल",
    emailSub: "सत्यापन के बाद आधिकारिक ईमेल प्रकाशित होगा",
    hours: "कार्य घंटे",
    hoursSub: "सोमवार–शनिवार 9:30 AM – 6:00 PM · रविवार बंद",
    whatsapp: "व्हाट्सऐप",
    whatsappSub: "अनुरोध पर उपलब्ध",
    ticket: "सपोर्ट टिकट",
    ticketSub: "लिखना पसंद है? टिकट दर्ज करें — हम जवाब देंगे।",
    openTicket: "टिकट खोलें",
    tName: "आपका नाम",
    tEmail: "ईमेल",
    tPhone: "फ़ोन (वैकल्पिक)",
    tSubject: "विषय",
    tDescription: "हम आपकी कैसे मदद करें?",
    tSubmit: "टिकट जमा करें",
    tSuccess: "टिकट बन गया",
    tSuccessSub: "हमें आपका टिकट मिल गया है और ईमेल द्वारा जवाब देंगे।",
    tNote: "मिले टिकट नंबर के साथ आप अपने ईमेल या कॉल के विषय में उसका उल्लेख करके अनुसरण कर सकते हैं।",
    cats: ["सामान्य प्रश्न", "आवेदन की स्थिति", "पॉलिसी प्रश्न", "क्लेम सहायता", "अन्य"],
  },
  footer: {
    tagline: "पॉलिसी आपकी। अड्डा हमारा।",
    explore: "एक्सप्लोर",
    categoriesLabel: "श्रेणियाँ",
    company: "कंपनी",
    legal: "कानूनी",
    privacy: "गोपनीयता नीति",
    terms: "नियम और शर्तें",
    disclaimer: "अस्वीकरण",
    aboutPage: "हमारे बारे में",
    contact: "संपर्क",
    verifiedNote: "इस वेबसाइट की सभी जानकारी PolicyAdda टीम द्वारा सत्यापन के अधीन है। किसी भी औपचारिक बीमाकर्ता साझेदारी, नियामक पंजीकरण या आँकड़ों का दावा तब तक नहीं किया जाता जब तक स्पष्ट रूप से सत्यापित न हो।",
    rights: "सर्वाधिकार सुरक्षित।",
  },
  cta: {
    title: "कहाँ से शुरू करें, समझ नहीं आ रहा?",
    sub: "हमें बताएं कि आप क्या खोज रहे हैं और एक PolicyAdda कार्यकारी आपका मार्गदर्शन करेगा — निःशुल्क, बिना किसी बाध्यता के।",
    primary: "सहायता लें",
    secondary: "सामान्य प्रश्न पढ़ें",
  },
  detail: {
    about: "इस पॉलिसी कॉन्सेप्ट के बारे में",
    benefits: "मुख्य लाभ",
    eligibility: "पात्रता",
    coverage: "कवरेज",
    exclusions: "महत्वपूर्ण बहिष्करण",
    documents: "आवश्यक दस्तावेज़",
    frequent: "पॉलिसी सामान्य प्रश्न",
    disclaimer: "अस्वीकरण:",
    ready: "इस कवर को जानने के लिए तैयार हैं?",
    readySub: "एक आवेदन जमा करें — एक PolicyAdda कार्यकारी आपसे संपर्क करेगा और आवेदन में आपका मार्गदर्शन करेगा।",
    applyNow: "सहायता लें",
    trustSupport: "सहायता से बात करें",
    openSignup: "आवेदन फॉर्म खोलें",
  },
  apply: {
    title: "सहायता लें",
    sub: "अपने बारे में बताएं — एक PolicyAdda कार्यकारी आपसे संपर्क करेगा। कोई बाध्यता नहीं।",
    fullName: "आपका पूरा नाम",
    phone: "फ़ोन नंबर",
    phoneHint: "मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।",
    email: "ईमेल",
    city: "शहर",
    message: "कुछ जो हमें पता होना चाहिए",
    msgPlaceholder: "जैसे — मैं 2021 एक्टिवा चलाता हूँ और अपने नवीनीकरण विकल्पों को समझना चाहता हूँ।",
    submitCta: "आवेदन जमा करें",
    privacyNote: "आपकी जानकारी केवल इस आवेदन का जवाब देने के लिए उपयोग होती है। सत्यापन के बाद औपचारिक गोपनीयता नीति प्रकाशित की जाएगी।",
    doneTitle: "आवेदन प्रस्तुत",
    doneSub: "इस आवेदन आईडी को नोट कर लें — आप ट्रैक पेज पर कभी भी अपनी स्थिति देख सकते हैं। एक PolicyAdda कार्यकारी जल्द ही आपसे संपर्क करेगा।",
    yourId: "आपकी आवेदन आईडी",
    trackNow: "आवेदन की स्थिति देखें",
    nextTitle: "आगे क्या होता है",
  },
  track: {
    title: "अपना आवेदन ट्रैक करें",
    sub: "आवेदन करने के बाद मिली आवेदन आईडी दर्ज करें — जैसे PA-260913-0001 — अपनी वर्तमान स्थिति देखने के लिए।",
    idInput: "आवेदन आईडी",
    idPlaceholder: "PA-260913-0001",
    check: "स्थिति देखें",
    found: "आवेदन मिला",
    notFound: "उस आईडी से कोई आवेदन नहीं मिला। जाँच कर पुनः प्रयास करें, या हमें कॉल करें।",
    privacy: "यहाँ केवल आपकी आवेदन स्थिति दिखाई जाती है — व्यक्तिगत विवरण कभी नहीं।",
    updated: "अंतिम अपडेट",
  },
  verif: {
    note: "यह फ़ॉर्म जमा करना एक पूछताछ है, खरीद नहीं। PolicyAdda कार्यकारी से बात करने तक कुछ भी पक्का नहीं होता।",
    pendingTitle: "सत्यापित विवरण की प्रतीक्षा",
    pendingBody: "PolicyAdda टीम द्वारा सत्यापित जानकारी मिलने पर यह अनुभाग पूरा किया जाएगा।",
  },
  common: {
    close: "बंद करें",
    open: "खोलें",
    back: "वापस",
    all: "सभी",
    loading: "लोड हो रहा है…",
    submit: "जमा करें",
    optional: "वैकल्पिक",
  },
};