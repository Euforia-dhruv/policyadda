"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-0 h-[2px] origin-left z-[200] bg-gradient-to-r from-accent via-cta to-accent", className)}
      style={{ scaleX }}
    />
  );
}
