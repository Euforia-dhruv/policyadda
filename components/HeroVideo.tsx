"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — always 4K MP4. No quality fallback.
 */

const SRC = "/videos/policyadda-hero-4k.mp4";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.style.display = "none";
      return;
    }

    let hideTimer: number | undefined;

    const revealPosterIfEmpty = () => {
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => {
        if (video.readyState === 0) video.style.display = "none";
      }, 3000);
    };

    video.src = SRC;
    const p = video.play();
    if (p) p.catch(revealPosterIfEmpty);

    return () => {
      window.clearTimeout(hideTimer);
      video.pause();
      video.removeAttribute("src");
      video.load();
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
      preload="auto"
      poster="/videos/policyadda-hero-poster.jpg"
      tabIndex={-1}
      aria-hidden="true"
    >
      <source src={SRC} type="video/mp4" />
    </video>
  );
}
