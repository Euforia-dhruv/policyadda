import type { SiteConfig } from "@/lib/types";

/**
 * VERIFIED business information from the PolicyAdda client.
 * All data sourced from the client-provided Website.zip.
 */
export const siteConfig: SiteConfig = {
  brand: "Policy Adda",
  tagline: {
    en: "Insurance assistance and policy discovery, made clear.",
    hi: "बीमा सहायता और पॉलिसी की जानकारी, साफ़ और सरल तरीके से।",
  },
  slogan: {
    en: "Policy Aapka, Adda Apna.",
    hi: "पॉलिसी आपकी, अड्डा अपना।",
  },
  contact: {
    phone: { display: "+91-7677888748", tel: "+917677888748" },
    phoneSecondary: { display: "+91-9135870807", tel: "+919135870807" },
    whatsapp: "https://wa.me/917677888748",
    email: "info@policyadda.co.in",
    salesEmail: "sales@policyadda.co.in",
    facebook: "https://www.facebook.com/policyadda",
    instagram: "https://www.instagram.com/policy_adda",
    linkedin: "https://www.linkedin.com/company/policyadda/",
    address: {
      en: "Z Complex, 1st Floor, Plaza Chowk, Ranchi, Jharkhand – 834001",
      hi: "ज़ेड कॉम्प्लेक्स, 1st फ्लोर, प्लाज़ा चौक, राँची, झारखंड – 834001",
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
  partners: [
    "Tata AIG General Insurance",
    "AXIS Max Life Insurance",
    "HDFC ERGO General Insurance",
    "SBI General Insurance",
    "Kiwi General Insurance",
    "ICICI Lombard General Insurance",
    "Bajaj Allianz General Insurance",
    "Go Digit General Insurance",
    "Zuno General Insurance",
    "Liberty General Insurance",
    "IFFCO Tokio General Insurance",
    "IndusInd Nippon General Insurance",
    "Cholamandalam MS General Insurance",
    "Royal Sundaram General Insurance",
    "Generali Central Insurance",
    "Universal Sompo General Insurance",
    "Shriram General Insurance",
    "Magma HDI General Insurance",
    "Navi General Insurance",
    "Raheja QBE General Insurance",
  ],
  verificationNote:
    "Policy Adda acts as an insurance intermediary/broker and facilitates insurance products offered by insurance companies. Policy Adda does not underwrite or issue insurance policies. All product information is based on information received from the respective insurers. IRDAI regulates the insurance sector in India.",
};