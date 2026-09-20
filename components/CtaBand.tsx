"use client";

import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { motion } from "motion/react";
import { Phone } from "@/lib/icons";

export default function CtaBand({ copy }: { copy: SiteCopy }) {
  const c = siteConfig.contact;
  return (
    <section className="pad" id="cta">
      <div className="wrap">
        <motion.div
          className="cta-new"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-new-title">{copy.cta.title}</h2>
          <p className="cta-new-sub">{copy.cta.sub}</p>
          <div className="cta-new-actions">
            <a href={`tel:${c.phone.tel}`} className="btn btn-primary btn-lg">
              <Phone size={18} className="inline-block align-[-3px] mr-1" />
              {copy.cta.primary || "Talk to an Expert"}
            </a>
            {c.whatsapp && (
              <a href={c.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                WhatsApp Us
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
