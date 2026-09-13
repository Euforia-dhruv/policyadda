"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import type { WorkflowStatus } from "@/lib/types";
import { getStatusByCode } from "@/content/statuses";
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
      <form className="form-card" onSubmit={check} style={{ marginBottom: 24 }}>
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
        <div className="card" style={{ padding: 24 }}>
          <div className="alert alert-ok" style={{ marginBottom: 16 }}>
            <strong>✓ {copy.track.found}</strong>
            <span style={{ marginLeft: 10, letterSpacing: "0.04em", fontWeight: 800 }}>{result.data.applicationNo}</span>
          </div>
          <div style={{ marginBottom: 18, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span className="pill pill-accent">{st?.label[locale] ?? result.data.status}</span>
            <span style={{ fontSize: 12.5, color: "var(--faint)" }}>
              {copy.track.updated}: {new Date(result.data.updatedAt).toLocaleString(locale === "hi" ? "hi-IN" : "en-IN")}
            </span>
          </div>
          <StatusTimeline statuses={statuses} current={result.data.status} copy={copy} locale={locale} />
        </div>
      ) : result && !result.found ? (
        <div className="alert alert-err">{copy.track.notFound}</div>
      ) : null}

      <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 12 }}>🔒 {copy.track.privacy}</p>
    </div>
  );
}