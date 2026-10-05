import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import GalleryGrid, { type GalleryGroup } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — PolicyAdda",
  description: "Photos and videos from PolicyAdda events, awards and milestones.",
};

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const MEDIA_RE = /\.(jpe?g|png|webp|avif|mp4|webm|mov|m4v)$/i;
const VIDEO_RE = /\.(mp4|webm|mov|m4v)$/i;

const GROUPS: { title: { en: string; hi: string }; match: (file: string) => boolean }[] = [
  {
    title: { en: "Company Events", hi: "कंपनी इवेंट्स" },
    match: (f) => f.startsWith("WhatsApp"),
  },
  {
    title: { en: "SBI — May 2025", hi: "एसबीआई — मई 2025" },
    match: (f) => /^sbi/i.test(f),
  },
  {
    title: { en: "Tata CoC Award — April 2021", hi: "टाटा CoC अवार्ड — अप्रैल 2021" },
    match: (f) => f.startsWith("Tata"),
  },
];

export default function GalleryPage() {
  const locale = getLocale();

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => MEDIA_RE.test(f))
    .sort();

  const groups: GalleryGroup[] = GROUPS.map((g) => ({
    title: pick(locale, g.title),
    items: files
      .filter(g.match)
      .map((f) => ({ src: `/gallery/${f}`, type: VIDEO_RE.test(f) ? ("video" as const) : ("image" as const) })),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <section className="pad pb-2.5">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{pick(locale, { en: "Moments", hi: "पल" })}</p>
            <h2>{pick(locale, { en: "Gallery", hi: "गैलरी" })}</h2>
            <p className="lead">
              {pick(locale, {
                en: "Photos and videos from our events, awards and milestones.",
                hi: "हमारे इवेंट्स, पुरस्कार और उपलब्धियों की तस्वीरें और वीडियो।",
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="pad section-pad-0">
        <div className="wrap">
          <GalleryGrid groups={groups} />
        </div>
      </section>
    </>
  );
}
