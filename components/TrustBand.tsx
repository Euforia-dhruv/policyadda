import type { SiteCopy } from "@/content/copy";

const ICONS = ["⚖", "🧑‍💼", "🧭", "🔒"];

export default function TrustBand({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="trust">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.trust.eyebrow}</p>
          <h2>{copy.trust.title}</h2>
          <p className="lead">{copy.trust.lead}</p>
        </div>
        <div className="trust-band">
          {copy.trust.items.map((it, i) => (
            <div className="trust-item" key={it.t}>
              <div className="t-ico">{ICONS[i % ICONS.length]}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}