"use client";

import type { SiteCopy } from "@/content/copy";
import { motion } from "motion/react";

export default function HowSection({ copy }: { copy: SiteCopy }) {
  const steps = copy.how.steps.slice(0, 5);
  return (
    <section className="pad" id="how" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">{copy.how.eyebrow}</p>
          <h2>{copy.how.title}</h2>
          <p className="lead">{copy.how.lead}</p>
        </div>
        <div className="how-steps-row">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="how-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="how-step-num">{i + 1}</div>
              <h3 className="how-step-title">{s.t}</h3>
              <p className="how-step-desc">{s.d}</p>
              {i < steps.length - 1 && <div className="how-step-arrow" aria-hidden="true">→</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
