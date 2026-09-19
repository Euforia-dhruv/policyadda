/**
 * Generates content/content.json from the TS content layer.
 * Run:  node --experimental-strip-types scripts/build-content-json.mts
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { policies } from "../content/policies.ts";
import { categories } from "../content/categories.ts";
import { siteConfig } from "../content/config.ts";
import { faqs } from "../content/faqs.ts";

const snapshot = { policies, categories, siteConfig, faqs };
writeFileSync(
  join(process.cwd(), "content", "content.json"),
  JSON.stringify(snapshot, null, 2)
);
console.log("wrote content/content.json", Object.keys(snapshot).join(", "));