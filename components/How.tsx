import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Upload or connect",
    body: "Add your policy PDF or connect your insurer. We extract every clause, exclusion, and date automatically.",
  },
  {
    n: "2",
    title: "Ask anything",
    body: "Ask in your own words — English or Hinglish. 'Am I covered if I scratched another car in the rain?'",
  },
  {
    n: "3",
    title: "Get plain answers",
    body: "Answers cite the exact clause behind them, so you can verify every statement against your document.",
  },
  {
    n: "4",
    title: "Act with confidence",
    body: "Claim checklists, deadline timers, and step-by-step guidance for filing — done right the first time.",
  },
];

export default function How() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>From fine print to fine — in four steps.</h2>
          </div>
        </Reveal>
        <div className="how-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="step">
                <div className="step-index">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}