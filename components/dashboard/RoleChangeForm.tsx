"use client";

import { useState } from "react";

export function RoleChangeForm({
  userId,
  currentRole,
  roles,
  saveLabel,
}: {
  userId: string;
  currentRole: string;
  roles: { code: string; name: string }[];
  saveLabel: string;
}) {
  const [role, setRole] = useState(currentRole);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function save() {
    setBusy(true);
    setMsg(null);
    fetch(`/api/admin/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roleCode: role }),
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
    <div className="flex items-center gap-2 flex-wrap">
      <select className="field-select" value={role} onChange={(e) => setRole(e.target.value)} style={{ minWidth: 130 }}>
        {roles.map((r) => (
          <option key={r.code} value={r.code}>
            {r.name}
          </option>
        ))}
      </select>
      <button className="btn btn-sm" onClick={save} disabled={busy || role === currentRole}>
        {busy ? "…" : saveLabel}
      </button>
      {msg && <span className="msg" style={{ color: msg.ok ? "var(--ok)" : "var(--bad)" }}>{msg.text}</span>}
    </div>
  );
}