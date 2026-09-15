"use client";

import { InfiniteSlider } from "@/components/effects/InfiniteSlider";

const ITEMS = [
  { text: "Motor Insurance", icon: "◈" },
  { text: "Health Insurance", icon: "◈" },
  { text: "Business / SME Insurance", icon: "◈" },
  { text: "Explain me my policy", icon: "•" },
  { text: "What am I covered for?", icon: "•" },
  { text: "Claim support", icon: "•" },
  { text: "Plain-language, always", icon: "✦" },
  { text: "Transparent & supportive", icon: "✦" },
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
