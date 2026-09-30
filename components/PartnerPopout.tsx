"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { ExternalLink, X } from "@/lib/icons";
import GoogleForm from "@/components/GoogleForm";

export default function PartnerPopout({
  copy,
  locale,
  variant = "btn",
  label,
  open: controlledOpen,
  onClose,
}: {
  copy: SiteCopy;
  locale: Locale;
  variant?: "btn" | "card";
  label?: string;
  open?: boolean;
  onClose?: () => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const close = useMemo(() => onClose ?? (() => setInternalOpen(false)), [onClose]);
  const p = copy.partnerPopout;

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  }, [close]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onKey]);

  return (
    <>
      {variant === "card" ? (
        <button type="button" className="card support-card renew-card" onClick={() => close()}>
          <div className="ico"><ExternalLink size={22} /></div>
          <h3>{label ?? copy.quickActions.partner}</h3>
          <p>{p.tagline}</p>
        </button>
      ) : (
        <button type="button" className="btn btn-ghost" onClick={() => close()}>
          {label ?? copy.nav.partner}
        </button>
      )}

      {open && (
        <div className="renew-backdrop" role="dialog" aria-modal="true" aria-label={p.title}>
          <div className="renew-modal card">
            <button type="button" className="renew-close" onClick={() => close()} aria-label={copy.common.close}>
              <X size={18} />
            </button>
            <h2 className="mb-2">{p.title}</h2>
            <p className="mb-2 font-semibold" style={{ color: "var(--accent)" }}>{p.tagline}</p>
            <p className="muted-text text-base mb-4">{p.lead}</p>
            <GoogleForm formKey="partner" copy={copy} successMessage={p.thanks} />
          </div>
        </div>
      )}
    </>
  );
}
