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
      L("Motor Insurance", "मोटर बीमा", "/policies/motor"),
      L("Health Insurance", "स्वास्थ्य बीमा", "/policies/health"),
      L("Life Insurance", "जीवन बीमा", "/policies/life"),
      L("Business Insurance", "व्यावसायिक बीमा", "/policies/business"),
      L("Travel Insurance", "यात्रा बीमा", "/policies/travel"),
      L("Property Insurance", "संपत्ति बीमा", "/policies/property"),
    ],
  },
  {
    title: { en: "Company", hi: "कंपनी" },
    links: [
      L("About Us", "हमारे बारे में", "/about"),
      L("Get Support", "सहायता लें", "/support"),
      L("File a Claim", "दावा दायर करें", "/claim"),
      L("Become a Partner", "साझीदार बनें", siteConfig.forms?.partner ?? "/support", true),
      L("Legal & Privacy Policies", "कानूनी और गोपनीयता नीतियाँ", "/privacy"),
    ],
  },
];

export function footerCopyright(): string {
  return `© Copyright ${new Date().getFullYear()} PolicyAdda.co.in`;
}

export function pickFooterLabel(l: { en: string; hi: string }, locale: Locale): string {
  return locale === "hi" ? l.hi : l.en;
}
