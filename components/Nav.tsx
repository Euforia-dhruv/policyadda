"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";

export default function Nav({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const isHome = pathname === "/";

  return (
    <>
      <header className={`nav ${isHome && !scrolled ? "nav--transparent" : ""} ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <PolicyAddaBrand variant="full" />

          <nav className="nav-links" aria-label="Primary">
            <a href="/policies" aria-current={isActive("/policies") ? "page" : undefined}>{copy.nav.categories}</a>
            <a href="/about" aria-current={isActive("/about") ? "page" : undefined}>{copy.nav.about}</a>
            <a href="/how-it-works" aria-current={isActive("/how-it-works") ? "page" : undefined}>{copy.nav.how}</a>
            <a href="/support" aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <a href={siteConfig.forms?.enquiry ?? "/support"} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm nav-cta">
              {copy.nav.cta}
            </a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel wrap ${open ? "open" : ""}`}>
        <a href="/" onClick={() => setOpen(false)} aria-current={isActive("/") ? "page" : undefined}>{copy.nav.home}</a>
        <a href="/policies" onClick={() => setOpen(false)} aria-current={isActive("/policies") ? "page" : undefined}>{copy.nav.categories}</a>
        <a href="/about" onClick={() => setOpen(false)} aria-current={isActive("/about") ? "page" : undefined}>{copy.nav.about}</a>
        <a href="/how-it-works" onClick={() => setOpen(false)} aria-current={isActive("/how-it-works") ? "page" : undefined}>{copy.nav.how}</a>
        <a href="/support" onClick={() => setOpen(false)} aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
        <a href={siteConfig.forms?.enquiry ?? "/support"} target="_blank" rel="noreferrer" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
          {copy.nav.cta}
        </a>
      </div>
    </>
  );
}
