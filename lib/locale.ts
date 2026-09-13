import { cookies } from "next/headers";
import type { Locale } from "@/lib/types";
import { isLocale } from "@/lib/i18n";

/** Server-only locale resolution (reads the language cookie). */
const COOKIE = "policyadda_locale";

export function getLocale(): Locale {
  const c = cookies().get(COOKIE)?.value;
  return isLocale(c) ? c : "en";
}