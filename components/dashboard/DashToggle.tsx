"use client";

import { useState } from "react";

export default function DashToggle({ cssId }: { cssId: string }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
    document.getElementById(cssId)?.classList.toggle("open");
    const overlay = document.getElementById("dash-side-overlay");
    if (overlay) overlay.style.display = open ? "none" : "block";
  }

  return (
    <button className="dash-mobile-toggle" onClick={toggle} aria-expanded={open} aria-label="Toggle dashboard menu">
      {open ? "✕" : "☰"}
    </button>
  );
}