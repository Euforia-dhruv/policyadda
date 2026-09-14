# PolicyAdda — Architecture & wiring status

## Current wiring status

| Feature | Status | Notes |
| --- | --- | --- |
| Marketing site (home/policies/category/policy detail/support/contact/about/how) | ✅ Functional | Content from `content/*`, bilingual EN/HI |
| Enquiry/application form | ✅ Functional | `POST /api/applications`; persists to adapter below |
| Public status tracking | ✅ Functional | `GET /api/applications?id=…` returns status only |
| Support ticket form | ✅ Functional | `POST /api/support` |
| Configurable workflow statuses | ✅ Functional | `content/statuses.ts` + DB table `application_statuses` |
| Light/dark theme, mobile-first | ✅ Functional | CSS variables + theme toggle |
| Brand design system | ✅ Applied | PolicyAdda palette, DM Serif Display + Inter, PA badge (see style guide) |
| Auth (customer signup/login/logout) | ✅ Functional | `/api/auth/signup|login|logout`; service-role createUser + profile upsert + RLS |
| Customer dashboard | ✅ Functional | RLS-scoped application list, profile, role, sign-out |
| Application ↔ account linking | ✅ Functional | `customer_id` attached from server session on POST |
| Internal staff workspace | 📋 Designed | Supabase migrations + RLS complete; no UI yet |
| AI assistant, notifications, docs storage | 📋 Designed | Schema ready; disabled until services configured |

## Storage architecture

Application + ticket data flows through a thin adapter interface:

```
app/api/*            (Next.js route handlers — validate, rate-limit, sanitize)
        │
        ▼
lib/adapters/        StorageBackend (sealed interface)
        ├── file.ts       DEV driver → .data/policyadda/db.json (gitignored)
        └── supabase.ts   PROD driver → Supabase Postgres (service role)
```

- The driver is chosen automatically by env:
  `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` present → Supabase, else file.
- Surrounding code never knows which backend is live ⇒ the app is fully functional
  today (file mode) and upgrades to Supabase without code changes.
- The file driver is dev-only: no RLS, no audit, single node. It is never
  suitable for production.

## Data model ↔ Supabase

`supabase/migrations/`:

- `001_core_schema.sql` — tables: profiles, roles, permissions, role_permissions,
  policy_categories, policies, application_statuses, applications,
  application_status_history, customer_assignments, documents, support_tickets,
  support_messages, notifications, audit_logs; updated_at triggers; status-change
  trigger writing history + audit; signup trigger creating profiles.
- `002_rls.sql` — RLS enabled on **every** table with granular policies
  (owner-scoped customers, assigned staff, manager/admin scope, audit read
  admin-only, append-only audit).
- `003_seed.sql` — roles, permissions, role mapping, statuses, categories.

Apply via Supabase CLI: `supabase link` + `supabase db push`
(or paste files in order in the SQL editor).

Policies/categories content lives in `content/*` (typed) and is mirrored to
`content/content.json` (committed) so `scripts/seed-supabase.mjs` can push it:
`NEXT_PUBLIC_SUPABASE_URL=… SUPABASE_SERVICE_ROLE_KEY=… node scripts/seed-supabase.mjs`.

## Security notes

- All sensitive reads go through RLS; roles are enforced server-side, never by
  hiding UI buttons.
- API routes: zod validation, per-IP rate limiting, privacy-safe responses
  (status endpoints never echo phone/email).
- No secrets in the browser: only `NEXT_PUBLIC_*` anon keys are client-visible.
- `SUPABASE_SERVICE_ROLE_KEY` lives on the server only (API routes).
- The file driver is not persisted to git.

## i18n architecture

- Content model uses `{ en: T; hi: T }` maps everywhere (`content/*`).
- UI strings live in `content/copy.ts` (`en`/`hi`).
- Locale flows: server reads cookie (`policyadda_locale`) via `lib/i18n.ts`;
  switcher posts to `/api/locale`. No hardcoded strings scattered in JSX.