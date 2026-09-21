"use client";

import Image from "next/image";

const SLIDES = [
  { src: "/assets/cards/Health Insurance.png", alt: "Health Insurance" },
  { src: "/assets/cards/Motor Insurance.png", alt: "Motor Insurance" },
  { src: "/assets/cards/Life Insurance.png", alt: "Life Insurance" },
  { src: "/assets/cards/Business Insurance.png", alt: "Business Insurance" },
  { src: "/assets/cards/Property & Home Insurance.png", alt: "Property & Home Insurance" },
  { src: "/assets/cards/Travel Insurance.png", alt: "Travel Insurance" },
];

const DOUBLED = [...SLIDES, ...SLIDES];

export default function ImageSlideshow() {
  return (
    <div className="slideshow-strip">
      <div className="slideshow-track">
        {DOUBLED.map((s, i) => (
          <div className="slideshow-slide" key={i}>
            <Image
              src={s.src}
              alt={s.alt}
              width={320}
              height={200}
              className="slideshow-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
