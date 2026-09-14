"use client";

import { useState } from "react";

export function NoteForm({ applicationId, addLabel, placeholder }: { applicationId: string; addLabel: string; placeholder: string }) {
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function save() {
    if (!note.trim()) return;
    setBusy(true);
    setMsg(null);
    fetch(`/api/dashboard/applications/${applicationId}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to add");
        setMsg({ ok: true, text: "Note added." });
        setNote("");
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div>
      <textarea className="field-textarea" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder={placeholder} />
      <button className="btn btn-primary btn-sm" onClick={save} disabled={busy || !note.trim()}>
        {busy ? "Saving…" : addLabel}
      </button>
      {msg && <p style={{ fontSize: 12.5, color: msg.ok ? "var(--ok)" : "var(--bad)", marginTop: 8 }}>{msg.text}</p>}
    </div>
  );
}