"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  lineClassName?: string;
  staggerDelay?: number;
  duration?: number;
  blurAmount?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className,
  lineClassName,
  staggerDelay = 0.15,
  duration = 0.6,
  blurAmount = 6,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-50px" });
  const lines = children.split("\n").filter((l) => l.trim().length > 0);

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            initial={{ opacity: 0, y: "100%", filter: `blur(${blurAmount}px)` }}
            animate={
              inView
                ? { opacity: 1, y: "0%", filter: "blur(0px)" }
                : { opacity: 0, y: "100%", filter: `blur(${blurAmount}px)` }
            }
            transition={{
              duration,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

interface TextRevealLineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  once?: boolean;
}

export function TextRevealLine({
  children,
  className,
  delay = 0,
  duration = 0.6,
  blurAmount = 6,
  once = true,
}: TextRevealLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: "100%", filter: `blur(${blurAmount}px)` }}
        animate={
          inView
            ? { opacity: 1, y: "0%", filter: "blur(0px)" }
            : { opacity: 0, y: "100%", filter: `blur(${blurAmount}px)` }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
