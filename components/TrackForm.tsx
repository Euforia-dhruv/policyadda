"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import type { WorkflowStatus } from "@/lib/types";
import { getStatusByCode } from "@/content/statuses";
import { Lock, Check } from "@/lib/icons";
import StatusTimeline from "./StatusTimeline";

export default function TrackForm({
  locale,
  copy,
  statuses,
}: {
  locale: Locale;
  copy: SiteCopy;
  statuses: WorkflowStatus[];
}) {
  const [id, setId] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<null | { found: boolean; error?: string; data?: { applicationNo: string; status: string; updatedAt: string } }>(null);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch(`/api/applications?id=${encodeURIComponent(id.trim())}`);
      const json = await res.json();
      if (res.ok) {
        setResult({ found: true, data: json });
      } else {
        setResult({ found: false, error: json.error });
      }
    } catch {
      setResult({ found: false, error: "network" });
    } finally {
      setBusy(false);
    }
  }

  const st = result?.found && result.data ? getStatusByCode(result.data.status) : undefined;

  return (
    <div>
      <form className="form-card mb-6" onSubmit={check}>
        <div className="field">
          <label htmlFor="trackId">{copy.track.idInput}</label>
          <input
            id="trackId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={copy.track.idPlaceholder}
            required
            spellCheck={false}
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit" disabled={busy}>
          {busy ? <span className="spinner" /> : copy.track.check}
        </button>
      </form>

      {result && result.found && result.data ? (
        <div className="card card-pad">
          <div className="alert alert-ok mb-4">
            <strong><Check size={16} className="inline-block align-[-3px] mr-1" /> {copy.track.found}</strong>
            <span className="ml-2.5 tracking-wider font-extrabold">{result.data.applicationNo}</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap mb-[18px]">
            <span className="pill pill-accent">{st?.label[locale] ?? result.data.status}</span>
            <span className="faint-text">
              {copy.track.updated}: {new Date(result.data.updatedAt).toLocaleString(locale === "hi" ? "hi-IN" : "en-IN")}
            </span>
          </div>
          <StatusTimeline statuses={statuses} current={result.data.status} copy={copy} locale={locale} />
        </div>
      ) : result && !result.found ? (
        <div className="alert alert-err">{copy.track.notFound}</div>
      ) : null}

      <p className="faint-text mt-3"><Lock size={14} className="inline-block align-[-2px] mr-1" /> {copy.track.privacy}</p>
    </div>
  );
}