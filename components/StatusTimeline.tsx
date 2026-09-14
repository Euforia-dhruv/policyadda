import type { Locale, WorkflowStatus } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { pick } from "@/lib/i18n";

/**
 * Renders the configurable application workflow as a progress timeline.
 * `current` is the live status code; statuses come from content/statuses
 * (and later from the application_statuses table).
 */
export default function StatusTimeline({
  statuses,
  current,
  copy,
  locale,
}: {
  statuses: WorkflowStatus[];
  current: string;
  copy: SiteCopy;
  locale: Locale;
}) {
  const sorted = [...statuses].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((s) => s.code === current);
  const currentIdx = idx === -1 ? 0 : idx;

  return (
    <div>
      <h3 className="text-base" style={{ marginBottom: 18 }}>{copy.apply.nextTitle}</h3>
      <div className="timeline">
        {sorted.map((s, i) => {
          const isDone = i < currentIdx;
          const isCurrent = i === currentIdx;
          return (
            <div
              key={s.code}
              className={`tl-step ${isDone ? "done" : ""} ${isCurrent ? "current" : ""}`}
            >
              <div className="tl-dot" />
              <div>
                <div className="tl-label">{pick(locale, s.label)}</div>
                {isCurrent ? <div className="tl-sub">{pick(locale, s.description)}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}