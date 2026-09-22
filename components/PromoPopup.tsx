"use client";

import { useEffect, useState, useCallback } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { ExternalLink, X, Phone } from "@/lib/icons";

const DISMISS_KEY = "pa-promo-dismissed-at";
const SESSION_KEY = "pa-promo-shown-session";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export default function PromoPopup({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const p = copy.promo;
  const enquiryUrl = siteConfig.forms?.enquiry ?? "#";
  const tel = siteConfig.contact.phone.tel;
  const wa = siteConfig.contact.whatsapp;

  const close = useCallback(() => setOpen(false), []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (path.startsWith("/admin") || path.startsWith("/login") || path.startsWith("/signup")) return;

    let dismissed = false;
    try {
      const ts = Number(localStorage.getItem(DISMISS_KEY) || 0);
      dismissed = ts > 0 && Date.now() - ts < SEVEN_DAYS;
    } catch {
      /* ignore */
    }

    let triggered = false;
    const maybe = () => {
      try {
        if (sessionStorage.getItem(SESSION_KEY)) return;
      } catch {
        /* ignore */
      }
      if (triggered) return;
      triggered = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    };

    const timer = dismissed ? null : setTimeout(maybe, 25000);

    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= 0.6) maybe();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="renew-backdrop" role="dialog" aria-modal="true" aria-label={p.title} onClick={close}>
      <div className="renew-modal card promo-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="renew-close" onClick={close} aria-label={copy.common.close}>
          <X size={18} />
        </button>
        <p className="eyebrow">{p.tagline}</p>
        <h2 className="mb-2">{p.title}</h2>
        <p className="muted-text text-base mb-4">{p.lead}</p>
        <div className="promo-actions">
          <a href={enquiryUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            {p.primary} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
          </a>
          <a href={`tel:${tel}`} className="btn btn-ghost">
            <Phone size={16} className="inline-block align-[-3px] mr-1" />
            {p.secondary}
          </a>
        </div>
        <div className="promo-actions mt-2">
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-ghost">
            {p.whatsapp}
          </a>
        </div>
        <div className="promo-foot">
          <button type="button" className="promo-later" onClick={close}>
            {p.later}
          </button>
          <button type="button" className="promo-dismiss" onClick={dismiss}>
            {p.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
