"use client";

import type { SiteCopy } from "@/content/copy";
import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "@/lib/icons";

export default function WhySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="why">
      <div className="wrap">
        <div className="why-grid">
          <motion.div
            className="why-image"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/02 — Advisor.png"
              alt="PolicyAdda expert advisor — real people, real support"
              width={600}
              height={500}
              className="why-img"
            />
          </motion.div>

          <motion.div
            className="why-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow">WHY POLICY ADDA</p>
            <h2>{copy.why.title}</h2>
            <p className="lead">{copy.why.lead}</p>
            <ul className="why-list">
              {copy.why.items.map((item) => (
                <li key={item.t} className="why-item">
                  <Check size={20} className="why-check" />
                  <div>
                    <strong>{item.t}</strong>
                    <p>{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
