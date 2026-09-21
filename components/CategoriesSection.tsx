import type { Locale, PolicyCategory } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import Image from "next/image";
import { ArrowRight } from "@/lib/icons";

import { siteConfig } from "@/content/config";

const ENQUIRY_URL = siteConfig.forms?.enquiry ?? "#";

const CATEGORY_IMAGES: Record<string, string> = {
  motor: "/assets/cards/Motor Insurance.png",
  health: "/assets/cards/Health Insurance.png",
  travel: "/assets/cards/Travel Insurance.png",
  business: "/assets/cards/Business Insurance.png",
  life: "/assets/cards/Life Insurance.png",
  property: "/assets/cards/Property & Home Insurance.png",
};

const CATEGORY_COPY: Record<string, { en: string; hi: string }> = {
  health: { en: "For you and your family.", hi: "आप और आपके परिवार के लिए।" },
  motor: { en: "A safer ride, every time.", hi: "हर सफर सुरक्षित।" },
  life: { en: "Because tomorrow matters.", hi: "क्योंकि कल मायने रखता है।" },
  business: { en: "Security for your growth.", hi: "आपकी तरक्की की सुरक्षा।" },
  property: { en: "Your space, our protection.", hi: "आपकी जगह, हमारी सुरक्षा।" },
  travel: { en: "Go further, worry less.", hi: "दूर तक जाएं, कम चिंता करें।" },
};

const CATEGORY_ORDER = ["health", "motor", "life", "business", "property", "travel"];

export default function CategoriesSection({
  categories,
  copy,
  locale,
}: {
  categories: PolicyCategory[];
  copy: SiteCopy;
  locale: Locale;
}) {
  if (categories.length === 0) return null;

  const sorted = CATEGORY_ORDER
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter(Boolean) as PolicyCategory[];

  return (
    <section className="cat-section" id="categories">
      <div className="cat-section-inner">
        <div className="cat-section-head">
          <p className="eyebrow">{copy.categories.eyebrow || "OUR INSURANCE PRODUCTS"}</p>
          <h2 className="cat-section-title">{copy.categories.title || "Protection for every chapter of your life."}</h2>
        </div>

        <div className="cat-grid">
          {sorted.map((cat) => {
            const img = CATEGORY_IMAGES[cat.slug];
            const desc = CATEGORY_COPY[cat.slug];
            return (
              <a
                key={cat.id}
                href={ENQUIRY_URL}
                target="_blank"
                rel="noreferrer"
                className="cat-card"
              >
                {img && (
                  <div className="cat-card-img">
                    <Image
                      src={img}
                      alt={pick(locale, cat.name)}
                      width={400}
                      height={260}
                      className="cat-card-photo"
                    />
                  </div>
                )}
                <div className="cat-card-body">
                  <h3 className="cat-card-title">{pick(locale, cat.name)}</h3>
                  <p className="cat-card-desc">{desc ? pick(locale, desc) : pick(locale, cat.short)}</p>
                  <span className="cat-card-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
