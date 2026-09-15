"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration * 60);
    let raf: number;
    const tick = () => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        return;
      }
      setDisplay(Math.floor(start));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
