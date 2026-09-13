import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="wrap">
        <Reveal>
          <div className="cta-card">
            <p className="eyebrow">Get started</p>
            <h2>Uncover your coverage tonight.</h2>
            <p className="lead">
              Upload a single policy document and ask your first question free.
              It takes about four minutes — and it only takes one bad night to
              wish you had.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary">
                Upload my policy
              </a>
              <a href="#faq" className="btn btn-ghost">
                Read the FAQ
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}