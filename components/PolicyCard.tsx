"use client";

import type { Locale, Policy } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";
import { siteConfig } from "@/content/config";
import { motion } from "motion/react";

const ENQUIRY_URL = siteConfig.forms?.enquiry ?? "#";

export default function PolicyCard({
  policy,
  locale,
  copy,
  full = false,
}: {
  policy: Policy;
  locale: Locale;
  copy: SiteCopy;
  full?: boolean;
}) {
  const detailHref = `/policies/${policy.categorySlug}/${policy.slug}`;
  const applyHref = policy.googleFormUrl ?? ENQUIRY_URL;

  return (
    <motion.div
      className="card card-hover policy-card"
      whileHover={{ boxShadow: "0 0 30px rgba(23, 79, 134, 0.12)" }}
      transition={{ duration: 0.3 }}
    >
      <span className="pcat">{policy.categorySlug}</span>
      <h3>{policy.name}</h3>
      <p>{pick(locale, policy.shortDescription)}</p>
      <div className="pbtns">
        <a href={detailHref} className="btn btn-ghost btn-sm">
          {copy.featured.learnMore}
        </a>
        <a
          href={applyHref}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          {copy.nav.apply}
        </a>
      </div>
    </motion.div>
  );
}
