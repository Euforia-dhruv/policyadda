"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { ExternalLink, X } from "@/lib/icons";

export default function RenewPopout({
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
  const forms = siteConfig.forms;
  const renewUrl = forms?.renew;

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

  if (!renewUrl) return null;

  return (
    <>
      {variant === "card" ? (
        <button type="button" className="card support-card renew-card" onClick={() => close()}>
          <div className="ico"><ExternalLink size={22} /></div>
          <h3>{label ?? copy.quickActions.renew}</h3>
          <p>{copy.renew.lead}</p>
        </button>
      ) : (
        <button type="button" className="btn btn-ghost" onClick={() => close()}>
          {label ?? copy.quickActions.renew}
        </button>
      )}

      {open && (
        <div className="renew-backdrop" role="dialog" aria-modal="true" aria-label={copy.renew.title}>
          <div className="renew-modal card">
            <button type="button" className="renew-close" onClick={() => close()} aria-label={copy.common.close}>
              <X size={18} />
            </button>
            <h2 className="mb-2">{copy.renew.title}</h2>
            <p className="muted-text text-base mb-4">{copy.renew.lead}</p>
            <a href={renewUrl} target="_blank" rel="noreferrer" className="btn btn-primary mb-4">
              {copy.renew.formCta} <ExternalLink size={14} className="inline-block align-[-2px] ml-1" />
            </a>
            <p className="dev-note mb-4">{copy.renew.note}</p>
            <div className="renew-thanks">
              {copy.renew.thanks}
            </div>
          </div>
        </div>
      )}
    </>
  );
}