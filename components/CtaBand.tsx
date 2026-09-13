import type { SiteCopy } from "@/content/copy";

export default function CtaBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="cta">
      <div className="wrap">
        <div className="cta-band">
          <h2>{copy.cta.title}</h2>
          <p className="lead">{copy.cta.sub}</p>
          <div className="cta-actions">
            <a href="/support" className="btn btn-primary">{copy.cta.primary}</a>
            <a href="/#faq" className="btn btn-ghost">{copy.cta.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}