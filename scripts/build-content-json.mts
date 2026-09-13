/**
 * Generates content/content.json from the TS content layer.
 * Run:  node --experimental-strip-types scripts/build-content-json.mts
 * The JSON snapshot is committed so the DB seed script needs no TS loader.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { policies } from "../content/policies.ts";
import { categories } from "../content/categories.ts";
import { siteConfig } from "../content/config.ts";
import { faqs } from "../content/faqs.ts";
import { workflowStatuses } from "../content/statuses.ts";

const snapshot = { policies, categories, siteConfig, faqs, workflowStatuses };
writeFileSync(
  join(process.cwd(), "content", "content.json"),
  JSON.stringify(snapshot, null, 2)
);
console.log("wrote content/content.json", Object.keys(snapshot).join(", "));