# PolicyAdda

Modern, trust-first insurance assistance and policy discovery platform — Ranchi, India.

Built from the ground up as a **functional** platform, not a mock-up:

- **Marketing site** — categories, policy catalogue, plain-language detail pages, FAQ, support, bilingual (EN / हिं).
- **Application system** — enquiry/application form, configurable workflow statuses, public status tracking by Application ID, support tickets — all persisted through a storage adapter (Supabase when configured, JSON file in dev).
- **Security** — full Supabase schema with Row-Level Security on every table, role/permission model, server-enforced authorization, zod validation, rate limiting, audit logging.
- **Design** — premium, trustworthy; light & dark themes; mobile-first.

## Quick start

```bash
npm install
npm run dev          # → http://localhost:3000
```

Without Supabase credentials, forms persist to `.data/policyadda/db.json` (gitignored)
so every flow works end-to-end today.

## Enable Supabase (recommended)

1. Create a Supabase project.
2. Apply migrations in order from `supabase/migrations/` (SQL editor or `supabase db push`).
3. Add env vars (server): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
4. Seed content: `NEXT_PUBLIC_SUPABASE_URL=… SUPABASE_SERVICE_ROLE_KEY=… node scripts/seed-supabase.mjs`.

## Project layout

```
app/            Next.js App Router pages + API routes
components/     UI components (theme-consistent, no duplication)
content/        Editable content: config, categories, policies, faqs, statuses, copy (en/hi)
lib/            Types, i18n, data access, validation, storage adapters, supabase clients
supabase/       SQL migrations (schema → RLS → seed)
scripts/        content JSON snapshot + Supabase seeder
docs/           ARCHITECTURE (wiring status) · BUSINESS-INFO-NEEDED (verification checklist)
```

## Important

- Insurer names are shown **only** as informational examples — no partnerships are claimed.
- No IRDAI numbers, statistics, testimonials, branches, or policy terms are invented.
- Pending client verification is surfaced explicitly (see `docs/BUSINESS-INFO-NEEDED.md`).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | dev server |
| `npm run build` | production build |
| `npm run lint` | eslint |
| `node --experimental-strip-types scripts/build-content-json.mts` | refresh `content/content.json` |
| `node scripts/seed-supabase.mjs` | seed Supabase from `content/content.json` |