import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";

type Partner = string | { name: string; logo?: string };

function partnerName(p: Partner): string {
  return typeof p === "string" ? p : p.name;
}
function partnerLogo(p: Partner): string | undefined {
  return typeof p === "string" ? undefined : p.logo;
}

export default function PartnersSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const partners = siteConfig.partners ?? [];
  if (partners.length === 0) return null;
  const half = Math.ceil(partners.length / 2);
  const rowA = partners.slice(0, half);
  const rowB = partners.slice(half);

  return (
    <section className="pad" id="partners">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.home.partnersEyebrow}</p>
          <h2>{copy.home.partnersTitle}</h2>
          {copy.home.partnersLead && <p className="lead">{copy.home.partnersLead}</p>}
        </div>
      </div>

      <div className="wrap">
        <div className="partners-marquee" aria-label={locale === "hi" ? "हमारे साझेदार बीमाकर्ता" : "Our partner insurers"}>
          <div className="partners-track">
            {[rowA, rowB].map((row, ri) => (
              <div key={ri} className={`partners-row ${ri % 2 === 1 ? "reverse" : ""}`} aria-hidden={ri > 0}>
                {[...row, ...row].map((p, i) => {
                  const name = partnerName(p);
                  const logo = partnerLogo(p);
                  return (
                    <div className="partner-chip" key={`${name}-${i}`}>
                      {logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={logo} alt={name} className="partner-chip-logo" loading="lazy" />
                      ) : (
                        <span className="partner-chip-text">{name}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <p className="muted text-center mt-4">
          {locale === "hi"
            ? `${partners.length}+ बीमा कंपनियों के साथ साझेदारी में।`
            : `Partnered with ${partners.length}+ insurers.`}
        </p>
      </div>
    </section>
  );
}