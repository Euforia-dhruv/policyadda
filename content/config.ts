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
    { name: "Tata AIG General Insurance", logo: "/partners/tata-aig.svg" },
    { name: "AXIS Max Life Insurance", logo: "/partners/axis-max-life.svg" },
    { name: "HDFC ERGO General Insurance", logo: "/partners/hdfc-ergo.png" },
    { name: "SBI General Insurance", logo: "/partners/sbi-general.webp" },
    "Kiwi General Insurance",
    { name: "ICICI Lombard General Insurance" },
    { name: "Bajaj Allianz General Insurance", logo: "/partners/bajaj-allianz.png" },
    { name: "Go Digit General Insurance", logo: "/partners/go-digit.svg" },
    { name: "Zuno General Insurance", logo: "/partners/zuno-general.svg" },
    { name: "Liberty General Insurance", logo: "/partners/liberty-general.png" },
    { name: "IFFCO Tokio General Insurance", logo: "/partners/iffco-tokio.svg" },
    { name: "IndusInd Nippon General Insurance", logo: "/partners/indusind-nippon.png" },
    { name: "Cholamandalam MS General Insurance", logo: "/partners/cholamandalam.svg" },
    { name: "Royal Sundaram General Insurance" },
    "Generali Central Insurance",
    "Universal Sompo General Insurance",
    { name: "Shriram General Insurance", logo: "/partners/shriram-general.jpg" },
    "Magma HDI General Insurance",
    { name: "Navi General Insurance", logo: "/partners/navi.svg" },
    "Raheja QBE General Insurance",
  ],
  forms: {
    enquiry: "https://forms.gle/hN36TAi7iNkcSJgs8",
    renew: "https://forms.gle/hN36TAi7iNkcSJgs8",
    claim: "https://forms.gle/CDxhydkBHkettfsR6",
    partner: "https://forms.gle/AvV683kiDjLdyHBv6",
    careers: "https://forms.gle/epS84cizW4k69DLh6",
  },
  verificationNote:
    "Policy Adda acts as an insurance intermediary/broker and facilitates insurance products offered by insurance companies. Policy Adda does not underwrite or issue insurance policies. All product information is based on information received from the respective insurers. IRDAI regulates the insurance sector in India.",
};