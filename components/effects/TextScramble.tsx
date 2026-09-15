"use client";

import { useEffect, useState, useRef } from "react";
import { motion, type MotionProps } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
} & MotionProps;

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  className,
  as: Component = "p",
  trigger = true,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof React.JSX.IntrinsicElements
  );
  const [text, setText] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const original = children;
  const display = text ?? children;

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let result = "";
      const progress = step / steps;

      for (let i = 0; i < original.length; i++) {
        if (original[i] === " ") {
          result += " ";
        } else if (progress * original.length > i) {
          result += original[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setText(result);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setText(null);
        setIsAnimating(false);
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (trigger) scramble();
  }, [trigger]);

  return (
    <MotionComponent className={className} {...props}>
      {display}
    </MotionComponent>
  );
}
