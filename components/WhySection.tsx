import type { SiteCopy } from "@/content/copy";

const ICONS = ["🔍", "🧑‍💼", "🧭", "☎", "🛡", "🔄"];

export default function WhySection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="pad" id="why">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{copy.why.eyebrow}</p>
          <h2>{copy.why.title}</h2>
          <p className="lead">{copy.why.lead}</p>
        </div>
        <div className="grid-features">
          {copy.why.items.map((it, i) => (
            <div className="trust-item" key={it.t} style={{ minHeight: 150 }}>
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