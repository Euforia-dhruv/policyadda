"use client";

import { useState } from "react";

export function TicketStatusForm({ ticketId, currentStatus, statuses }: { ticketId: string; currentStatus: string; statuses: { code: string; label: string }[] }) {
  const [statusCode, setStatusCode] = useState(currentStatus);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function save() {
    setBusy(true);
    setMsg(null);
    fetch(`/api/dashboard/tickets/${ticketId}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statusCode }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to update");
        setMsg({ ok: true, text: "Saved." });
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div className="flex items-center gap-2 flex-wrap mt-4">
      <select className="field-select" value={statusCode} onChange={(e) => setStatusCode(e.target.value)} style={{ minWidth: 150 }}>
        {statuses.map((s) => (
          <option key={s.code} value={s.code}>
            {s.label}
          </option>
        ))}
      </select>
      <button className="btn btn-primary btn-sm" onClick={save} disabled={busy || statusCode === currentStatus}>
        {busy ? "Saving…" : "Update"}
      </button>
      {msg && <span className="msg" style={{ color: msg.ok ? "var(--ok)" : "var(--bad)" }}>{msg.text}</span>}
    </div>
  );
}