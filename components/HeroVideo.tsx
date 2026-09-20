"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  showVideo?: boolean;
}

export default function HeroVideo({ videoSrc, posterSrc, showVideo = true }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !showVideo || !videoSrc) return;

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

    video.src = videoSrc;
    const p = video.play();
    if (p) p.catch(revealPosterIfEmpty);

    return () => {
      window.clearTimeout(hideTimer);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [videoSrc, showVideo]);

  if (!showVideo || !videoSrc) return null;

  return (
    <video
      ref={ref}
      className="hero-video-el"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={posterSrc}
      tabIndex={-1}
      aria-hidden="true"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
