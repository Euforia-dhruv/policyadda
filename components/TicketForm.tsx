"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import { Check } from "@/lib/icons";

export default function TicketForm({ locale, copy }: { locale: Locale; copy: SiteCopy }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    category: copy.support.cats[0],
    subject: "",
    description: "",
  });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const set = (k: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const json = await res.json();
      if (!res.ok) {
        setErr(json.error ?? "Unexpected error. Please retry.");
        return;
      }
      setSent(json.ticketNo);
    } catch {
      setErr("Network error. Check your connection and retry.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="form-card">
        <div className="alert alert-ok mb-3">
          <strong><Check size={16} className="inline-block align-[-3px] mr-1" /> {copy.support.tSuccess}</strong>
        </div>
        <p className="text-base font-bold">{sent}</p>
        <p className="muted-sm mt-2">{copy.support.tSuccessSub}</p>
        <p className="faint-text mt-2">{copy.support.tNote}</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <h3 className="mb-1">{copy.support.openTicket}</h3>
      <p className="muted-sm mb-5">{copy.support.ticketSub}</p>

      {err && <div className="alert alert-err mb-3">{err}</div>}

      <div className="form-row">
        <div className="field">
          <label htmlFor="tName">{copy.support.tName}</label>
          <input id="tName" value={fields.name} onChange={set("name")} required />
        </div>
        <div className="field">
          <label htmlFor="tEmail">{copy.support.tEmail}</label>
          <input id="tEmail" type="email" value={fields.email} onChange={set("email")} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="tPhone">{copy.support.tPhone}</label>
        <input id="tPhone" type="tel" value={fields.phone} onChange={set("phone")} />
      </div>
      <div className="field">
        <label htmlFor="tCategory">{copy.support.ticket}</label>
        <select id="tCategory" value={fields.category} onChange={set("category")}>
          {copy.support.cats.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="tSubject">{copy.support.tSubject}</label>
        <input id="tSubject" value={fields.subject} onChange={set("subject")} required />
      </div>
      <div className="field">
        <label htmlFor="tDesc">{copy.support.tDescription}</label>
        <textarea id="tDesc" value={fields.description} onChange={set("description")} required />
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={busy}>
        {busy ? <span className="spinner" /> : copy.support.tSubmit}
      </button>
    </form>
  );
}