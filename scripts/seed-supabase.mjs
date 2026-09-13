#!/usr/bin/env node
/**
 * Seeds Supabase from content/content.json.
 * Requires: NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (or run via `next` env).
 * Usage:   node scripts/seed-supabase.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Missing SUPABASE env — nothing seeded.");
  process.exit(1);
}

const db = JSON.parse(readFileSync(join(process.cwd(), "content", "content.json"), "utf-8"));
const sb = createClient(url, key);

async function run() {
  for (const c of db.categories) {
    const r = await sb.from("policy_categories").upsert({
      slug: c.slug,
      name: c.name,
      short: c.short,
      description: c.description,
      icon: c.icon,
      sort: c.sort,
      is_active: c.isActive,
    }, { onConflict: "slug" });
    if (r.error) throw r.error;
  }
  const cats = (await sb.from("policy_categories").select("id, slug")).data ?? [];

  for (const p of db.policies) {
    const cat = cats.find((c) => c.slug === p.categorySlug);
    const r = await sb.from("policies").upsert({
      slug: p.slug,
      category_id: cat?.id,
      name: p.name,
      provider_note: p.providerNote,
      short_description: p.shortDescription,
      full_description: p.fullDescription,
      key_benefits: p.keyBenefits,
      eligibility: p.eligibility,
      coverage: p.coverage,
      exclusions: p.exclusions,
      documents_required: p.documents,
      faqs: p.faqs,
      disclaimer: p.disclaimer,
      google_form_url: p.googleFormUrl ?? null,
      is_active: p.isActive,
      is_featured: p.isFeatured,
    }, { onConflict: "slug" });
    if (r.error) throw r.error;
  }

  for (const s of db.workflowStatuses) {
    const r = await sb.from("application_statuses").upsert({
      code: s.code,
      label: s.label,
      description: s.description,
      sort: s.order,
      is_terminal: !!s.terminal,
    }, { onConflict: "code" });
    if (r.error) throw r.error;
  }

  console.log("Seeded:", db.categories.length, "categories,", db.policies.length, "policies,", db.workflowStatuses.length, "statuses");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});