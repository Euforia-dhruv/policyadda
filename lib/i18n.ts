import { en, hi } from "@/content/copy";
import type { Locale } from "@/lib/types";

/** Pure i18n helpers — safe to import anywhere (client or server). */

const dicts = { en, hi } as const;

export const locales: Locale[] = ["en", "hi"];

export function isLocale(v: string | null | undefined): v is Locale {
  return v === "en" || v === "hi";
}

export function localeFromSearch(v: string | null | undefined): Locale {
  return isLocale(v) ? v : "en";
}

export function getCopy(locale: Locale = "en"): typeof en {
  return dicts[locale] ?? en;
}

/** Pick a localized value from an {en,hi} object. */
export function pick<T>(locale: Locale, obj: { en: T; hi: T }): T {
  return obj[locale] ?? obj.en;
}

export function localized(locale: Locale, audio: { en: string; hi: string }) {
  return audio[locale] ?? audio.en;
}

export function setLocaleCookie(locale: Locale): string {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `policyadda_locale=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${secure}`;
}