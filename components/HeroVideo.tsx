"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient, decorative hero background video.
 *
 * SSR markup uses the preload="metadata" HD source as a safe fallback so the
 * poster appears instantly and no-JS/reduced-motion visitors never see a black
 * area. After hydration we pick the best resolution for the current viewport
 * and network conditions and upgrade the source before playback begins.
 *
 * When the chosen resolution is already the SSR default (HD) we leave the
 * <source> children alone — re-assigning an identical src would force a reload
 * and abort an in-flight play().
 *
 * The <video> is intentionally decorative: no UI, no controls, no misleading
 * accessibility label.
 */

const SRCS = {
  hd: { mp4: "/videos/policyadda-hero-hd.mp4", webm: "/videos/policyadda-hero.webm" },
  qhd: { mp4: "/videos/policyadda-hero-2k.mp4" },
  uhd: { mp4: "/videos/policyadda-hero-4k.mp4" },
} as const;

type Res = keyof typeof SRCS;

function supportsVp9(): boolean {
  if (typeof document === "undefined") return false;
  const v = document.createElement("video");
  return v.canPlayType('video/webm; codecs="vp9"') !== "";
}

function chooseSource(): { src: string; res: Res } {
  const width = window.innerWidth || 1280;
  const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } })
    .connection;
  const slow =
    Boolean(conn && (conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType || "")));

  let res: Res = "hd";
  if (!slow) {
    if (width >= 1440 && width < 2560) res = "qhd";
    else if (width >= 2560) res = "uhd";
    // < 1440 (mobile + tablet): HD — fastest, and the source is native 720p.
  }

  // Prefer WebM when the browser supports it (smaller, modern codec). HD MP4
  // remains the compatibility fallback for every resolution tier.
  return { src: res === "hd" && supportsVp9() ? SRCS.hd.webm : SRCS[res].mp4, res };
}

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.style.display = "none";
      return;
    }

    // Match what the SSR <source> children will auto-select, so HD needs no
    // src reassignment (avoids a reload that aborts in-flight play()).
    const hdAuto = supportsVp9() ? SRCS.hd.webm : SRCS.hd.mp4;
    let current = chooseSource();
    let hideTimer: number | undefined;

    const revealPosterIfEmpty = () => {
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        if (video.readyState === 0) video.style.display = "none";
      }, 1500);
    };

    const start = () => {
      const src = current.src;
      if (src !== hdAuto && video.getAttribute("src") !== src) {
        video.src = src;
      }
      const p = video.play();
      if (p) p.catch(revealPosterIfEmpty);
    };

    const onError = () => {
      // WebM failed → step down to the universally supported H.264 MP4.
      if (current.src.endsWith(".webm")) {
        current = { ...current, src: SRCS.hd.mp4 };
        start();
        return;
      }
      // Compatibility MP4 failed too → clean poster fallback, never a black box.
      video.style.display = "none";
    };

    video.addEventListener("error", onError);
    start();

    return () => {
      window.clearTimeout(hideTimer);
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video-el"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/videos/policyadda-hero-poster.jpg"
      tabIndex={-1}
      aria-hidden="true"
    >
      {/* HD compatibility source, preload="metadata" keeps it cheap.
          The client upgrades this to 2K/4K on capable viewports. */}
      <source src={SRCS.hd.webm} type='video/webm; codecs="vp9"' />
      <source src={SRCS.hd.mp4} type="video/mp4" />
    </video>
  );
}