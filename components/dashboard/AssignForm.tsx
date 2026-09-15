"use client";

import { useState } from "react";

export function AssignForm({
  applicationId,
  staff,
  currentAssignee,
  assignLabel,
  unassigned,
}: {
  applicationId: string;
  staff: { userId: string; fullName: string }[];
  currentAssignee?: string | null;
  assignLabel: string;
  unassigned: string;
}) {
  const [employeeId, setEmployeeId] = useState(currentAssignee || "");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  function save() {
    if (!employeeId) return;
    setBusy(true);
    setMsg(null);
    fetch(`/api/dashboard/applications/${applicationId}/assign`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assignToUserId: employeeId }),
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "Failed to assign");
        setMsg({ ok: true, text: "Assigned." });
      })
      .catch((e) => setMsg({ ok: false, text: e.message }))
      .finally(() => setBusy(false));
  }

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        <select className="field-select flex-1 min-w-[160px]" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
          <option value="">{unassigned}</option>
          {staff.map((s) => (
            <option key={s.userId} value={s.userId}>
              {s.fullName || s.userId}
            </option>
          ))}
        </select>
        <button className="btn btn-primary btn-sm" onClick={save} disabled={busy || !employeeId}>
          {busy ? "Saving…" : assignLabel}
        </button>
      </div>
      {msg && <p className={`msg ${msg.ok ? "text-ok" : "text-bad"}`}>{msg.text}</p>}
    </div>
  );
}