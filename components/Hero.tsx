import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-lamp" />
        <div className="hero-lamp right" />
        <div className="hero-brake" />
        <div className="hero-dashes" />
        <div className="hero-road" />
      </div>

      <div className="wrap hero-inner">
        <Reveal>
          <p className="eyebrow">AI legal clarity for policyholders</p>
        </Reveal>
        <Reveal delay={90}>
          <h1>
            Your policy is complicated.
            <br />
            <span className="grad">We make it obvious.</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="hero-sub">
            Policy ADDA reads your insurance policies and explains every
            clause, exclusion, and deadline in plain language. Ask anything
            about your coverage, claims, or rights — get clear answers in
            minutes, not phone menus.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">
              Ask your first question
            </a>
            <a href="#how" className="btn btn-ghost">
              How it works
            </a>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <div className="hero-proof">
            <div className="proof-item">
              <span className="proof-num">10,000+</span>
              <span className="proof-label">policies explained</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">98.2%</span>
              <span className="proof-label">accurate answers</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">4 min</span>
              <span className="proof-label">average resolution</span>
            </div>
            <div className="proof-item">
              <span className="proof-num">24/7</span>
              <span className="proof-label">always available</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}