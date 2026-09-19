import type { Locale } from "@/lib/types";
import { siteConfig } from "@/content/config";

export type ChatAction = {
  label: { en: string; hi: string };
  href: string;
  external?: boolean;
};

export type ChatReply = {
  text: { en: string; hi: string };
  link?: { label: { en: string; hi: string }; href: string };
  actions?: ChatAction[];
  disclaimer?: boolean;
};

export type ChatIntent = {
  id: string;
  keywords: string[];
  reply: ChatReply;
};

export const welcomeMessage: { en: string; hi: string } = {
  en: "👋 Hi! Welcome to Policy Adda. I can help you compare insurance, get a quote, renew your policy, or understand your coverage.\n\nWhat would you like to do today?",
  hi: "👋 नमस्ते! पॉलिसी अड्डा में आपका स्वागत है। मैं बीमा की तुलना, कोटेशन, नवीनीकरण या आपके कवरेज को समझने में आपकी मदद कर सकता हूँ।\n\nआप आज क्या करना चाहेंगे?",
};

export const quickChips: { label: { en: string; hi: string }; intent: string }[] = [
  { label: { en: "🚗 Car Insurance", hi: "🚗 कार बीमा" }, intent: "car" },
  { label: { en: "🏍️ Bike Insurance", hi: "🏍️ बाइक बीमा" }, intent: "bike" },
  { label: { en: "🏥 Health Insurance", hi: "🏥 स्वास्थ्य बीमा" }, intent: "health" },
  { label: { en: "🏠 Home Insurance", hi: "🏠 होम बीमा" }, intent: "home" },
  { label: { en: "❤️ Life Insurance", hi: "❤️ लाइफ़ बीमा" }, intent: "life" },
  { label: { en: "🏢 Business Insurance", hi: "🏢 बिज़नेस बीमा" }, intent: "business" },
  { label: { en: "🔄 Renew My Policy", hi: "🔄 मेरी पॉलिसी नवीनीकृत करें" }, intent: "renew" },
  { label: { en: "🆘 Claim Support", hi: "🆘 क्लेम सहायता" }, intent: "claim" },
  { label: { en: "📞 Talk to an Expert", hi: "📞 एक्सपर्ट से बात करें" }, intent: "expert" },
];

const expertActions: ChatAction[] = [
  { label: { en: "📞 Call Me", hi: "📞 मुझे कॉल करें" }, href: `tel:${siteConfig.contact.phone.tel}` },
  { label: { en: "💬 WhatsApp Me", hi: "💬 व्हाट्सऐप करें" }, href: siteConfig.contact.whatsapp ?? "#", external: true },
  { label: { en: "📅 Schedule a Call", hi: "📅 कॉल का समय तय करें" }, href: siteConfig.forms?.enquiry ?? "#", external: true },
];

export const intents: ChatIntent[] = [
  {
    id: "car",
    keywords: ["car", "four wheeler", "vehicles", "four-wheeler", "icar", "carbee"],
    reply: {
      text: {
        en: "🚗 I can help with Car Insurance — new cover, renewal, comparing quotes, add-ons, or claim assistance. You can review the full Car Insurance coverage here, and our team will get you the best premium from leading insurers.",
        hi: "🚗 मैं कार बीमा में मदद कर सकता हूँ — नया कवर, नवीनीकरण, कोटेशन तुलना, ऐड-ऑन या क्लेम सहायता। आप कार बीमा की पूरी जानकारी यहाँ देख सकते हैं, और हमारी टीम आपको सर्वश्रेष्ठ बीमाकर्ताओं से बेहतरीन प्रीमियम दिलाएगी।",
      },
      link: { label: { en: "View Car Insurance", hi: "कार बीमा देखें" }, href: "/policies/motor/car-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "bike",
    keywords: ["bike", "two wheeler", "two-wheeler", "scooter", "motorcycle", "aktiv"],
    reply: {
      text: {
        en: "🏍️ For Bike or Two-Wheeler Insurance, I can help you compare comprehensive or third-party covers and understand add-ons. Here's everything you need to know.",
        hi: "🏍️ बाइक या दोपहिया बीमा के लिए, मैं कंप्रीहेंसिव या थर्ड-पार्टी कवर की तुलना और ऐड-ऑन समझने में मदद कर सकता हूँ। आपके लिए सारी जानकारी यहाँ है।",
      },
      link: { label: { en: "View Bike Insurance", hi: "बाइक बीमा देखें" }, href: "/policies/motor/bike-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "health",
    keywords: ["health", "mediclaim", "hospital", "sickness", "medical", "treatment", "family floater", "senior"],
    reply: {
      text: {
        en: "🏥 For Health Insurance, I can help with individual, family floater, senior citizen and group mediclaim options — including cashless hospital coverage. Here are the details and a quick way to get a tailored quote.",
        hi: "🏥 स्वास्थ्य बीमा के लिए, मैं व्यक्तिगत, फैमिली फ्लोटर, सीनियर सिटीज़न और ग्रुप मेडिक्लेम विकल्पों — कैशलेस अस्पताल कवरेज सहित — में मदद कर सकता हूँ। यहाँ विवरण और तेज़ कोटेशन का विकल्प है।",
      },
      link: { label: { en: "View Health Insurance", hi: "स्वास्थ्य बीमा देखें" }, href: "/policies/health/health-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "home",
    keywords: ["home", "house", "property", "fire", "burglary", "renter", "loan", "flat"],
    reply: {
      text: {
        en: "🏠 For Home / Property Insurance, we cover property, home and home-loan protection as well as fire & burglary. You can explore the details below — our team can also guide you on sum insured and coverage.",
        hi: "🏠 होम / संपत्ति बीमा के लिए, हम संपत्ति, होम और होम-लोन सुरक्षा के साथ अग्नि और चोरी कवर देते हैं। नीचे विवरण देखें — हमारी टीम बीमित राशि और कवरेज पर मार्गदर्शन भी कर सकती है।",
      },
      link: { label: { en: "View Property & Home Insurance", hi: "संपत्ति और होम बीमा देखें" }, href: "/policies/property/property-and-home-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "life",
    keywords: ["life", "term", "kid", "child", "retirement", "pension", "investment", "saving", "ulip", "maturity"],
    reply: {
      text: {
        en: "❤️ For Life Insurance, we help with term plans, child, retirement and investment-linked options. Protecting your family is our priority — let's find the right sum assured for you.",
        hi: "❤️ लाइफ़ बीमा के लिए, हम टर्म प्लान, चाइल्ड, रिटायरमेंट और निवेश-लिंक्ड विकल्पों में मदद करते हैं। आपके परिवार की सुरक्षा हमारी प्राथमिकता है — आइए आपके लिए सही बीमा राशि चुनें।",
      },
      link: { label: { en: "View Life Insurance", hi: "लाइफ़ बीमा देखें" }, href: "/policies/life/life-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "business",
    keywords: ["business", "sme", "company", "cyber", "liability", "workmen", "contractor", "surety", "indemnity", "marine", "cargo", "fleet"],
    reply: {
      text: {
        en: "🏢 For Business & SME Insurance, we cover business liability, cyber, contractors all risk, workmen's compensation, marine & cargo, surety bonds and more. Tell us your requirement and we'll arrange a tailored proposal.",
        hi: "🏢 बिज़नेस और एसएमई बीमा के लिए, हम बिज़नेस लायबिलिटी, साइबर, कॉन्ट्रैक्टर्स ऑल रिस्क, वर्कमैन कंपेंशेशन, मरीन और कार्गो, सरकारी जमानत बॉन्ड और बहुत कुछ कवर करते हैं। अपनी ज़रूरत बताएँ, हम अनुकूलित प्रस्ताव दिलवाएँगे।",
      },
      link: { label: { en: "View Business Insurance", hi: "बिज़नेस बीमा देखें" }, href: "/policies/business/business-liability-insurance" },
      actions: [{ label: { en: "Talk to a business expert", hi: "बिज़नेस एक्सपर्ट से बात करें" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "travel",
    keywords: ["travel", "trip", "tour", "visa", "abroad", "flight"],
    reply: {
      text: {
        en: "✈️ For Travel Insurance, we help with domestic and international coverage — medical emergencies, trip delays and lost baggage. Explore the details below.",
        hi: "✈️ यात्रा बीमा के लिए, हम घरेलू और अंतर्राष्ट्रीय कवरेज में मदद करते हैं — मेडिकल इमरजेंसी, ट्रिप में देरी और खोया सामान। नीचे विवरण देखें।",
      },
      link: { label: { en: "View Travel Insurance", hi: "यात्रा बीमा देखें" }, href: "/policies/travel/travel-insurance" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "renew",
    keywords: ["renew", "renewal", "expiry", "expired", "nahin karwai", "freshen"],
    reply: {
      text: {
        en: "🔄 Renewing is simple. Share your policy number / vehicle or policy details and we'll check whether you can retain your No-Claim Bonus (NCB) and whether your current coverage is adequate. You can also renew instantly through our quick renewal form.",
        hi: "🔄 नवीनीकरण बहुत आसान है। अपनी पॉलिसी नंबर / वाहन या पॉलिसी विवरण साझा करें और हम जाँचेंगे कि आप अपना No-Claim Bonus (NCB) बरकरार रख सकते हैं या नहीं और आपका वर्तमान कवरेज पर्याप्त है या नहीं। आप हमारे क्विक रिन्यूअल फॉर्म से तुरंत नवीनीकरण भी कर सकते हैं।",
      },
      link: { label: { en: "Renew my policy", hi: "अपनी पॉलिसी नवीनीकृत करें" }, href: "/support" },
      actions: [{ label: { en: "Open renewal form", hi: "नवीनीकरण फ़ॉर्म खोलें" }, href: siteConfig.forms?.renew ?? "#", external: true }],
    },
  },
  {
    id: "claim",
    keywords: ["claim", "insurance claim", "kala", "sarkaari", "accident", "damage", "claim status"],
    reply: {
      text: {
        en: "🆘 I'm here to help with your claim. We support Motor, Health, Property and Life claims — from intimation to settlement. Please note: I cannot promise claim approval or settlement; that is decided by the insurer as per policy terms. Let's understand the next steps together, and we'll connect you with our Claim expert.",
        hi: "🆘 मैं आपके क्लेम में मदद के लिए यहाँ हूँ। हम मोटर, हेल्थ, प्रॉपर्टी और लाइफ़ क्लेम में सहायता करते हैं — सूचना से निपटारे तक। कृपया ध्यान दें: मैं क्लेम अनुमोदन या निपटान का वादा नहीं कर सकता; यह निर्णय बीमाकर्ता पॉलिसी शर्तों के अनुसार करता है। आइए अगले कदम समझें, और हम आपको हमारे क्लेम एक्सपर्ट से जोड़ेंगे।",
      },
      link: { label: { en: "File / track a claim", hi: "क्लेम दायर / ट्रैक करें" }, href: "/claim" },
      actions: [
        { label: { en: "Open claim form", hi: "क्लेम फ़ॉर्म खोलें" }, href: siteConfig.forms?.claim ?? "#", external: true },
        { label: { en: "📞 Claim helpline", hi: "📞 क्लेम हेल्पलाइन" }, href: `tel:${siteConfig.contact.phone.tel}` },
      ],
      disclaimer: true,
    },
  },
  {
    id: "quote",
    keywords: ["quote", "premium", "price", "cost", "compare", "quotation", "best premium", "lowest"],
    reply: {
      text: {
        en: "📊 I'd love to arrange a personalised quotation for you. Tell me which product you need (motor, health, life, business, property or travel), and where should I send the quotation? You can also start with the enquiry form.",
        hi: "📊 मैं आपके लिए एक व्यक्तिगत कोटेशन तैयार करना चाहूँगा। बताइए आपको कौन-सा उत्पाद चाहिए (मोटर, हेल्थ, लाइफ़, बिज़नेस, प्रॉपर्टी या ट्रैवल), और कोटेशन कहाँ भेजूँ? आप आवेदन फ़ॉर्म से भी शुरू कर सकते हैं।",
      },
      link: { label: { en: "Explore all policies", hi: "सभी पॉलिसी देखें" }, href: "/policies" },
      actions: [{ label: { en: "Get a quote", hi: "कोटेशन पाएँ" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "document",
    keywords: ["document", "paper", "kagaz", "kyc", "photograph", "required"],
    reply: {
      text: {
        en: "📄 Documents usually needed are your ID proof (Aadhaar/PAN), address proof, photographs, vehicle registration (for motor) or existing policy papers (for renewal/claims). The exact list depends on the product and type of service — please open the relevant policy page and our team will confirm what applies to you.",
        hi: "📄 आमतौर पर ज़रूरी दस्तावेज़ हैं — पहचान प्रमाण (आधार/पैन), पता प्रमाण, फ़ोटो, वाहन पंजीकरण (मोटर के लिए) या मौजूदा पॉलिसी कागज़ (नवीनीकरण/क्लेम के लिए)। सटीक सूची उत्पाद और सेवा पर निर्भर करती है — संबंधित पॉलिसी पेज खोलें और हमारी टीम पुष्टि कर देगी।",
      },
      link: { label: { en: "Browse policies", hi: "पॉलिसी देखें" }, href: "/policies" },
    },
  },
  {
    id: "partner",
    keywords: ["partner", "agent", "broker", "tie-up", "empanel", "grow"],
    reply: {
      text: {
        en: "🤝 Great to hear you're interested in partnering with Policy Adda! Fill in the partner form and our team will reach out to discuss the opportunity.",
        hi: "🤝 पॉलिसी अड्डा के साथ साझेदारी में रुचि लेने के लिए धन्यवाद! साझेदार फ़ॉर्म भरें और हमारी टीम मौके पर चर्चा के लिए संपर्क करेगी।",
      },
      actions: [{ label: { en: "Become a partner", hi: "साझीदार बनें" }, href: siteConfig.forms?.partner ?? "#", external: true }],
    },
  },
  {
    id: "hello",
    keywords: ["hi", "hello", "hey", "namaste", "good morning", "good evening", "hii"],
    reply: {
      text: welcomeMessage,
      actions: [{ label: { en: "Talk to an expert", hi: "एक्सपर्ट से बात करें" }, href: siteConfig.forms?.enquiry ?? "#", external: true }],
    },
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "thnx", "shukriya"],
    reply: {
      text: { en: "😊 You're welcome! Is there anything else I can help you with?", hi: "😊 आपका स्वागत है! क्या मैं किसी और चीज़ में आपकी मदद कर सकता हूँ?" },
    },
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "alvida"],
    reply: {
      text: { en: "👋 Thank you for reaching out to Policy Adda. Have a great day!", hi: "👋 पॉलिसी अड्डा से संपर्क करने के लिए धन्यवाद। आपका दिन शुभ हो!" },
    },
  },
  {
    id: "expert",
    keywords: ["expert", "talk", "call", "contact", "advisor", "human", "customer care", "support"],
    reply: {
      text: {
        en: "👨‍💼 Of course! Our insurance experts are available 7 days a week. You can call, WhatsApp, or leave your details for a scheduled callback.",
        hi: "👨‍💼 बिल्कुल! हमारे बीमा एक्सपर्ट सप्ताह के सातों दिन उपलब्ध हैं। आप कॉल कर सकते हैं, व्हाट्सऐप कर सकते हैं, या कॉलबैक के लिए विवरण छोड़ सकते हैं।",
      },
      actions: expertActions,
    },
  },
];

export const fallbackReply: ChatReply = {
  text: {
    en: "🤔 I'm not fully sure about that. I can help with Car, Bike, Health, Home, Life and Business insurance, renewals, claims, documents and getting a quote. Try one of the options below or talk to our expert for anything specific.",
    hi: "🤔 मुझे इसके बारे में पूरा पता नहीं है। मैं कार, बाइक, स्वास्थ्य, होम, लाइफ़ और बिज़नेस बीमा, नवीनीकरण, क्लेम, दस्तावेज़ और कोटेशन में मदद कर सकता हूँ। नीचे दिए विकल्पों में से चुनें या किसी विशेष बात के लिए हमारे एक्सपर्ट से बात करें।",
  },
  link: { label: { en: "Browse all policies", hi: "सभी पॉलिसी देखें" }, href: "/policies" },
  actions: expertActions,
};

export function detectIntent(text: string): ChatIntent { 
  const q = text.toLowerCase().trim();
  const hasDevanagari = /[\u0900-\u097F]/.test(q);
  let best: ChatIntent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    if (intent.id === "hello" || intent.id === "thanks" || intent.id === "bye") {
      if (q.length <= 24) {
        let score = 0;
        for (const kw of intent.keywords) if (q.includes(kw)) score++;
        if (score > bestScore) { bestScore = score; best = intent; }
      }
      continue;
    }
    let score = 0;
    for (const kw of intent.keywords) if (q.includes(kw)) score++;
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  if (best && bestScore > 0) return best;
  return { id: "fallback", keywords: [], reply: fallbackReply };
}

export type LocalizedAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type LocalizedReply = {
  text: string;
  link?: { label: string; href: string };
  actions?: LocalizedAction[];
  disclaimer?: boolean;
};

export function replyForLocale(reply: ChatReply, locale: Locale, hasDevanagari: boolean): LocalizedReply {
  const useHi = hasDevanagari || locale === "hi";
  return {
    text: useHi ? reply.text.hi : reply.text.en,
    link: reply.link ? { href: reply.link.href, label: useHi ? reply.link.label.hi : reply.link.label.en } : undefined,
    actions: reply.actions?.map((a) => ({ href: a.href, external: a.external ?? false, label: useHi ? a.label.hi : a.label.en })),
    disclaimer: reply.disclaimer,
  };
}