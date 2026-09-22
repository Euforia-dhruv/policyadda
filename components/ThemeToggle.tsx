"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme((document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#0B1120" : "#F8FAFC");
    try {
      localStorage.setItem("policyadda_theme", next);
    } catch {
      /* private mode */
    }
  };

  return { theme, toggle };
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle light/dark"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}