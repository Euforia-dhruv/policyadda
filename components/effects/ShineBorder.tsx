"use client";

import type { ReactNode } from "react";

export default function ShineBorder({
  children,
  className = "",
  color = "var(--accent)",
  duration = 3,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(var(--shine-angle, 90deg), transparent 0%, ${color} 50%, transparent 100%)`,
          backgroundSize: "300% 100%",
          animation: `shine-border ${duration}s linear infinite`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
}
