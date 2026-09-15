"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "chars" | "words";
  staggerDelay?: number;
  duration?: number;
  blurAmount?: number;
  once?: boolean;
}

export function SplitText({
  text,
  className,
  as: Tag = "p",
  splitBy = "chars",
  staggerDelay = 0.03,
  duration = 0.5,
  blurAmount = 8,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  const units = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <Tag className={cn("inline", className)} aria-label={text}>
      <span ref={ref} style={{ display: "inline" }}>
        {units.map((unit, i) => (
          <span key={`${unit}-${i}`} style={{ display: "inline-block" }}>
            <motion.span
              style={{
                display: "inline-block",
                willChange: "transform, opacity, filter",
              }}
              initial={{ opacity: 0, y: 20, filter: `blur(${blurAmount}px)` }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 20, filter: `blur(${blurAmount}px)` }
              }
              transition={{
                duration,
                delay: i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {unit}
            </motion.span>
            {splitBy === "words" && i < units.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
}

interface SplitTextBlockProps {
  children: string;
  className?: string;
  splitBy?: "chars" | "words";
  staggerDelay?: number;
  duration?: number;
  blurAmount?: number;
  once?: boolean;
}

export function SplitTextBlock({
  children,
  className,
  splitBy = "chars",
  staggerDelay = 0.03,
  duration = 0.5,
  blurAmount = 8,
  once = true,
}: SplitTextBlockProps) {
  return (
    <SplitText
      text={children}
      className={className}
      splitBy={splitBy}
      staggerDelay={staggerDelay}
      duration={duration}
      blurAmount={blurAmount}
      once={once}
    />
  );
}
