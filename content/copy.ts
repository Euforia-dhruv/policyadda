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
    homeTitle: string;
    homeLead: string;
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
  dashboard: {
    title: string;
    lead: string;
    role: string;
    applications: string;
    noApps: string;
    noAppsCta: string;
    signOut: string;
    status: string;
    submitted: string;
    policy: string;
    idLabel: string;
  };
  auth: {
    signInTitle: string;
    signUpTitle: string;
    loginLead: string;
    signUpLead: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    phoneHint: string;
    city: string;
    signInCta: string;
    signUpCta: string;
    switchToSignUp: string;
    switchToLogin: string;
    success: string;
    policyNote: string;
  };
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
    eyebrow: "Policy Aapka · Adda Apna",
    titleA: "Protection, made easier to understand.",
    titleB: "Insurance clarity, when you need it.",
    sub: "PolicyAdda helps you understand policies, explore coverage, and get assistance the moment you need it — in plain language, with a human on your side.",
    ctaPrimary: "Explore Policies",
    ctaSecondary: "Get Assistance",
  },
  trust: {
    eyebrow: "Why people choose PolicyAdda",
    title: "Insurance should be understandable.",
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
      { t: "Explore", d: "Understand policy categories and basic information in plain language." },
      { t: "Connect", d: "Submit your requirements with a short, no-commitment form." },
      { t: "Get Assistance", d: "A PolicyAdda executive contacts you and guides you personally." },
      { t: "Stay Organized", d: "Access policy details and track progress from your dashboard." },
    ],
  },
  featured: {
    eyebrow: "Education first",
    title: "Know what you're covered for.",
    lead: "Policies explained in clear terms — benefits, coverage, exclusions, and documents — before you decide anything.",
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
    homeTitle: "Questions don't need complicated answers.",
    homeLead: "Whether it's coverage, documents, or a claim query — call us, write to us, or raise a ticket and a real person responds.",
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
    tagline: "Insurance assistance and policy discovery, made clear.",
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
    title: "Your policy. Your place for clarity.",
    sub: "Whatever you're planning next — a policy to choose, a question to answer, or a renewal to review — PolicyAdda is here to guide you.",
    primary: "Get Assistance",
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
  dashboard: {
    title: "Your dashboard",
    lead: "Everything tracked for your account — applications and their current status, scoped to you.",
    role: "Role",
    applications: "Your applications",
    noApps: "You haven't submitted an application yet. Explore policies and get assistance whenever you're ready.",
    noAppsCta: "Explore policies",
    signOut: "Sign out",
    status: "Status",
    submitted: "Submitted",
    policy: "Policy",
    idLabel: "Application ID",
  },
  auth: {
    signInTitle: "Sign in",
    signUpTitle: "Create your account",
    loginLead: "Secure sign-in for customers and PolicyAdda team members.",
    signUpLead: "Create a customer account to see applications you've submitted under your phone number.",
    name: "Full name",
    email: "Email",
    password: "Password",
    phone: "Phone number",
    phoneHint: "Enter a valid 10-digit mobile number.",
    city: "City",
    signInCta: "Sign in",
    signUpCta: "Create account",
    switchToSignUp: "New here? Create an account",
    switchToLogin: "Already have an account? Sign in",
    success: "Account created. Signing you in…",
    policyNote: "Account opening is immediate; you can log in right away.",
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
    eyebrow: "पॉलिसी आपकी · अड्डा अपना",
    titleA: "सुरक्षा, जो समझना आसान हो।",
    titleB: "बीमे की स्पष्टता, जब आपको चाहिए।",
    sub: "PolicyAdda आपको पॉलिसी समझने, कवरेज जानने और ज़रूरत के समय सहायता पाने में मदद करता है — सरल भाषा में, और आपके साथ हमेशा इंसान होता है।",
    ctaPrimary: "पॉलिसी देखें",
    ctaSecondary: "सहायता लें",
  },
  trust: {
    eyebrow: "PolicyAdda क्यों चुनें",
    title: "बीमा समझना आसान होना चाहिए।",
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
      { t: "एक्सप्लोर करें", d: "बीमा श्रेणियाँ देखें और बुनियादी जानकारी सरल भाषा में समझें।" },
      { t: "कनेक्ट हों", d: "छोटे, बिना किसी प्रतिबद्धता वाले फ़ॉर्म से अपनी आवश्यकताएँ जमा करें।" },
      { t: "सहायता लें", d: "एक PolicyAdda कार्यकारी आपसे संपर्क कर आपका व्यक्तिगत मार्गदर्शन करता है।" },
      { t: "व्यवस्थित रहें", d: "पॉलिसी विवरण और प्रगति को अपने डैशबोर्ड से एक्सेस करें।" },
    ],
  },
featured: {
    eyebrow: "पहले शिक्षा",
    title: "जानें कि आप किस चीज़ के लिए कवर हैं।",
    lead: "पॉलिसियाँ स्पष्ट शब्दों में — लाभ, कवरेज, बहिष्करण और दस्तावेज़ — किसी भी फैसले से पहले।",
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
    homeTitle: "सवालों के लिए जटिल जवाबों की ज़रूरत नहीं।",
    homeLead: "कवरेज, दस्तावेज़ या क्लेम से जुड़ा सवाल हो — हमें कॉल करें, लिखें या टिकट बनाएँ, एक वास्तविक व्यक्ति जवाब देगा।",
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
    tagline: "बीमा सहायता और पॉलिसी की जानकारी, साफ़ और सरल तरीके से।",
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
    title: "आपकी पॉलिसी। आपका अड्डा, स्पष्टता के लिए।",
    sub: "आगे जो भी हो — चुनने के लिए पॉलिसी, जवाब देने के लिए सवाल, या रिन्यूअल की समीक्षा — PolicyAdda मार्गदर्शन के लिए यहाँ है।",
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
    found: "आवेदन मिल गया",
    notFound: "इस आईडी के साथ कोई आवेदन नहीं मिला। दोबारा जाँचें और फिर प्रयास करें, या हमें कॉल करें।",
    privacy: "यहाँ केवल आपका आवेदन स्थिति दिखाई जाती है — व्यक्तिगत विवरण कभी नहीं।",
    updated: "अंतिम अपडेट",
  },
  dashboard: {
    title: "आपका डैशबोर्ड",
    lead: "आपके खाते से जुड़ी सारी जानकारी — आवेदन और उनकी वर्तमान स्थिति, केवल आपके लिए।",
    role: "भूमिका",
    applications: "आपके आवेदन",
    noApps: "आपने अभी तक कोई आवेदन नहीं भेजा है। जब चाहें पॉलिसी देखें और सहायता लें।",
    noAppsCta: "पॉलिसी देखें",
    signOut: "साइन आउट करें",
    status: "स्थिति",
    submitted: "सबमिट किया गया",
    policy: "पॉलिसी",
    idLabel: "आवेदन आईडी",
  },
  auth: {
    signInTitle: "साइन इन करें",
    signUpTitle: "खाता बनाएँ",
    loginLead: "ग्राहकों और PolicyAdda टीम सदस्यों के लिए सुरक्षित साइन-इन।",
    signUpLead: "ग्राहक खाता बनाएँ ताकि आप अपने मोबाइल नंबर से सबमिट किए गए आवेदन देख सकें।",
    name: "पूरा नाम",
    email: "ईमेल",
    password: "पासवर्ड",
    phone: "मोबाइल नंबर",
    phoneHint: "10 अंकों का वैध मोबाइल नंबर दर्ज करें।",
    city: "शहर",
    signInCta: "साइन इन करें",
    signUpCta: "खाता बनाएँ",
    switchToSignUp: "नए हैं? खाता बनाएँ",
    switchToLogin: "पहले से खाता है? साइन इन करें",
    success: "खाता बन गया। आपको लॉग इन किया जा रहा है…",
    policyNote: "खाता तुरंत खुल जाता है; आप तुरंत लॉग इन कर सकते हैं।",
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