"use client";

import { useState } from "react";

export function TicketReplyForm({
  ticketId,
  replyLabel,
  placeholder,
}: {
  ticketId: string;
  replyLabel: string;
  placeholder: string;
}) {
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function send() {
    if (!body.trim()) return;
    setBusy(true);
    setMsg(null);
    fetch(`/api/dashboard/tickets/${ticketId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to send");
        setMsg({ ok: true, text: "Sent." });
        setBody("");
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div>
      <textarea className="field-textarea" rows={3} value={body} onChange={(e) => setBody(e.target.value)} placeholder={placeholder} />
      <button className="btn btn-primary btn-sm" onClick={send} disabled={busy || !body.trim()}>
        {busy ? "Sending…" : replyLabel}
      </button>
      {msg && <p className="msg" style={{ color: msg.ok ? "var(--ok)" : "var(--bad)" }}>{msg.text}</p>}
    </div>
  );
}