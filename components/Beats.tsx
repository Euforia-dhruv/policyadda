import Reveal from "./Reveal";

export type Beat = {
  id: string;
  num: string;
  title: string;
  body: string;
  scene: string;
};

export const BEATS: Beat[] = [
  {
    id: "quiet",
    num: "01 · Quiet",
    title: "A calm drive home",
    body: "Some nights feel easy. You're a few minutes from your street, everything on autopilot.",
    scene: "scene-quiet",
  },
  {
    id: "sudden",
    num: "02 · Sudden",
    title: "Then, a hard brake",
    body: "The car ahead stops sharp. You swerve, you stop, heart pounding. Nobody's hurt. Barely.",
    scene: "scene-sudden",
  },
  {
    id: "questions",
    num: "03 · Questions",
    title: "Questions pile up",
    body: "Do I claim or not? Will my premium spike? What does my policy even cover in an accident?",
    scene: "scene-questions",
  },
  {
    id: "clarity",
    num: "04 · Clarity",
    title: "Clarity, in minutes",
    body: "Policy ADDA reads your fine print and tells you exactly where you stand. No jargon, no guesses.",
    scene: "scene-clarity",
  },
  {
    id: "help",
    num: "05 · Help",
    title: "Real help arrives",
    body: "From what to record at the scene to filing the claim the right way on day one.",
    scene: "scene-help",
  },
  {
    id: "policy",
    num: "06 · Policy",
    title: "Know your policy",
    body: "Every clause, every exclusion, every deadline — translated into language you actually speak.",
    scene: "scene-policy",
  },
  {
    id: "brand",
    num: "07 · Brand",
    title: "Policy ADDA",
    body: "The companion that keeps the moments you can't plan for, covered by the clarity you deserve.",
    scene: "scene-brand",
  },
];

export default function Beats() {
  return (
    <section className="beats" id="story">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">The story</p>
            <h2>One bad night is all it takes.</h2>
            <p className="lead">
              Policies are written by lawyers for lawyers. We wrote a
              translator. Scroll the journey from panic to clarity.
            </p>
          </div>
        </Reveal>

        <div className="beats-grid">
          {BEATS.map((b, i) => (
            <Reveal key={b.id} delay={i * 60}>
              <article className="beat">
                <div className={`scene ${b.scene}`} aria-hidden="true" />
                <div className="meta">
                  <p className="beat-num">{b.num}</p>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}