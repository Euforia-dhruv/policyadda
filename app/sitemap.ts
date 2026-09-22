import type { MetadataRoute } from "next";
import { data } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.policyadda.co.in";

  const statics: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/policies`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-it-works`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/claim`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categories = data.categories().map((c) => ({
    url: `${base}/policies/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const policies: MetadataRoute.Sitemap = [];
  for (const category of data.categories()) {
    for (const p of data.policiesByCategory(category.slug)) {
      policies.push({
        url: `${base}/policies/${category.slug}/${p.slug}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return [...statics, ...categories, ...policies];
}