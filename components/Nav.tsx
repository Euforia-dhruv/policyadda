"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

export default function Nav({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="/" className="brand" aria-label="PolicyAdda home">
            <div className="brand-mark">P</div>
            PolicyAdda
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="/policies">{copy.nav.categories}</a>
            <a href="/about">{copy.nav.about}</a>
            <a href="/how-it-works">{copy.nav.how}</a>
            <a href="/support">{copy.nav.support}</a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <a href="/login" className="nav-link-login" style={{ fontSize: 14.5, color: "var(--muted)", fontWeight: 550 }}>
              {copy.nav.login}
            </a>
            <a href="/policies" className="btn btn-primary btn-sm nav-cta">
              {copy.nav.cta}
            </a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel wrap ${open ? "open" : ""}`}>
        <a href="/" onClick={() => setOpen(false)}>{copy.nav.home}</a>
        <a href="/policies" onClick={() => setOpen(false)}>{copy.nav.categories}</a>
        <a href="/about" onClick={() => setOpen(false)}>{copy.nav.about}</a>
        <a href="/how-it-works" onClick={() => setOpen(false)}>{copy.nav.how}</a>
        <a href="/support" onClick={() => setOpen(false)}>{copy.nav.support}</a>
        <a href="/login" onClick={() => setOpen(false)}>{copy.nav.login}</a>
        <a href="/policies" className="btn btn-primary" style={{ marginTop: 10 }} onClick={() => setOpen(false)}>
          {copy.nav.cta}
        </a>
      </div>
    </>
  );
}