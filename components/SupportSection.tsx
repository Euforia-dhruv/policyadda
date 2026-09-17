"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { pick } from "@/lib/i18n";
import { Phone, Clock, Edit } from "@/lib/icons";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";
import ShineBorder from "@/components/effects/ShineBorder";

export default function SupportSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const c = siteConfig.contact;
  return (
    <section className="pad section-pad-0" id="support">
      <div className="wrap">
        <FadeInUp>
          <div className="card support-home">
            <div className="section-head section-mb-sm max-w-[600px]">
              <p className="eyebrow">{copy.support.eyebrow}</p>
              <h2>{copy.support.homeTitle}</h2>
              <p className="lead">{copy.support.homeLead}</p>
            </div>
            <StaggerContainer className="support-grid section-mb-0">
              <StaggerItem>
                <ShineBorder color="var(--accent)" duration={5}>
                  <a className="card support-card" href="tel:+917677888748">
                    <div className="ico"><Phone size={22} /></div>
                    <h3>{copy.support.call}</h3>
                    <p className="big">{c.phone.display}</p>
                    <p>{copy.support.callSub}</p>
                  </a>
                </ShineBorder>
              </StaggerItem>
              <StaggerItem>
                <div className="card support-card">
                  <div className="ico"><Clock size={22} /></div>
                  <h3>{copy.support.hours}</h3>
                  <p className="big">{pick(locale, c.hours ?? { en: [""], hi: [""] })[0]}</p>
                  <p>{copy.support.hoursSub}</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <ShineBorder color="var(--cta)" duration={5}>
                  <a className="card support-card" href="/support">
                    <div className="ico"><Edit size={22} /></div>
                    <h3>{copy.support.ticket}</h3>
                    <p className="big">{copy.support.openTicket}</p>
                    <p>{copy.support.ticketSub}</p>
                  </a>
                </ShineBorder>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
