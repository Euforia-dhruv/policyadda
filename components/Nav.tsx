"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#" className="brand">
          <div className="brand-mark">P</div>
          Policy ADDA
        </a>

        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#faq">FAQ</a>
          <a href="#cta" className="btn btn-primary nav-cta">
            Start now
          </a>
        </div>
      </div>
    </nav>
  );
}