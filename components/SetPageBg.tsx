"use client";

import { useEffect } from "react";

export default function SetPageBg({ src }: { src: string }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--page-bg-image", `url("${src}")`);
    return () => {
      root.style.removeProperty("--page-bg-image");
    };
  }, [src]);

  return null;
}
