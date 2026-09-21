import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section className="pad" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.home.testimonialsEyebrow}</p>
          <h2>{copy.home.testimonialsTitle}</h2>
          {copy.home.testimonialsLead && <p className="lead">{copy.home.testimonialsLead}</p>}
        </div>
      </div>

      <div className="wrap">
        <div className="tst-marquee">
          <div className="tst-track">
            {[rowA, rowB].map((row, ri) => (
              <div key={ri} className={`tst-row ${ri % 2 === 1 ? "reverse" : ""}`} aria-hidden={ri > 0}>
                {[...row, ...row].map((t, i) => (
                  <blockquote className="card tst-card" key={`${t.name}-${i}`}>
                    <p className="tst-stars" aria-hidden="true">★★★★★</p>
                    <p className="tst-text">“{t.text[locale]}”</p>
                    <footer className="tst-who">
                      <span className="tst-name">{t.name}</span>
                      <span className="tst-city">{t.city}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}