"use client";

import { useState, useTransition } from "react";

export function StatusUpdateForm({
  applicationId,
  currentStatus,
  statuses,
  actionLabel,
}: {
  applicationId: string;
  currentStatus: string;
  statuses: { code: string; label: string }[];
  actionLabel: string;
}) {
  const [statusCode, setStatusCode] = useState(currentStatus);
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const [busy, setBusy] = useState(false);

  function save() {
    setBusy(true);
    setMsg(null);
    fetch(`/api/dashboard/applications/${applicationId}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statusCode, note }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to update");
        setMsg({ ok: true, text: "Status updated." });
        startTransition(() => {});
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div>
      <div className="flex gap-2 flex-wrap" style={{ marginBottom: 10 }}>
        <select className="field-select flex-1" value={statusCode} onChange={(e) => setStatusCode(e.target.value)} style={{ minWidth: 160 }}>
          {statuses.map((s) => (
            <option key={s.code} value={s.code}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <input
        className="field-input"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Optional note for customer"
        style={{ marginBottom: 10 }}
      />
      <button className="btn btn-primary btn-sm" onClick={save} disabled={busy || isPending}>
        {busy ? "Saving…" : actionLabel}
      </button>
      {msg && (
        <p className="msg" style={{ color: msg.ok ? "var(--ok)" : "var(--bad)" }}>
          {msg.text}
        </p>
      )}
    </div>
  );
}