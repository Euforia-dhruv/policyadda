"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "article";
}

export function Parallax({
  children,
  speed = 0.3,
  className,
  style,
  as: Tag = "div",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <Tag ref={ref} className={cn("overflow-hidden", className)} style={style}>
      <motion.div style={{ y, willChange: "transform" }}>
        {children}
      </motion.div>
    </Tag>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({ children, speed = 0.15, className }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -60, speed * 60]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.span style={{ y, display: "inline-block", willChange: "transform" }}>
        {children}
      </motion.span>
    </div>
  );
}
