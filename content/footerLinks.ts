import type { Locale } from "@/lib/types";
import { siteConfig } from "@/content/config";

export type FooterLink = {
  label: { en: string; hi: string };
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: { en: string; hi: string };
  links: FooterLink[];
};

const L = (en: string, hi: string, href: string, external = false): FooterLink => ({
  label: { en, hi },
  href,
  external,
});

export const footerColumns: FooterColumn[] = [
  {
    title: { en: "Insurance Products", hi: "बीमा उत्पाद" },
    links: [
      L("Motor Insurance", "मोटर बीमा", "/policies/motor/motor-insurance"),
      L("Car Insurance", "कार बीमा", "/policies/motor/car-insurance"),
      L("Bike Insurance", "बाइक बीमा", "/policies/motor/bike-insurance"),
      L("Taxi Insurance", "टैक्सी बीमा", "/policies/motor/passenger-carrying-vehicle-insurance"),
      L("Commercial Vehicle Insurance", "वाणिज्यिक वाहन बीमा", "/policies/motor/goods-carrying-vehicle-insurance"),
      L("Travel Insurance", "यात्रा बीमा", "/policies/travel/travel-insurance"),
      L("Fire & Burglary Insurance", "अग्नि और चोरी बीमा", "/policies/business/fire-and-burglary-insurance"),
      L("Property Insurance", "संपत्ति बीमा", "/policies/property/property-and-home-insurance"),
      L("Property / Home Loan Insurance", "संपत्ति / होम लोन बीमा", "/policies/property/home-and-property-loan-insurance"),
      L("Marine Insurance", "समुद्री बीमा", "/policies/business/marine-and-cargo-insurance"),
    ],
  },
  {
    title: { en: "Other Insurance Products", hi: "अन्य बीमा उत्पाद" },
    links: [
      L("Individual Health Insurance", "व्यक्तिगत स्वास्थ्य बीमा", "/policies/health/health-insurance"),
      L("Family Floater Health Insurance", "फैमिली फ्लोटर हेल्थ बीमा", "/policies/health/health-insurance-plans-for-family"),
      L("Senior Citizen Health Insurance", "सीनियर सिटीज़न हेल्थ बीमा", "/policies/health/health-insurance-plans-for-senior-citizens"),
      L("Group Health Insurance", "ग्रुप हेल्थ बीमा", "/policies/business/group-health-insurance"),
      L("MediClaim Policy", "मेडिक्लेम पॉलिसी", "/policies/health/mediclaim-policy"),
      L("Life Insurance", "जीवन बीमा", "/policies/life/life-insurance"),
      L("Term Insurance Plan", "टर्म बीमा योजना", "/policies/life/term-insurance-plans"),
      L("Savings Plan", "बचत योजना", "/policies/life"),
      L("Investment Plan", "निवेश योजना", "/policies/life/investment-plans-with-high-returns"),
      L("Child Plan", "चाइल्ड प्लान", "/policies/life/child-savings-plans"),
      L("Retirement Plan", "रिटायरमेंट प्लान", "/policies/life/pension-plans"),
      L("Group Life Insurance", "ग्रुप लाइफ बीमा", "/policies/life"),
    ],
  },
  {
    title: { en: "Business & Special Products", hi: "व्यावसायिक और विशेष उत्पाद" },
    links: [
      L("Business Liability Insurance", "व्यावसायिक देयता बीमा", "/policies/business/business-liability-insurance"),
      L("Workmen's Compensation Insurance", "वर्कमैन कंपेंशेशन बीमा", "/policies/business/workmens-compensation-insurance"),
      L("Professional Indemnity", "प्रोफेशनल इंडेम्निटी", "/policies/business/professional-indemnity-insurance"),
      L("Doctors Indemnity Insurance", "डॉक्टर्स इंडेम्निटी बीमा", "/policies/business"),
      L("Comprehensive General Liability", "कॉम्प्रिहेंसिव जनरल लायबिलिटी", "/policies/business/comprehensive-general-liability"),
      L("Cyber Insurance", "साइबर बीमा", "/policies/business/cyber-insurance"),
      L("Contractors All Risk", "कॉन्ट्रैक्टर्स ऑल रिस्क", "/policies/business/contractors-all-risk-insurance"),
      L("Surety Bond", "सरकारी जमानत बॉन्ड", "/policies/business/surety-bond-insurance"),
      L("Pet Insurance", "पेट बीमा", "/policies/property/pet-insurance"),
      L("Defence Personnel Insurance", "रक्षा कर्मी बीमा", "/policies"),
      L("Rural & Crop Insurance", "ग्रामीण और फसल बीमा", "/policies"),
    ],
  },
  {
    title: { en: "Company", hi: "कंपनी" },
    links: [
      L("About Us", "हमारे बारे में", "/about"),
      L("Get Support", "सहायता लें", "/support"),
      L("File a Claim", "दावा दायर करें", "/claim"),
      L("Renew Your Policy", "अपनी पॉलिसी नवीनीकृत करें", "/support"),
      L("Become a Partner", "साझीदार बनें", siteConfig.forms?.partner ?? "/support", true),
      L("Legal & Privacy Policies", "कानूनी और गोपनीयता नीतियाँ", "/privacy"),
    ],
  },
  {
    title: { en: "Important Links", hi: "महत्वपूर्ण लिंक" },
    links: [
      L("IRDAI (Insurance Regulatory and Development Authority of India)", "भारतीय बीमा विनियामक और विकास प्राधिकरण", "https://irdai.gov.in", true),
      L("Insurance Ombudsman", "बीमा लोकपाल", "https://www.cioins.co.in", true),
      L("MACT (Motor Accident Claims Tribunals)", "एमएसीटी (मोटर दुर्घटना दावा अधिकरण)", "https://services.ecourts.gov.in", true),
      L("Bima Bharosa", "बीमा भरोसा", "https://bimabharosa.irdai.gov.in", true),
      L("Department of Financial Services", "वित्तीय सेवा विभाग", "https://financialservices.gov.in", true),
      L("General Insurance Council", "जनरल इंश्योरेंस काउंसिल", "https://www.gicouncil.in", true),
      L("Life Insurance Council", "लाइफ इंश्योरेंस काउंसिल", "https://www.licouncil.in", true),
      L("NHA (National Health Authority)", "राष्ट्रीय स्वास्थ्य प्राधिकरण", "https://nha.gov.in", true),
      L("ADBM (Ayushman Bharat Digital Mission)", "आयुष्मान भारत डिजिटल मिशन", "https://abdm.gov.in", true),
      L("PMJAY (Pradhan Mantri Jan Arogya Yojana)", "प्रधानमंत्री जन आरोग्य योजना", "https://pmjay.gov.in", true),
      L("ESIC – Employees' State Insurance", "ईएसआईसी – कर्मचारी राज्य बीमा", "https://www.esic.gov.in", true),
    ],
  },
];

export function footerCopyright(): string {
  return `© Copyright ${new Date().getFullYear()} PolicyAdda.co.in`;
}

export function pickFooterLabel(l: { en: string; hi: string }, locale: Locale): string {
  return locale === "hi" ? l.hi : l.en;
}