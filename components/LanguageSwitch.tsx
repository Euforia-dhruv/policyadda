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
    fetch(`/api/locale?l=${l}`).then(() => window.location.reload());
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