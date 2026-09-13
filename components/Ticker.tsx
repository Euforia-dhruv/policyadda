const ITEMS = [
  "Motor Insurance",
  "Health Insurance",
  "Business / SME Insurance",
  "Explain me my policy",
  "What am I covered for?",
  "Claim support",
  "Plain-language, always",
  "Transparent & supportive",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}