import Reveal from "./Reveal";

const FEATURES = [
  {
    ico: "📄",
    title: "Every clause decoded",
    body: "We turn 40 pages of jargon into a plain-language map of exactly what you're covered for — and what you're not.",
  },
  {
    ico: "⚖️",
    title: "Answers that cite their source",
    body: "Every answer points to the exact clause behind it. No black boxes, no hallucinations you can't check.",
  },
  {
    ico: "⏰",
    title: "Deadlines that track themselves",
    body: "Claim windows, premium due dates, and renewal reminders — calculated from your document, not guesswork.",
  },
  {
    ico: "💬",
    title: "English, Hinglish, or whatever",
    body: "Ask the way you talk. Our engine understands the messiest real-world questions a policyholder can throw at it.",
  },
  {
    ico: "🔒",
    title: "Private by design",
    body: "Your policy is end-to-end encrypted and never sold. You can delete your document at any time — forever.",
  },
  {
    ico: "🛟",
    title: "Human help when it matters",
    body: "For disputes and complex claims, we route you to verified legal professionals who specialize in insurance law.",
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Why Policy ADDA</p>
            <h2>Insurance shouldn't need an interpreter.</h2>
            <p className="lead">
              Most people find out what their policy doesn't cover — after
              they need it. We fix that the moment you ask.
            </p>
          </div>
        </Reveal>
        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="feature">
                <div className="feature-ico">{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}