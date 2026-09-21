export type SiteCopy = {
  nav: { home: string; categories: string; about: string; how: string; support: string; cta: string; apply: string; renew: string; partner: string; getQuote: string; viewAll: string };
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
    steps: { t: string; d: string; extra?: string }[];
  };
  featured: { eyebrow: string; title: string; lead: string; viewAll: string; learnMore: string };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { t: string; d: string }[];
  };
  faq: { eyebrow: string; title: string; lead: string };
  home: {
    partnersEyebrow: string;
    partnersTitle: string;
    partnersLead: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsLead: string;
    enquiryEyebrow: string;
    enquiryTitle: string;
    enquiryLead: string;
    enquiryCta: string;
    enquiryNote: string;
  };
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
  claim: {
    eyebrow: string;
    title: string;
    lead: string;
    formCta: string;
    formNote: string;
    thanks: string;
    helpline: string;
    helplineSub: string;
    phoneCta: string;
    whatsappCta: string;
    lifecycleTitle: string;
    lifecycleLead: string;
    steps: { t: string; d: string }[];
  };
  renew: {
    title: string;
    lead: string;
    formCta: string;
    note: string;
    thanks: string;
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
    registered: string;
    infoSharing: string;
    irdai: string;
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
  quickActions: {
    eyebrow: string;
    title: string;
    lead: string;
    renew: string;
    renewSub: string;
    claim: string;
    claimSub: string;
    partner: string;
    partnerSub: string;
  };
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
    cta: "Call Now",
    apply: "Apply",
    renew: "Renew Your Policy",
    partner: "Become a Partner",
    getQuote: "Get a Quote",
    viewAll: "View All Categories",
  },
  hero: {
    eyebrow: "Policy Aapka · Adda Apna",
    titleA: "Insurance made simpler.",
    titleB: "Compare. Choose. Protect.",
    sub: "Policy Adda helps you understand policies, explore coverage, and get assistance — in plain language, with a real person on your side. From motor to health, life to business, we help you find the right cover.",
    ctaPrimary: "Explore Policies",
    ctaSecondary: "Talk to an Expert",
  },
  trust: {
    eyebrow: "Why Policy Adda",
    title: "Why Policy Adda is different.",
    lead: "We do the heavy lifting, so you don't have to.",
    items: [
      { t: "Hassle-Free Claims", d: "When you need help the most, we've got your back. Our dedicated Claims Expert reviews every rejection and handles the case for you." },
      { t: "Competitive Pricing", d: "We source the best premium from the best insurers and bring the savings to you." },
      { t: "Quick Turnaround", d: "With a real-time online dashboard and instant digital renewal, we're your one-stop destination for all insurance needs." },
      { t: "Expert Guidance", d: "Our advisors help you understand policies deeply and match you to the best available policy for your budget." },
      { t: "Customer Friendly", d: "We speak plain language — no jargon walls, no fine-print confusion." },
      { t: "Diverse Portfolio", d: "All insurance products, investments and wealth management solutions under one roof." },
    ],
  },
  categories: {
    eyebrow: "OUR INSURANCE PRODUCTS",
    title: "Protection for every chapter of your life.",
    lead: "Explore a category, understand your options, and ask us anything.",
    view: "Explore",
  },
  how: {
    eyebrow: "How it works",
    title: "From confusion to clarity, step by step.",
    lead: "A simple, transparent journey — no surprises.",
    steps: [
      { t: "Explore", d: "Browse insurance categories and understand your options in plain language.", extra: "Every category links to the policies available within it." },
      { t: "Understand", d: "Read clear, structured policy information — benefits, coverage, exclusions.", extra: "Each policy page explains eligibility, coverage, exclusions, and required documents. Nothing hidden." },
      { t: "Submit enquiry", d: "Fill a short form or use the provided application link. No commitment.", extra: "You receive an Application ID that lets you track your enquiry." },
      { t: "Get contacted", d: "A PolicyAdda executive reaches out to assist you personally.", extra: "Your executive contacts you at the phone number you provided — during working hours." },
      { t: "Receive assistance", d: "Get helped through the policy process, from paperwork to answers.", extra: "We help you with paperwork, questions, and understanding the process." },
      { t: "Access your policy", d: "Customers receive access to their policy information through our secure portal.", extra: "Policy documents and your information are made accessible through a secure customer portal." },
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
    eyebrow: "WHY POLICY ADDA",
    title: "Real people. Real support. Real difference.",
    lead: "Every policy, every renewal and every claim comes with these benefits.",
    items: [
      { t: "One-Stop Comparison & Access", d: "With multiple insurance tie-ups to choose from, we help you compare options and make an informed choice. Transparent, detailed information about policies is available." },
      { t: "Hassle-Free & Fast Claims Support", d: "Get your claims settled quickly and efficiently with our professional and dedicated claims team. You don't have to run from pillar to post — we do the legwork for you." },
      { t: "Instant Digital & Offline Renewals", d: "Renew your policies instantly, online or offline." },
      { t: "Budget-Optimized & Tailored Guidance", d: "Choose coverage that fits your budget and lifestyle." },
      { t: "Bundled Insurance & Financial Support", d: "In addition to insurance, our advisors provide financial planning guidance so you can manage risks and grow your savings simultaneously." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions customers ask.",
    lead: "Straight answers, before you even ask.",
  },
  home: {
    partnersEyebrow: "Our Partners",
    partnersTitle: "Insurers we work with.",
    partnersLead: "Top insurers for your financial security",
    testimonialsEyebrow: "Our Customers Said",
    testimonialsTitle: "What customers say about us.",
    testimonialsLead: "",
    enquiryEyebrow: "Get Free Quote",
    enquiryTitle: "Start with a free quote.",
    enquiryLead: "Fill in a short enquiry form and a PolicyAdda expert will contact you with the best options. No obligation, no commitment.",
    enquiryCta: "Open the enquiry form",
    enquiryNote: "The enquiry Google Form opens in a new tab. Submit button: Get Free Quote.",
  },
  support: {
    eyebrow: "Support",
    title: "Talk to a real person.",
    lead: "Questions, applications, or anything else — reach us during working hours and we'll take it from there.",
    homeTitle: "Questions don't need complicated answers.",
    homeLead: "Whether it's coverage, documents, or a claim query — call us, write to us, or raise a ticket and a real person responds.",
    call: "Call us",
    callSub: "+91-7677888748 · +91-9135870807 · 24×7",
    email: "Email",
    emailSub: "info@policyadda.co.in · sales@policyadda.co.in",
    hours: "Working hours",
    hoursSub: "24×7 — We're always available for you.",
    whatsapp: "WhatsApp",
    whatsappSub: "+91-7677888748",
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
    cats: ["General question", "Application status", "Policy question", "Claim support", "Renewal", "Other"],
  },
  footer: {
    tagline: "Policy Aapka, Adda Apna. Insurance assistance and policy discovery, made clear.",
    explore: "Explore",
    categoriesLabel: "Insurance Products",
    company: "Company",
    legal: "Important Links",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    disclaimer: "Disclaimer",
    aboutPage: "About Us",
    contact: "Contact Us",
    verifiedNote: "Policy Adda acts as an insurance intermediary/broker and facilitates insurance products offered by insurance companies. Policy Adda does not underwrite or issue insurance policies. All product information is based on information received from the respective insurers. IRDAI regulates the insurance sector in India. BEWARE OF SPURIOUS PHONE CALLS AND FRAUDULENT OFFERS: IRDAI and its officials do not engage in activities such as selling insurance policies, announcing bonuses, or soliciting investments of insurance premiums. Members of the public are advised not to share any personal or financial information or make any payments in response to such calls or offers. If you receive any such fraudulent or suspicious phone call, message, or offer, please report the matter to the police immediately.",
    rights: "All rights reserved.",
    registered: "Policy Adda. Registered Office: Z Complex, 1st Floor, Plaza Chowk, Ranchi, Jharkhand- 834001. Telephone no.: +91-7677888748. Email Id: info@policyadda.co.in",
    infoSharing: "Visitors are informed that the information submitted on this website may be shared with insurers for quotation, proposal, policy, claims and complaints. All product information provided on this website is authentic and is based solely on the information received from the respective insurers.",
    irdai: "IRDAI (Insurance Regulatory and Development Authority of India) regulates the insurance sector in India. Its guidelines and regulations help ensure fair practices, transparency, and protection of policyholders' interests.",
  },
  claim: {
    eyebrow: "File New Claim",
    title: "We're here to help when you need it most.",
    lead: "File your claim intimation quickly — our dedicated Claim expert team will contact you and manage the rest.",
    formCta: "Open the claim intimation form",
    formNote: "The claim intimation Google Form opens in a new tab.",
    thanks: "Your Claim intimation has been received! Your dedicated Claim expert will contact you soon.",
    helpline: "Dedicated Claim Helpline",
    helplineSub: "Need instant help? Call our Claim expert now.",
    phoneCta: "Call the Claim expert",
    whatsappCta: "WhatsApp us",
    lifecycleTitle: "The Claim Lifecycle",
    lifecycleLead: "Here's how a claim moves from intimation to settlement — with Policy Adda by your side.",
    steps: [
      { t: "Claim Intimation", d: "Intimate your claim online, by phone or on WhatsApp. Your request is logged instantly with a claim reference." },
      { t: "Surveyor / TPA / Claim Team Assignment", d: "We coordinate with the insurer, surveyor or TPA so your claim is assigned to the right team without delay." },
      { t: "Document Verification", d: "We help you collect and submit the required documents, and follow up to avoid avoidable delays." },
      { t: "Final Approval", d: "The insurer reviews and approves the eligible claim amount in line with the policy terms." },
      { t: "Settlement", d: "Once approved, the payment is processed to your registered account — we stay with you until the end." },
    ],
  },
  renew: {
    title: "Renew Your Policy",
    lead: "Keep your coverage active. Fill in your details — your dedicated expert will contact you to complete the renewal.",
    formCta: "Open the renewal form",
    note: "The renewal form opens in a new tab — without leaving or redirecting this page.",
    thanks: "Thanks for submitting your request. Your dedicated expert will contact you soon.",
  },
  cta: {
    title: "Insurance feels complicated.\nGetting help shouldn\u2019t.",
    sub: "Talk to a PolicyAdda expert today. Clear advice, better choices, true support.",
    primary: "Talk to an Expert",
    secondary: "WhatsApp Us",
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
  quickActions: {
    eyebrow: "Quick Actions",
    title: "Need help with your policy?",
    lead: "Renew an existing policy, file a claim, or partner with us — all in a few clicks.",
    renew: "Renew Your Policy",
    renewSub: "Keep your coverage active. Quick renewal assistance.",
    claim: "File a Claim",
    claimSub: "Need to make a claim? We'll guide you through it.",
    partner: "Become a Partner",
    partnerSub: "Join our network of insurance professionals.",
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
    cta: "कॉल करें",
    apply: "आवेदन करें",
    renew: "पॉलिसी नवीनीकृत करें",
    partner: "पार्टनर बनें",
    getQuote: "कोटेशन प्राप्त करें",
    viewAll: "सभी श्रेणियाँ देखें",
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
    eyebrow: "Policy Adda क्यों",
    title: "Policy Adda क्यों अलग है।",
    lead: "हम भारी काम खुद करते हैं, ताकि आपको न करना पड़े।",
    items: [
      { t: "आसान और तेज़ क्लेम", d: "जब आपको सबसे ज़्यादा ज़रूरत हो, हम आपके साथ हैं। हमारा समर्पित क्लेम एक्सपर्ट हर अस्वीकृति की समीक्षा करता है और आपकी ओर से मामला संभालता है।" },
      { t: "प्रतिस्पर्धी मूल्य", d: "हम सर्वश्रेष्ठ बीमाकर्ताओं से बेहतरीन प्रीमियम प्राप्त करते हैं और बचत आप तक पहुँचाते हैं।" },
      { t: "त्वरित प्रतिक्रिया", d: "रियल-टाइम ऑनलाइन डैशबोर्ड और तुरंत डिजिटल नवीनीकरण के साथ, हम आपके सभी बीमा की ज़रूरतों के लिए एक ही स्थान हैं।" },
      { t: "विशेषज्ञ मार्गदर्शन", d: "हमारे सलाहकार पॉलिसियों को गहराई से समझने में मदद करते हैं और आपके बजट के लिए सबसे उपयुक्त पॉलिसी सुझाते हैं।" },
      { t: "ग्राहक-अनुकूल", d: "हम सरल भाषा बोलते हैं — न जटिल शब्दों की दीवार, न बारीक अक्षरों का भ्रम।" },
      { t: "विविध पोर्टफोलियो", d: "सभी बीमा उत्पाद, निवेश और धन प्रबंधन समाधान — सब एक ही छत के नीचे।" },
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
      { t: "एक्सप्लोर करें", d: "बीमा श्रेणियाँ देखें और अपने विकल्पों को सरल भाषा में समझें।", extra: "हर श्रेणी उसके भीतर उपलब्ध पॉलिसियों से जुड़ी होती है।" },
      { t: "समझें", d: "स्पष्ट, संरचित पॉलिसी जानकारी पढ़ें — लाभ, कवरेज, बहिष्करण।", extra: "हर पॉलिसी पेज पात्रता, कवरेज, बहिष्करण और आवश्यक दस्तावेज़ समझाता है। कुछ भी छिपा नहीं है।" },
      { t: "आवेदन जमा करें", d: "एक छोटा फ़ॉर्म भरें या दिए गए आवेदन लिंक का उपयोग करें। कोई प्रतिबद्धता नहीं।", extra: "आपको एक आवेदन आईडी मिलती है जिससे आप अपने आवेदन को ट्रैक कर सकते हैं।" },
      { t: "संपर्क प्राप्त करें", d: "एक PolicyAdda कार्यकारी आपकी व्यक्तिगत सहायता के लिए पहुँचता है।", extra: "आपका कार्यकारी आपके द्वारा दिए गए फ़ोन नंबर पर — कार्य समय के दौरान संपर्क करता है।" },
      { t: "सहायता प्राप्त करें", d: "पॉलिसी प्रक्रिया में कागजी कार्रवाई से लेकर उत्तरों तक हर कदम पर सहायता।", extra: "हम कागजी कार्रवाई, सवालों और प्रक्रिया को समझने में आपकी मदद करते हैं।" },
      { t: "अपनी पॉलिसी तक पहुँचें", d: "ग्राहकों को हमारे सुरक्षित पोर्टल के माध्यम से पॉलिसी जानकारी तक पहुँच मिलती है।", extra: "पॉलिसी दस्तावेज़ और आपकी जानकारी एक सुरक्षित ग्राहक पोर्टल के माध्यम से सुलभ होती है।" },
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
    eyebrow: "Policy Adda के साथ लाभ",
    title: "Policy Adda से क्या मिलता है।",
    lead: "हर पॉलिसी, हर नवीनीकरण और हर क्लेम के साथ ये लाभ जुड़े हैं।",
    items: [
      { t: "एक-स्टॉप तुलना और पहुँच", d: "कई बीमा साझेदारियों के विकल्पों के साथ, हम विकल्पों की तुलना करने और सही चुनाव में मदद करते हैं। पॉलिसियों की पारदर्शी, विस्तृत जानकारी उपलब्ध है।" },
      { t: "आसान और तेज़ क्लेम सपोर्ट", d: "हमारी पेशेवर और समर्पित क्लेम टीम के साथ आपका क्लेम जल्दी और कुशलता से निपटाया जाता है। भाग-दौड़ आपको नहीं करनी पड़ती — हम करते हैं।" },
      { t: "तुरंत डिजिटल और ऑफ़लाइन नवीनीकरण", d: "अपनी पॉलिसियाँ ऑनलाइन या ऑफ़लाइन, तुरंत नवीनीकृत करें।" },
      { t: "बजट-अनुकूल और अनुकूलित मार्गदर्शन", d: "अपने बजट और जीवनशैली के अनुकूल कवरेज चुनें।" },
      { t: "संयुक्त बीमा और वित्तीय सहायता", d: "बीमा के अलावा, हमारे सलाहकार वित्तीय नियोजन मार्गदर्शन देते हैं ताकि आप जोखिम प्रबंधन और बचत दोनों कर सकें।" },
    ],
  },
  faq: {
    eyebrow: "सामान्य प्रश्न",
    title: "ग्राहकों के सवाल।",
    lead: "पूछने से पहले ही सीधे उत्तर।",
  },
  home: {
    partnersEyebrow: "हमारे साझेदार",
    partnersTitle: "जिन बीमाकर्ताओं के साथ हम काम करते हैं।",
    partnersLead: "आपकी वित्तीय सुरक्षा के लिए शीर्ष बीमाकर्ता",
    testimonialsEyebrow: "हमारे ग्राहकों ने कहा",
    testimonialsTitle: "ग्राहक हमारे बारे में क्या कहते हैं।",
    testimonialsLead: "",
    enquiryEyebrow: "मुफ़्त कोटेशन",
    enquiryTitle: "मुफ़्त कोटेशन से शुरुआत करें।",
    enquiryLead: "एक छोटा आवेदन फ़ॉर्म भरें और एक PolicyAdda एक्सपर्ट सर्वोत्तम विकल्पों के साथ संपर्क करेगा। कोई बाध्यता नहीं।",
    enquiryCta: "आवेदन फ़ॉर्म खोलें",
    enquiryNote: "आवेदन Google फ़ॉर्म नए टैब में खुलेगा। सबमिट बटन: Get Free Quote।",
  },
  support: {
    eyebrow: "सहायता",
    title: "वास्तविक व्यक्ति से बात करें।",
    lead: "प्रश्न, आवेदन या कुछ और — कार्य घंटों के दौरान हमसे संपर्क करें।",
    homeTitle: "सवालों के लिए जटिल जवाबों की ज़रूरत नहीं।",
    homeLead: "कवरेज, दस्तावेज़ या क्लेम से जुड़ा सवाल हो — हमें कॉल करें, लिखें या टिकट बनाएँ, एक वास्तविक व्यक्ति जवाब देगा।",
    call: "हमें कॉल करें",
    callSub: "+91-7677888748 · +91-9135870807 · 24×7",
    email: "ईमेल",
    emailSub: "info@policyadda.co.in · sales@policyadda.co.in",
    hours: "कार्य घंटे",
    hoursSub: "24×7 — हम हमेशा आपके लिए उपलब्ध हैं।",
    whatsapp: "व्हाट्सऐप",
    whatsappSub: "+91-7677888748",
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
    cats: ["सामान्य प्रश्न", "आवेदन की स्थिति", "पॉलिसी प्रश्न", "क्लेम सहायता", "नवीनीकरण", "अन्य"],
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
    verifiedNote: "Policy Adda एक बीमा मध्यस्थ/दलाल के रूप में कार्य करता है और बीमा कंपनियों द्वारा पेश किए गए बीमा उत्पादों की सुविधा प्रदान करता है। Policy Adda बीमा पॉलिसियों को अंडरराइट या जारी नहीं करता है। सभी उत्पाद जानकारी संबंधित बीमा कंपनियों से प्राप्त जानकारी पर आधारित है। IRDAI भारत में बीमा क्षेत्र को नियंत्रित करता है। झूठे फ़ोन कॉल और धोखाधड़ी वाले प्रस्तावों से सावधान रहें: IRDAI और उसके अधिकारी बीमा पॉलिसियां बेचने, बोनस की घोषणा करने या बीमा प्रीमियम के निवेश के प्रस्ताव जैसी गतिविधियों में शामिल नहीं हैं। ऐसे कॉल या प्रस्तावों के जवाब में कोई व्यक्तिगत या वित्तीय जानकारी साझा न करें या भुगतान न करें। ऐसे किसी भी धोखाधड़ी या संदिग्ध फ़ोन कॉल, संदेश या प्रस्ताव प्राप्त होने पर, तुरंत पुलिस में शिकायत दर्ज करें।",
    rights: "सर्वाधिकार सुरक्षित।",
    registered: "Policy Adda. पंजीकृत कार्यालय: Z कॉम्प्लेक्स, पहली मंज़िल, प्लाज़ा चौक, राँची, झारखंड – 834001. टेलीफोन: +91-7677888748. ईमेल: info@policyadda.co.in",
    infoSharing: "आगंतुकों को सूचित किया जाता है कि इस वेबसाइट पर दी गई जानकारी कोटेशन, प्रस्ताव, पॉलिसी, क्लेम और शिकायतों के लिए बीमाकर्ताओं के साथ साझा की जा सकती है। इस वेबसाइट पर दी गई सभी उत्पाद जानकारी प्रामाणिक है और विशेष रूप से संबंधित बीमाकर्ताओं से प्राप्त जानकारी पर आधारित है।",
    irdai: "IRDAI (भारतीय बीमा विनियामक और विकास प्राधिकरण) भारत में बीमा क्षेत्र को विनियमित करता है। इसके दिशानिर्देश और विनियम निष्पक्ष व्यवहार, पारदर्शिता और पॉलिसीधारकों के हितों की सुरक्षा सुनिश्चित करने में मदद करते हैं।",
  },
  claim: {
    eyebrow: "नया क्लेम दायर करें",
    title: "जब आपको सबसे ज़्यादा ज़रूरत हो, हम मदद के लिए यहाँ हैं।",
    lead: "अपनी क्लेम सूचना जल्दी दर्ज करें — हमारी समर्पित क्लेम एक्सपर्ट टीम संपर्क करेगी और आगे की प्रक्रिया संभाल लेगी।",
    formCta: "क्लेम सूचना फ़ॉर्म खोलें",
    formNote: "क्लेम सूचना Google फ़ॉर्म नए टैब में खुलेगा।",
    thanks: "आपकी क्लेम सूचना प्राप्त हो गई है! आपका समर्पित क्लेम एक्सपर्ट जल्द ही संपर्क करेगा।",
    helpline: "समर्पित क्लेम हेल्पलाइन",
    helplineSub: "तुरंत मदद चाहिए? अभी हमारे क्लेम एक्सपर्ट को कॉल करें।",
    phoneCta: "क्लेम एक्सपर्ट को कॉल करें",
    whatsappCta: "व्हाट्सऐप करें",
    lifecycleTitle: "क्लेम प्रक्रिया",
    lifecycleLead: "पॉलिसी अड्डा के साथ क्लेम सूचना से निपटारे तक कैसे आगे बढ़ता है।",
    steps: [
      { t: "क्लेम सूचना", d: "अपना क्लेम ऑनलाइन, फ़ोन या व्हाट्सऐप से सूचित करें। आपका अनुरोध क्लेम संदर्भ के साथ तुरंत दर्ज हो जाता है।" },
      { t: "सर्वेयर / टीपीए / क्लेम टीम असाइनमेंट", d: "हम बीमाकर्ता, सर्वेयर या टीपीए के साथ समन्वय करते हैं ताकि आपका क्लेम सही टीम को बिना देरी सौंपा जाए।" },
      { t: "दस्तावेज़ सत्यापन", d: "हम आवश्यक दस्तावेज़ एकत्र करने और जमा करने में मदद करते हैं, और टाली जा सकने वाली देरी को रोकने के लिए अनुवर्ती करते हैं।" },
      { t: "अंतिम अनुमोदन", d: "बीमाकर्ता पॉलिसी की शर्तों के अनुसार पात्र क्लेम राशि की समीक्षा और अनुमोदन करता है।" },
      { t: "निपटान", d: "अनुमोदित होने के बाद भुगतान आपके पंजीकृत खाते में किया जाता है — हम अंत तक आपके साथ रहते हैं।" },
    ],
  },
  renew: {
    title: "अपनी पॉलिसी नवीनीकृत करें",
    lead: "अपना कवरेज सक्रिय रखें। अपना विवरण भरें — आपका समर्पित एक्सपर्ट नवीनीकरण पूरा करने के लिए संपर्क करेगा।",
    formCta: "नवीनीकरण फ़ॉर्म खोलें",
    note: "नवीनीकरण फ़ॉर्म नए टैब में खुलेगा — इस पृष्ठ को छोड़े या रीडायरेक्ट किए बिना।",
    thanks: "आपके अनुरोध के लिए धन्यवाद। आपका समर्पित एक्सपर्ट जल्द ही संपर्क करेगा।",
  },
  cta: {
    title: "बीमा जटिल लगता है।\nमदद लेना आसान होना चाहिए।",
    sub: "आज ही PolicyAdda एक्सपर्ट से बात करें। स्पष्ट सलाह, बेहतर विकल्प, सच्चा सहयोग।",
    primary: "एक्सपर्ट से बात करें",
    secondary: "WhatsApp करें",
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
  quickActions: {
    eyebrow: "त्वरित कार्य",
    title: "अपनी पॉलिसी में सहायता चाहिए?",
    lead: "मौजूदा पॉलिसी का नवीनीकरण करें, दावा दायर करें, या हमसे जुड़ें — बस कुछ क्लिक में।",
    renew: "अपनी पॉलिसी नवीनीकृत करें",
    renewSub: "अपना कवरेज सक्रिय रखें। त्वरित नवीनीकरण सहायता।",
    claim: "दावा दायर करें",
    claimSub: "दावा करना है? हम आपका मार्गदर्शन करेंगे।",
    partner: "पार्टनर बनें",
    partnerSub: "हमारे बीमा पेशेवरों के नेटवर्क से जुड़ें।",
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