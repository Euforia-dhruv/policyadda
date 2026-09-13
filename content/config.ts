import type { SiteConfig } from "@/lib/types";

/**
 * VERIFIED business information gathered during research.
 * Only items confirmed across sources are present.
 * Anything unverified lives in docs/BUSINESS-INFO-NEEDED.md and must be
 * confirmed by the PolicyAdda team before being presented as fact.
 */
export const siteConfig: SiteConfig = {
  brand: "PolicyAdda",
  tagline: {
    en: "Insurance assistance and policy discovery, made clear.",
    hi: "बीमा सहायता और पॉलिसी की जानकारी, साफ़ और सरल तरीके से।",
  },
  slogan: {
    en: "Policy Aapka. Adda Humara.",
    hi: "पॉलिसी आपकी। अड्डा हमारा।",
  },
  contact: {
    phone: { display: "+91 76778 88748", tel: "+917677888748" },
    instagram: "@policyadda.co.in",
    address: {
      en: "Z Complex, Near Bata Showroom, Tharpakhna, Plaza Chowk, Ranchi – 834001",
      hi: "ज़ेड कॉम्प्लेक्स, बाटा शोरूम के पास, थड़पखना, प्लाज़ा चौक, राँची – 834001",
    },
    hours: {
      en: [
        "Monday – Saturday: 9:30 AM – 6:00 PM",
        "Sunday: Closed",
      ],
      hi: [
        "सोमवार – शनिवार: 9:30 AM – 6:00 PM",
        "रविवार: बंद",
      ],
    },
  },
  verificationNote:
    "Information on this website is subject to client verification. PolicyAdda does not claim formal insurer partnerships, regulatory registration, or statistics unless explicitly stated and verified.",
};