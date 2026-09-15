"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — prefers highest quality available.
 *
 * SSR renders the 2K source as default (most desktops) with the poster as
 * instant fallback. Client upgrades to 4K on large viewports.
 * Mobile/tablet stays on HD to save bandwidth.
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
    if (width >= 1440) res = "uhd";
    else if (width >= 768) res = "qhd";
  }

  // Prefer WebM when the browser supports it (smaller, modern codec).
  // For QHD/UHD we use MP4 since WebM only covers HD.
  if (res === "hd" && supportsVp9()) return { src: SRCS.hd.webm, res };
  return { src: SRCS[res].mp4, res };
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

    const hdAuto = supportsVp9() ? SRCS.hd.webm : SRCS.hd.mp4;
    let current = chooseSource();
    let hideTimer: number | undefined;

    const revealPosterIfEmpty = () => {
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        if (video.readyState === 0) video.style.display = "none";
      }, 2000);
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
      // Higher res failed → step down
      if (current.res === "uhd") {
        current = { src: SRCS.qhd.mp4, res: "qhd" };
        start();
      } else if (current.res === "qhd") {
        current = { src: SRCS.hd.mp4, res: "hd" };
        start();
      } else if (current.src.endsWith(".webm")) {
        current = { src: SRCS.hd.mp4, res: "hd" };
        start();
      } else {
        video.style.display = "none";
      }
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
      <source src={SRCS.qhd.mp4} type="video/mp4" />
      <source src={SRCS.hd.webm} type='video/webm; codecs="vp9"' />
      <source src={SRCS.hd.mp4} type="video/mp4" />
    </video>
  );
}
