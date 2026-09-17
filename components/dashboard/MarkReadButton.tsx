"use client";

import { useState } from "react";
import { Check } from "@/lib/icons";

export function MarkReadButton({ notificationId, markReadLabel }: { notificationId: string; markReadLabel: string }) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  function mark() {
    setBusy(true);
    fetch("/api/notifications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: notificationId }),
    })
      .then((r) => r.json().catch(() => ({})))
      .then((data) => {
        if (!data.error) setDone(true);
      })
      .catch(() => {})
      .finally(() => setBusy(false));
  }

  if (done) return <span className="muted-xs"><Check size={14} /></span>;
  return (
    <button className="notif-action-btn" onClick={mark} disabled={busy}>
      {markReadLabel}
    </button>
  );
}