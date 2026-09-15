"use client";

import { useState } from "react";
import type { SiteCopy } from "@/content/copy";
import { FadeInUp } from "@/components/effects/ScrollReveal";

type Phase = "form" | "done" | "error";

export default function ContactForm({ copy }: { copy: SiteCopy }) {
  const [phase, setPhase] = useState<Phase>("form");
  const [ticketNo, setTicketNo] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    body.type = "contact";
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setTicketNo(data.ticketNo || data.id || "—");
      setPhase("done");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setPhase("error");
    } finally {
      setSaving(false);
    }
  };

  if (phase === "done") {
    return (
      <div className="card px-[26px] py-7 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="mb-2">{copy.support.tSuccess}</h3>
        <p className="muted-sm mb-3">{copy.support.tSuccessSub}</p>
        <p className="text-sm font-mono text-[var(--accent-strong)]">{ticketNo}</p>
        <p className="faint-text mt-3 text-sm">{copy.support.tNote}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card px-[26px] py-7">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="c-name">{copy.support.tName}</label>
          <input id="c-name" name="name" required placeholder={copy.support.tName} />
        </div>
        <div className="form-field">
          <label htmlFor="c-email">{copy.support.tEmail}</label>
          <input id="c-email" name="email" type="email" required placeholder={copy.support.tEmail} />
        </div>
        <div className="form-field">
          <label htmlFor="c-phone">{copy.support.tPhone}</label>
          <input id="c-phone" name="phone" type="tel" placeholder="98XXXXXXXX" pattern="[6-9][0-9]{9}" />
        </div>
        <div className="form-field">
          <label htmlFor="c-category">{copy.support.tSubject}</label>
          <select id="c-category" name="category" defaultValue={copy.support.cats[0]}>
            {copy.support.cats.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="c-message">{copy.support.tDescription}</label>
          <textarea id="c-message" name="message" rows={4} required placeholder={copy.support.tDescription} />
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      <button type="submit" className="btn btn-primary mt-4" disabled={saving}>
        {saving ? "…" : copy.support.tSubmit}
      </button>
    </form>
  );
}
