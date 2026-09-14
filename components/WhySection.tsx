import type { SiteCopy } from "@/content/copy";
import { Search, User, Globe, Phone, Shield, ArrowRight } from "@/lib/icons";

const ICONS = [Search, User, Globe, Phone, Shield, ArrowRight];

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
          {copy.why.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div className="trust-item min-h-150" key={it.t}>
                <div className="t-ico"><Icon size={28} /></div>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}