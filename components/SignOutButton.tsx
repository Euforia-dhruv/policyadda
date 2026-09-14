"use client";

import { useState } from "react";

export default function SignOutButton({
  label,
  busyLabel,
}: {
  label: string;
  busyLabel: string;
}) {
  const [busy, setBusy] = useState(false);
  async function signOut() {
    setBusy(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // proceed to login anyway
    }
    window.location.href = "/login";
  }
  return (
    <button type="button" className="btn btn-ghost btn-sm" onClick={signOut} disabled={busy}>
      {busy ? busyLabel : label}
    </button>
  );
}