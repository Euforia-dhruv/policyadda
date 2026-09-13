const ITEMS = [
  "Health insurance",
  "Motor insurance",
  "Term life insurance",
  "Home insurance",
  "Travel insurance",
  "Claim deadlines",
  "Exclusions decoded",
  "Rights you didn't know you had",
  "Fine print, in plain language",
  "Same-day claim help",
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