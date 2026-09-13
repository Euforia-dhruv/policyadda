# Policy ADDA

Your policy, made clear. A cinematic dark landing page for an AI legal-clarity
companion that reads insurance policies and explains every clause in plain
language.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Zero runtime dependencies beyond react/next — all visuals are CSS/SVG

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static + server build
npm start
```

## Structure

- `app/page.tsx` — page assembly
- `components/` — Nav, Hero, Ticker, Beats (7-scene story), How, Why, Faq, Cta, Footer
- `app/globals.css` — design tokens, film grain, vignette, scene visuals

## Notes

- The 7 "beats" (quiet → sudden → questions → clarity → help → policy → brand)
  mirror the original cinematic hero concept. Footage is rendered as animated
  CSS scenes; drop real video into `/public/video/<id>.mp4` and swap the scene
  wrapper when ready.
- `video-gen/` in the repo root is a standalone local T2V pipeline (LLM video
  generation) and is independent of this site.