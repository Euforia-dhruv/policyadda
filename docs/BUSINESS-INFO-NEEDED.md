# PolicyAdda — Information needed from the client

Before anything below is shown on the public site as fact, the PolicyAdda team must
confirm it. The site currently states, everywhere relevant, that certain details are
"pending verification" and does **not** invent them.

## Verified (currently displayed)
- Business name: PolicyAdda
- Phone: +91 76778 88748
- Address: Z Complex, Near Bata Showroom, Tharpakhna, Plaza Chowk, Ranchi – 834001
- Hours: Mon–Sat 9:30 AM – 6:00 PM; Sunday closed
- Instagram: @policyadda.co.in
- Business description (found): insurance and loan consultancy
- Director name (found): Gaurav Jayswal — **confirm before public use**

## Required from the client (currently NOT shown / marked pending)
- Exact legal business name + structure (proprietorship / partnership / LLP / Pvt. Ltd.)
- IRDAI registration number & license type (broker / corporate agent / POSP / other)
- Whether PolicyAdda is a broker, corporate agent, or operates through POSP
- GST registration information
- Actual branch network / service areas
- Formal insurer partnerships (the site currently lists insurer *names* only as
  "informational examples", never as partners)
- Exact services offered (the current content describes a general assistance model)
- Claims assistance process description
- Official business email address(es) — current site marks email as pending
- WhatsApp business number — current site marks as "available on request"
- Privacy Policy, Terms & Conditions, Disclaimer (approved legal text)
- Grievance officer details & IRDAI complaint escalation process
- Verified customer testimonials (none invented)
- Verified customer statistics (none displayed)

## How to add each item once confirmed
1. **Business identity / contact** → `content/config.ts`
2. **Categories / policies / FAQs / statuses** → `content/*.ts`, then regenerate the
   snapshot (`node --experimental-strip-types scripts/build-content-json.mts`) and
   reseed (`node scripts/seed-supabase.mjs`) if using Supabase.
3. **Legal pages** → replace the placeholders in `app/privacy`, `app/terms`, `app/disclaimer`.
4. **Auth / dashboards** → provide Supabase project credentials (see ARCHITECTURE.md).

Never add unverifiable claims (registration numbers, partner lists, statistics).
The product, database, and UI are built to accept verified values with zero
architectural change.