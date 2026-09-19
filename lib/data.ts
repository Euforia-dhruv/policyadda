import type { Locale } from "@/lib/types";
import { getActiveCategories, getCategoryBySlug } from "@/content/categories";
import {
  getActivePolicies,
  getFeaturedPolicies,
  getPoliciesByCategory,
  getPolicyBySlug,
} from "@/content/policies";
import { faqs } from "@/content/faqs";

/**
 * Read-oriented data access used by server components.
 */

export const data = {
  categories: () => getActiveCategories(),
  categoryBySlug: (slug: string) => getCategoryBySlug(slug),
  policies: () => getActivePolicies(),
  policyBySlug: (slug: string) => getPolicyBySlug(slug),
  policiesByCategory: (slug: string) => getPoliciesByCategory(slug),
  featuredPolicies: () => getFeaturedPolicies(),
  faqs: () => faqs,
};

export type DataApi = typeof data;

/** Ensure a slug exists for locale routing and direct links. */
export function ensureValidSlugPattern(slug: string, kind: "category" | "policy") {
  return /^[a-z0-9-]+$/i.test(slug) && (kind === "category" ? !!getCategoryBySlug(slug) : !!getPolicyBySlug(slug));
}

export * from "@/lib/i18n";
export type { Locale };