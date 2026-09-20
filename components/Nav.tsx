"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { Phone } from "@/lib/icons";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";
import RenewPopout from "./RenewPopout";

export default function Nav({
  copy,
  locale,
}: {
  copy: SiteCopy;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRenew, setShowRenew] = useState(false);
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
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <PolicyAddaBrand variant="full" />

          <nav className="nav-links" aria-label="Primary">
            <a href="/policies" aria-current={isActive("/policies") ? "page" : undefined}>Insurance Products</a>
            <button type="button" className="nav-link-btn" onClick={() => setShowRenew(true)}>Renew Your Policy</button>
            <a href="/support" aria-current={isActive("/support") ? "page" : undefined}>Get Support</a>
            <a href={siteConfig.forms?.partner ?? "#"} target="_blank" rel="noreferrer">Become a Partner</a>
            <a href="/about" aria-current={isActive("/about") ? "page" : undefined}>About Us</a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-accent btn-sm nav-cta">
              <Phone size={16} className="inline-block align-[-3px] mr-1" />
              Call Now
            </a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel wrap ${open ? "open" : ""}`}>
        <a href="/" onClick={() => setOpen(false)} aria-current={isActive("/") ? "page" : undefined}>{copy.nav.home}</a>
        <a href="/policies" onClick={() => setOpen(false)} aria-current={isActive("/policies") ? "page" : undefined}>Insurance Products</a>
        <button type="button" className="mobile-link-btn" onClick={() => { setShowRenew(true); setOpen(false); }}>Renew Your Policy</button>
        <a href="/support" onClick={() => setOpen(false)} aria-current={isActive("/support") ? "page" : undefined}>Get Support</a>
        <a href={siteConfig.forms?.partner ?? "#"} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Become a Partner</a>
        <a href="/about" onClick={() => setOpen(false)} aria-current={isActive("/about") ? "page" : undefined}>About Us</a>
        <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-accent mt-2" onClick={() => setOpen(false)}>
          <Phone size={16} className="inline-block align-[-3px] mr-1" />
          Call Now
        </a>
      </div>

      {showRenew && <RenewPopout onClose={() => setShowRenew(false)} locale={locale} copy={copy} variant="card" />}
    </>
  );
}