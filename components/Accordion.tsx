"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            <motion.span
              className="chev"
              animate={{ rotate: open === it.id ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            >
              ▾
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === it.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                style={{ overflow: "hidden" }}
              >
                <div className="acc-body-inner">{it.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
