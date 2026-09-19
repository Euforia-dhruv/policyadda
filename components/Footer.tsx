import type { Locale } from "@/lib/types";
import type { SiteConfig } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";
import { footerColumns, footerCopyright, pickFooterLabel } from "@/content/footerLinks";
import { MapPin, Phone, Mail, ExternalLink } from "@/lib/icons";

export default function Footer({
  copy,
  locale,
  config,
}: {
  copy: SiteCopy;
  locale: Locale;
  config: SiteConfig;
}) {
  const socials: { label: { en: string; hi: string }; href: string }[] = [
    config.contact.facebook ? { label: { en: "Facebook", hi: "फ़ेसबुक" }, href: config.contact.facebook } : null,
    config.contact.instagram ? { label: { en: "Instagram", hi: "इंस्टाग्राम" }, href: config.contact.instagram } : null,
    config.contact.linkedin ? { label: { en: "LinkedIn", hi: "लिंक्डइन" }, href: config.contact.linkedin } : null,
    config.contact.whatsapp ? { label: { en: "WhatsApp", hi: "व्हाट्सऐप" }, href: config.contact.whatsapp } : null,
  ].filter((s): s is { label: { en: string; hi: string }; href: string } => s !== null);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand-col">
            <PolicyAddaBrand variant="full" className="f-brand" />
            <p className="f-note mt-2">
              {config.slogan[locale]} — {copy.footer.tagline}
            </p>
            <ul className="f-contact mt-3">
              {config.contact.address && (
                <li>
                  <MapPin size={16} /> <span>{pick(locale, config.contact.address)}</span>
                </li>
              )}
              {config.contact.phone && (
                <li>
                  <Phone size={16} /> <span>{config.contact.phone.display}</span>
                </li>
              )}
              {config.contact.email && (
                <li>
                  <Mail size={16} /> <span>{config.contact.email}</span>
                </li>
              )}
            </ul>
            {socials.length > 0 && (
              <div className="f-social mt-3">
                {socials.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
                    {s.label[locale]} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {footerColumns.map((col) => (
            <div key={col.title.en}>
              <h4>{pickFooterLabel(col.title, locale)}</h4>
              <ul>
                {col.links.map((l, i) => (
                  <li key={`${l.href}-${i}`}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {pickFooterLabel(l.label, locale)}
                      {l.external && <ExternalLink size={12} className="f-ext" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legals">
          <p>{copy.footer.registered}</p>
          <p>{copy.footer.infoSharing}</p>
          <p>{copy.footer.irdai}</p>
          <p className="f-beware">{config.verificationNote}</p>
        </div>

        <div className="footer-bottom">
          <span>{footerCopyright()}. {copy.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}