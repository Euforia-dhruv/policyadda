"use client";

import { InfiniteSlider } from "@/components/effects/InfiniteSlider";
import { Diamond, Sparkle } from "@/lib/icons";

const ITEMS = [
  { text: "Motor Insurance", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "Health Insurance", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "Business / SME Insurance", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "Explain me my policy", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "What am I covered for?", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "Claim support", icon: <Diamond size={12} className="ticker-svg" /> },
  { text: "Plain-language, always", icon: <Sparkle size={12} className="ticker-svg" /> },
  { text: "Transparent & supportive", icon: <Sparkle size={12} className="ticker-svg" /> },
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <InfiniteSlider speed={80} speedOnHover={30} gap={48} className="py-3.5">
        {ITEMS.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
