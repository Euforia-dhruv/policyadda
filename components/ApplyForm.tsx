"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import type { WorkflowStatus } from "@/lib/types";
import { pick } from "@/lib/i18n";
import StatusTimeline from "./StatusTimeline";

type State = { phase: "form" | "done" | "error"; applicationNo?: string; error?: string };

export default function ApplyForm({
  locale,
  copy,
  statuses,
  policyName,
  policyId,
}: {
  locale: Locale;
  copy: SiteCopy;
  statuses: WorkflowStatus[];
  policyName: string;
  policyId: string;
}) {
  const [state, setState] = useState<State>({ phase: "form" });
  const [busy, setBusy] = useState(false);
  const [fields, setFields] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const set = (k: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, policyId }),
      });
      const json = await res.json();
      if (!res.ok) {
        setState({ phase: "error", error: json.error ?? "Unexpected error. Please try again or call us." });
        return;
      }
      setState({ phase: "done", applicationNo: json.applicationNo });
    } catch {
      setState({ phase: "error", error: "Network error. Check your connection and retry." });
    } finally {
      setBusy(false);
    }
  }

  if (state.phase === "done") {
    return (
      <div>
        <div className="alert alert-ok mb-5">
          <strong>✓ {copy.apply.doneTitle}</strong>
        </div>
        <div className="form-card mb-5">
          <p className="muted-sm" style={{ marginBottom: 4 }}>{copy.apply.yourId}</p>
          <p className="font-bold" style={{ fontSize: "var(--text-3xl)", letterSpacing: "0.04em" }}>
            {state.applicationNo}
          </p>
          <p className="muted-sm mt-3">{copy.apply.doneSub}</p>
        </div>
        <StatusTimeline statuses={statuses} current="submitted" copy={copy} locale={locale} />
        <p className="mt-5">
          <a href="/track" className="btn btn-primary">{copy.apply.trackNow}</a>
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      {state.phase === "error" && (
        <div className="alert alert-err mb-4">{state.error}</div>
      )}
      <p className="muted-sm mb-5">
        Applying for: <strong className="text-default">{policyName}</strong>
      </p>

      <div className="field">
        <label htmlFor="fullName">{copy.apply.fullName} <span className="opt">*</span></label>
        <input id="fullName" value={fields.fullName} onChange={set("fullName")} required autoComplete="name" />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">{copy.apply.phone} <span className="opt">*</span></label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={set("phone")}
            required
            placeholder="98XXXXXXXX"
            autoComplete="tel"
          />
          <div className="hint">{copy.apply.phoneHint}</div>
        </div>
        <div className="field">
          <label htmlFor="email">{copy.apply.email} <span className="opt">{`(${copy.common.optional})`}</span></label>
          <input id="email" type="email" value={fields.email} onChange={set("email")} autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="city">{copy.apply.city} <span className="opt">{`(${copy.common.optional})`}</span></label>
        <input id="city" value={fields.city} onChange={set("city")} autoComplete="address-level2" />
      </div>
      <div className="field">
        <label htmlFor="msg">{copy.apply.message} <span className="opt">{`(${copy.common.optional})`}</span></label>
        <textarea id="msg" value={fields.message} onChange={set("message")} placeholder={copy.apply.msgPlaceholder} />
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={busy}>
        {busy ? <span className="spinner" /> : copy.apply.submitCta}
      </button>
      <p className="faint-text" style={{ marginTop: 12 }}>
        {copy.apply.privacyNote}
      </p>
    </form>
  );
}