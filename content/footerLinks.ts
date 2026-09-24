import type { Locale } from "@/lib/types";
import { siteConfig } from "@/content/config";
import { getActiveCategories } from "@/content/categories";
import { getPoliciesByCategory } from "@/content/policies";

export type FooterLink = {
  label: { en: string; hi: string };
  href: string;
  external?: boolean;
  children?: FooterLink[];
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

function insuranceFooterLinks(): FooterLink[] {
  const categoryOrder = ["health", "motor", "life", "business", "property", "travel"];
  const cats = getActiveCategories();
  const ordered = [
    ...categoryOrder
      .map((slug) => cats.find((c) => c.slug === slug))
      .filter((c): c is NonNullable<typeof c> => Boolean(c)),
    ...cats.filter((c) => !categoryOrder.includes(c.slug)),
  ];

  return ordered.map((cat) => ({
    label: cat.name,
    href: `/policies/${cat.slug}`,
    children: getPoliciesByCategory(cat.slug).map((sub) => ({
      label: { en: sub.name, hi: sub.name },
      href: `/policies/${cat.slug}/${sub.slug}`,
    })),
  }));
}

export const footerColumns: FooterColumn[] = [
  {
    title: { en: "Insurance Products", hi: "बीमा उत्पाद" },
    links: insuranceFooterLinks(),
  },
  {
    title: { en: "Company", hi: "कंपनी" },
    links: [
      L("About Us", "हमारे बारे में", "/about"),
      L("Get Support", "सहायता लें", "/support"),
      L("File a Claim", "दावा दायर करें", siteConfig.forms?.claim ?? "/support", true),
      L("Renew Your Policy", "पॉलिसी नवीनीकृत करें", siteConfig.forms?.renew ?? "/support", true),
      L("Become a Partner", "साझीदार बनें", siteConfig.forms?.partner ?? "/support", true),
      L("Careers", "करियर", siteConfig.forms?.careers ?? "/about", true),
    ],
  },
  {
    title: { en: "Important Links", hi: "महत्वपूर्ण लिंक" },
    links: [
      L("IRDAI", "IRDAI", "https://www.irdai.gov.in", true),
      L("Insurance Ombudsman", "बीमा लोकपाल", "https://www.irdai.gov.in/en/Helpful-links/Insurance-Ombudsman", true),
      L("ESIC", "ESIC", "https://www.esic.gov.in", true),
      L("MACT Calculator", "MACT कैलकुलेटर", "https://services.india.gov.in/service/detail?serviceId=26", true),
      L("Legal & Privacy Policies", "कानूनी और गोपनीयता नीतियाँ", "/privacy"),
      L("Cookie Policy", "कुकी नीति", "/cookies"),
      L("Terms & Conditions", "नियम और शर्तें", "/terms"),
    ],
  },
];

export function footerCopyright(): string {
  return `© Copyright ${new Date().getFullYear()} PolicyAdda.co.in`;
}

export function pickFooterLabel(l: { en: string; hi: string }, locale: Locale): string {
  return locale === "hi" ? l.hi : l.en;
}
