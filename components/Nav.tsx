"use client";

import { useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { Phone, Shield, Car, Heart, Briefcase, Home, Plane, ChevronRight, ChevronDown } from "@/lib/icons";
import { getActiveCategories } from "@/content/categories";
import { getPoliciesByCategory } from "@/content/policies";
import { pick } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";
import RenewPopout from "./RenewPopout";
import PartnerPopout from "./PartnerPopout";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  health: <Heart size={18} />,
  motor: <Car size={18} />,
  life: <Shield size={18} />,
  business: <Briefcase size={18} />,
  property: <Home size={18} />,
  travel: <Plane size={18} />,
};

const CATEGORY_ORDER = ["health", "motor", "life", "business", "property", "travel"];

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
  const [showPartner, setShowPartner] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [activeCat, setActiveCat] = useState("health");
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  const megaCats = useMemo(() => {
    const cats = getActiveCategories();
    const ordered = CATEGORY_ORDER
      .map((slug) => cats.find((c) => c.slug === slug))
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
    const rest = cats.filter((c) => !CATEGORY_ORDER.includes(c.slug));
    return [...ordered, ...rest].map((cat) => ({
      cat,
      subs: getPoliciesByCategory(cat.slug),
    }));
  }, []);

  useEffect(() => {
    if (megaCats.length > 0 && !megaCats.some((m) => m.cat.slug === activeCat)) {
      setActiveCat(megaCats[0].cat.slug);
    }
  }, [megaCats, activeCat]);

  const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setShowMega(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setShowMega(false), 150);
  };

  const isHome = pathname === "/";
  const activeEntry = megaCats.find((m) => m.cat.slug === activeCat) ?? megaCats[0];
  const mobileInsurance = megaCats;

  return (
    <>
      <header className={`nav ${isHome && !scrolled ? "nav--transparent" : ""} ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <PolicyAddaBrand variant="full" />

          <nav className="nav-links" aria-label="Primary">
            <span
              className="nav-mega-trigger"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <a
                href="/policies"
                aria-current={isActive("/policies") ? "page" : undefined}
                onClick={(e) => { if (showMega) e.preventDefault(); }}
              >
                {copy.nav.categories}
                <ChevronDown size={13} className="nav-chevron" />
              </a>
              <div className={`mega-drawer ${showMega ? "mega-drawer--open" : ""}`}>
                <div className="mega-drawer-inner">
                  <div className="mega-drawer-layout">
                    <div className="mega-drawer-cats" role="list">
                      {megaCats.map(({ cat }) => (
                        <a
                          key={cat.slug}
                          href={`/policies/${cat.slug}`}
                          className={`mega-drawer-card ${activeCat === cat.slug ? "is-active" : ""}`}
                          onMouseEnter={() => setActiveCat(cat.slug)}
                          onFocus={() => setActiveCat(cat.slug)}
                          onClick={() => setShowMega(false)}
                        >
                          <div className="mega-drawer-card-icon">
                            {CATEGORY_ICONS[cat.slug] ?? <Shield size={18} />}
                          </div>
                          <div className="mega-drawer-card-body">
                            <h4 className="mega-drawer-card-title">{pick(locale, cat.name)}</h4>
                          </div>
                          <ChevronRight size={14} className="mega-drawer-card-chevron" />
                        </a>
                      ))}
                    </div>
                    {activeEntry && (
                      <div className="mega-drawer-subs" key={activeEntry.cat.slug}>
                        <div className="mega-drawer-subs-head">
                          <span>{pick(locale, activeEntry.cat.name)}</span>
                          <a
                            href={`/policies/${activeEntry.cat.slug}`}
                            className="mega-drawer-subs-all"
                            onClick={() => setShowMega(false)}
                          >
                            {copy.nav.viewAll}
                          </a>
                        </div>
                        <div className="mega-drawer-subs-list">
                          {activeEntry.subs.map((sub) => (
                            <a
                              key={sub.id}
                              href={`/policies/${activeEntry.cat.slug}/${sub.slug}`}
                              className="mega-drawer-sub-link"
                              onClick={() => setShowMega(false)}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mega-drawer-footer">
                    <a href="/policies" className="mega-drawer-footer-link" onClick={() => setShowMega(false)}>
                      {copy.nav.viewAll} <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </span>
            <button type="button" className="nav-link-btn" onClick={() => setShowRenew(true)}>{copy.nav.renew}</button>
            <a href="/support" aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
            <button type="button" className="nav-link-btn" onClick={() => setShowPartner(true)}>{copy.nav.partner}</button>
            <a href="/about" aria-current={isActive("/about") ? "page" : undefined}>{copy.nav.about}</a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-accent btn-sm nav-cta">
              <Phone size={16} className="inline-block align-[-3px] mr-1" />
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
        <details className="mobile-insurance">
          <summary>{copy.nav.categories}</summary>
          <div className="mobile-insurance-list">
            {mobileInsurance.map(({ cat, subs }) => (
              <div key={cat.slug} className="mobile-insurance-group">
                <a
                  href={`/policies/${cat.slug}`}
                  className="mobile-insurance-cat"
                  onClick={() => setOpen(false)}
                >
                  {CATEGORY_ICONS[cat.slug] ?? <Shield size={16} />}
                  {pick(locale, cat.name)}
                </a>
                {subs.length > 0 && (
                  <div className="mobile-insurance-subs">
                    {subs.map((sub) => (
                      <a
                        key={sub.id}
                        href={`/policies/${cat.slug}/${sub.slug}`}
                        onClick={() => setOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/policies" className="mobile-insurance-all" onClick={() => setOpen(false)}>
              {copy.nav.viewAll} <ChevronRight size={14} />
            </a>
          </div>
        </details>
        <button type="button" className="mobile-link-btn" onClick={() => { setShowRenew(true); setOpen(false); }}>{copy.nav.renew}</button>
        <a href="/support" onClick={() => setOpen(false)} aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
        <button type="button" className="mobile-link-btn" onClick={() => { setShowPartner(true); setOpen(false); }}>{copy.nav.partner}</button>
        <a href="/about" onClick={() => setOpen(false)} aria-current={isActive("/about") ? "page" : undefined}>{copy.nav.about}</a>
        <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-accent mt-2" onClick={() => setOpen(false)}>
          <Phone size={16} className="inline-block align-[-3px] mr-1" />
          {copy.nav.cta}
        </a>
      </div>

      {showRenew && <RenewPopout open onClose={() => setShowRenew(false)} locale={locale} copy={copy} variant="card" />}
      {showPartner && <PartnerPopout open onClose={() => setShowPartner(false)} locale={locale} copy={copy} variant="card" />}
    </>
  );
}
