/**
 * Shared domain types for PolicyAdda.
 * These mirror the PostgreSQL/Supabase schema (see supabase/migrations).
 */

export type Locale = "en" | "hi";

export type EntityStatus = "active" | "inactive";

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

/* ---------------- Application workflow ---------------- */

export type ApplicationStatus =
  | "submitted"
  | "under_review"
  | "assigned"
  | "contacted"
  | "processing"
  | "completed"
  | "rejected"
  | "cancelled"
  | "on_hold";

/** Configurable workflow statuses — administrators can extend this in the DB. */
export interface WorkflowStatus {
  code: ApplicationStatus | string;
  label: { en: string; hi: string };
  description: { en: string; hi: string };
  order: number;
  terminal?: boolean;
}

export interface ApplicationCreateInput {
  policyId: string;
  fullName: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
  source?: string;
  customerId?: string;
}

export interface ApplicationRecord {
  id: string;
  applicationNo: string;
  policyId: string;
  fullName: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
  status: ApplicationStatus | string;
  createdAt: string;
  updatedAt: string;
  customerId?: string;
}

/* ---------------- Support ---------------- */

export interface TicketCreateInput {
  name: string;
  phone?: string;
  email: string;
  category: string;
  subject: string;
  description: string;
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
    renew?: string;
    claim?: string;
    partner?: string;
  };
  /** Legal status of displayed info — for the disclaimer footer line. */
  verificationNote: string;
}