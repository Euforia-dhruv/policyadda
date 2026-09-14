"use client";

import { useState } from "react";

export function ProfileForm({
  initial,
  saveLabel,
  savedText,
}: {
  initial: { fullName?: string | null; phone?: string | null; city?: string | null };
  saveLabel: string;
  savedText: string;
}) {
  const [fullName, setFullName] = useState(initial.fullName || "");
  const [phone, setPhone] = useState(initial.phone || "");
  const [city, setCity] = useState(initial.city || "");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function save() {
    setBusy(true);
    setMsg(null);
    fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, phone, city }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to save");
        setMsg({ ok: true, text: savedText });
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div>
      <div className="field">
        <label className="field-label" htmlFor="pf-name">Name</label>
        <input id="pf-name" className="field-input" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="pf-phone">Phone</label>
        <input id="pf-phone" className="field-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="field">
        <label className="field-label" htmlFor="pf-city">City</label>
        <input id="pf-city" className="field-input" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={save} disabled={busy}>
        {busy ? "Saving…" : saveLabel}
      </button>
      {msg && <p style={{ fontSize: 13, color: msg.ok ? "var(--ok)" : "var(--bad)", marginTop: 10 }}>{msg.text}</p>}
    </div>
  );
}