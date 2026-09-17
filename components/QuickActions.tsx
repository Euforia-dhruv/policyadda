"use client";

import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { siteConfig } from "@/content/config";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/effects/ScrollReveal";
import ShineBorder from "@/components/effects/ShineBorder";
import { ExternalLink } from "@/lib/icons";

export default function QuickActions({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const forms = siteConfig.forms;
  if (!forms) return null;

  const actions = [
    { url: forms.renew, title: copy.quickActions.renew, sub: copy.quickActions.renewSub },
    { url: forms.claim, title: copy.quickActions.claim, sub: copy.quickActions.claimSub },
    { url: forms.partner, title: copy.quickActions.partner, sub: copy.quickActions.partnerSub },
  ].filter((a) => a.url);

  if (actions.length === 0) return null;

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
          {actions.map((a) => (
            <StaggerItem key={a.url}>
              <ShineBorder color="var(--cta)" duration={5}>
                <a className="card support-card" href={a.url} target="_blank" rel="noreferrer">
                  <div className="ico"><ExternalLink size={22} /></div>
                  <h3>{a.title}</h3>
                  <p>{a.sub}</p>
                </a>
              </ShineBorder>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
