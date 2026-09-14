import type { Locale } from "@/lib/types";
import type { SiteConfig } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { getActiveCategories } from "@/content/categories";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";

export default function Footer({
  copy,
  locale,
  config,
}: {
  copy: SiteCopy;
  locale: Locale;
  config: SiteConfig;
}) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <PolicyAddaBrand variant="full" className="f-brand" />
            <p className="f-note mt-2">
              {config.slogan[locale]} — {copy.footer.tagline}
            </p>
            <p className="f-note mt-3">
              {config.contact.address ? pick(locale, config.contact.address) : ""} · {config.contact.phone.display}
            </p>
          </div>

          <div>
            <h4>{copy.footer.explore}</h4>
            <ul>
              <li><a href="/policies">{copy.nav.categories}</a></li>
              <li><a href="/how-it-works">{copy.nav.how}</a></li>
              <li><a href="/about">{copy.nav.about}</a></li>
              <li><a href="/track">Track application</a></li>
            </ul>
          </div>

          <div>
            <h4>{copy.footer.categoriesLabel}</h4>
            <ul>
              {getActiveCategories().map((c) => (
                <li key={c.id}><a href={`/policies/${c.slug}`}>{pick(locale, c.name)}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{copy.footer.legal}</h4>
            <ul>
              <li><a href="/privacy">{copy.footer.privacy}</a></li>
              <li><a href="/terms">{copy.footer.terms}</a></li>
              <li><a href="/disclaimer">{copy.footer.disclaimer}</a></li>
              <li><a href="/contact">{copy.footer.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {config.brand}. {copy.footer.rights}</span>
          <span>{config.verificationNote}</span>
        </div>
      </div>
    </footer>
  );
}