/**
 * Shared domain types for PolicyAdda.
 */

export type Locale = "en" | "hi";

/* ---------------- Categories & Policies ---------------- */

export interface PolicyCategory {
  id: string;
  slug: string;
  name: { en: string; hi: string };
  short: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: string;
  sort: number;
  isActive: boolean;
}

export interface PolicyFaq {
  q: { en: string; hi: string };
  a: { en: string; hi: string };
}

export interface PolicyDocument {
  label: { en: string; hi: string };
  optional?: boolean;
}

export interface Policy {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  /** Optional provider line. Never implies official partnership. */
  providerNote: { en: string; hi: string };
  shortDescription: { en: string; hi: string };
  fullDescription: { en: string; hi: string };
  keyBenefits: { en: string[]; hi: string[] };
  eligibility: { en: string[]; hi: string[] };
  coverage: { en: string[]; hi: string[] };
  exclusions: { en: string[]; hi: string[] };
  documents: PolicyDocument[];
  faqs: PolicyFaq[];
  disclaimer: { en: string; hi: string };
  /** When set, CTA opens this Google Form. Else internal application form. */
  googleFormUrl?: string;
  isActive: boolean;
  isFeatured: boolean;
}

/* ---------------- Verified business identity ---------------- */

export interface BusinessContact {
  phone: { display: string; tel: string };
  phoneSecondary?: { display: string; tel: string };
  whatsapp?: string;
  email?: string;
  salesEmail?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  address?: { en: string; hi: string };
  hours?: { en: string[]; hi: string[] };
}

export interface SiteConfig {
  brand: string;
  tagline: { en: string; hi: string };
  slogan: { en: string; hi: string };
  contact: BusinessContact;
  partners?: string[];
  forms?: {
    enquiry?: string;
    renew?: string;
    claim?: string;
    partner?: string;
    careers?: string;
  };
  /** Legal status of displayed info — for the disclaimer footer line. */
  verificationNote: string;
}