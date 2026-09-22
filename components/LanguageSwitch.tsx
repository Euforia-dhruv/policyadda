"use client";

import type { Locale } from "@/lib/types";

export default function LanguageSwitch({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const go = (l: string) => {
    document.cookie = `policyadda_locale=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    fetch(`/api/locale?l=${l}`).finally(() => window.location.reload());
  };

  return (
    <div className={`lang ${className}`} role="group" aria-label="Language">
      <button className={locale === "en" ? "on" : ""} onClick={() => go("en")} aria-pressed={locale === "en"}>
        EN
      </button>
      <button className={locale === "hi" ? "on" : ""} onClick={() => go("hi")} aria-pressed={locale === "hi"}>
        हिं
      </button>
    </div>
  );
}