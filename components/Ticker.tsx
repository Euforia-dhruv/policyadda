"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Motor Insurance",
  "Health Insurance",
  "Business / SME Insurance",
  "Explain me my policy",
  "What am I covered for?",
  "Claim support",
  "Plain-language, always",
  "Transparent & supportive",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <motion.div
        className="ticker-track"
        animate={{ x: [0, "-33.333%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>
    </div>
  );
}
