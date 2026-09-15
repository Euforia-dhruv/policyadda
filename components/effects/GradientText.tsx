"use client";

import { motion } from "framer-motion";

export default function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`inline-block bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, var(--accent), var(--cta), var(--accent-strong), var(--cta-strong), var(--accent))",
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}
