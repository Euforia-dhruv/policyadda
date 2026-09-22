"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { Phone, Shield, Car, Heart, Briefcase, Home, Plane, ChevronRight } from "@/lib/icons";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";
import RenewPopout from "./RenewPopout";

const MEGA_ITEMS = [
  { slug: "health", label: "Health Insurance", desc: "For you and your family.", img: "/assets/cards/Health Insurance.png", icon: <Heart size={20} /> },
  { slug: "motor", label: "Motor Insurance", desc: "A safer ride, every time.", img: "/assets/cards/Motor Insurance.png", icon: <Car size={20} /> },
  { slug: "life", label: "Life Insurance", desc: "Because tomorrow matters.", img: "/assets/cards/Life Insurance.png", icon: <Shield size={20} /> },
  { slug: "business", label: "Business Insurance", desc: "Security for your growth.", img: "/assets/cards/Business Insurance.png", icon: <Briefcase size={20} /> },
  { slug: "property", label: "Property & Home Insurance", desc: "Your space, our protection.", img: "/assets/cards/Property & Home Insurance.png", icon: <Home size={20} /> },
  { slug: "travel", label: "Travel Insurance", desc: "Go further, worry less.", img: "/assets/cards/Travel Insurance.png", icon: <Plane size={20} /> },
];

const ENQUIRY_URL = siteConfig.forms?.enquiry ?? "#";

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
  const [showMega, setShowMega] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

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
              </a>
            </span>
            <button type="button" className="nav-link-btn" onClick={() => setShowRenew(true)}>{copy.nav.renew}</button>
            <a href="/support" aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
            <a href={siteConfig.forms?.partner ?? "#"} target="_blank" rel="noreferrer">{copy.nav.partner}</a>
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

      {/* Mega Menu Drawer */}
      <div
        className={`mega-drawer ${showMega ? "mega-drawer--open" : ""}`}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <div className="wrap mega-drawer-inner">
          <div className="mega-drawer-grid">
            {MEGA_ITEMS.map((item) => (
              <a
                key={item.slug}
                href={`/policies/${item.slug}`}
                className="mega-drawer-card"
                onClick={() => setShowMega(false)}
              >
                <div className="mega-drawer-card-img">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={280}
                    height={170}
                    className="mega-drawer-card-photo"
                  />
                </div>
                <div className="mega-drawer-card-body">
                  <div className="mega-drawer-card-icon">{item.icon}</div>
                  <h4 className="mega-drawer-card-title">{item.label}</h4>
                  <p className="mega-drawer-card-desc">{item.desc}</p>
                  <span className="mega-drawer-card-link">
                    {copy.nav.view} <ChevronRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mega-drawer-footer">
            <a href="/policies" className="mega-drawer-footer-link" onClick={() => setShowMega(false)}>
              {copy.nav.viewAll} <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className={`mobile-panel wrap ${open ? "open" : ""}`}>
        <a href="/" onClick={() => setOpen(false)} aria-current={isActive("/") ? "page" : undefined}>{copy.nav.home}</a>
        <a href="/policies" onClick={() => setOpen(false)} aria-current={isActive("/policies") ? "page" : undefined}>{copy.nav.categories}</a>
        <button type="button" className="mobile-link-btn" onClick={() => { setShowRenew(true); setOpen(false); }}>{copy.nav.renew}</button>
        <a href="/support" onClick={() => setOpen(false)} aria-current={isActive("/support") ? "page" : undefined}>{copy.nav.support}</a>
        <a href={siteConfig.forms?.partner ?? "#"} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{copy.nav.partner}</a>
        <a href="/about" onClick={() => setOpen(false)} aria-current={isActive("/about") ? "page" : undefined}>{copy.nav.about}</a>
        <a href={`tel:${siteConfig.contact.phone.tel}`} className="btn btn-accent mt-2" onClick={() => setOpen(false)}>
          <Phone size={16} className="inline-block align-[-3px] mr-1" />
          {copy.nav.cta}
        </a>
      </div>

      {showRenew && <RenewPopout onClose={() => setShowRenew(false)} locale={locale} copy={copy} variant="card" />}
    </>
  );
}
