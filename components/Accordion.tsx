"use client";

import { useState } from "react";

export interface AccordionItem {
  id: string;
  q: string;
  a: string;
}

export default function Accordion({
  items,
  defaultOpen,
}: {
  items: AccordionItem[];
  defaultOpen?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className="acc-list">
      {items.map((it) => (
        <div key={it.id} className={`acc ${open === it.id ? "open" : ""}`}>
          <button
            className="acc-head"
            onClick={() => setOpen(open === it.id ? null : it.id)}
            aria-expanded={open === it.id}
          >
            {it.q}
            <span className="chev">▾</span>
          </button>
          <div className="acc-body">
            <div className="acc-body-inner">{it.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}