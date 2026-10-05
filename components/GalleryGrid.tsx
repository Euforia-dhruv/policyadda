"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "@/lib/icons";

export type GalleryItem = { src: string; type: "image" | "video" };
export type GalleryGroup = { title: string; items: GalleryItem[] };

type OpenState = { items: GalleryItem[]; i: number };

export default function GalleryGrid({ groups }: { groups: GalleryGroup[] }) {
  const [open, setOpen] = useState<OpenState | null>(null);

  const step = (d: number) =>
    setOpen((o) => (o ? { ...o, i: (o.i + d + o.items.length) % o.items.length } : o));

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const current = open?.items[open.i];
  const showNav = !!open && open.items.length > 1;

  return (
    <>
      {groups.map((g) => (
        <div key={g.title} className="gallery-group">
          <h2 className="gallery-group-title">{g.title}</h2>
          <div className="gallery-grid">
            {g.items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                className="gallery-item"
                onClick={() => setOpen({ items: g.items, i })}
                aria-label={item.src.split("/").pop()}
              >
                {item.type === "video" ? (
                  <video className="gallery-thumb" src={`${item.src}#t=0.1`} preload="metadata" muted playsInline />
                ) : (
                  <Image src={item.src} alt={g.title} width={400} height={300} className="gallery-thumb" />
                )}
                {item.type === "video" && <span className="gallery-play" aria-hidden="true">&#9654;</span>}
              </button>
            ))}
          </div>
        </div>
      ))}

      {open && current && (
        <div
          className="renew-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setOpen(null)}
        >
          <div className="gallery-frame" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="renew-close" onClick={() => setOpen(null)} aria-label="Close">
              <X size={18} />
            </button>
            {current.type === "video" ? (
              <video key={current.src} src={current.src} controls autoPlay playsInline className="gallery-full" />
            ) : (
              <Image key={current.src} src={current.src} alt="" width={1200} height={900} className="gallery-full" />
            )}
            {showNav && (
              <>
                <button type="button" className="gallery-nav gallery-nav-prev" onClick={() => step(-1)} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <button type="button" className="gallery-nav gallery-nav-next" onClick={() => step(1)} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
