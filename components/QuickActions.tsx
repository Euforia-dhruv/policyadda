"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";
import ShineBorder from "@/components/effects/ShineBorder";
import { ExternalLink, FileText } from "@/lib/icons";
import RenewPopout from "@/components/RenewPopout";

export default function QuickActions({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const partnerUrl = siteConfig.forms?.partner;

  return (
    <section className="pad section-pad-0" id="quick-actions">
      <div className="wrap">
        <FadeInUp>
          <div className="section-head">
            <p className="eyebrow">{copy.quickActions.eyebrow}</p>
            <h2>{copy.quickActions.title}</h2>
            <p className="lead">{copy.quickActions.lead}</p>
          </div>
        </FadeInUp>
        <StaggerContainer className="support-grid">
          <StaggerItem>
            <ShineBorder color="var(--cta)" duration={5}>
              <RenewPopout copy={copy} locale={locale} variant="card" />
            </ShineBorder>
          </StaggerItem>
          <StaggerItem>
            <ShineBorder color="var(--cta)" duration={5}>
              <a className="card support-card" href="/claim">
                <div className="ico"><FileText size={22} /></div>
                <h3>{copy.quickActions.claim}</h3>
                <p>{copy.quickActions.claimSub}</p>
              </a>
            </ShineBorder>
          </StaggerItem>
          {partnerUrl && (
            <StaggerItem>
              <ShineBorder color="var(--cta)" duration={5}>
                <a className="card support-card" href={partnerUrl} target="_blank" rel="noreferrer">
                  <div className="ico"><ExternalLink size={22} /></div>
                  <h3>{copy.quickActions.partner}</h3>
                  <p>{copy.quickActions.partnerSub}</p>
                </a>
              </ShineBorder>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}