"use client";

import { useMemo, useState } from "react";
import type { SiteCopy } from "@/content/copy";
import { GOOGLE_FORMS, validateForm, type FieldErrors, type FormKey, type GoogleFormField } from "@/content/googleForms";
import { Check } from "@/lib/icons";

const ERR_KEY = {
  required: "required",
  email: "invalidEmail",
  phone: "invalidPhone",
  pin: "invalidPin",
  select: "invalidSelect",
  date: "invalidDate",
} as const;

type Status = "idle" | "sending" | "sent" | "failed";

export default function GoogleForm({
  formKey,
  copy,
  successMessage,
  submitLabel,
  className = "",
}: {
  formKey: FormKey;
  copy: SiteCopy;
  successMessage?: string;
  submitLabel?: string;
  className?: string;
}) {
  const def = GOOGLE_FORMS[formKey];
  const fs = copy.forms;
  const stepGroups = useMemo(() => def.steps ?? [def.fields.map((f) => f.key)], [def]);
  const titles = formKey === "claim" ? fs.claimSteps : [];
  const reviewIdx = def.review ? stepGroups.length : -1;
  const total = stepGroups.length + (def.review ? 1 : 0);

  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");

  const isReview = step === reviewIdx;
  const sending = status === "sending";

  const msg = (code: string) => fs[ERR_KEY[code as keyof typeof ERR_KEY] ?? "required"];

  const focusFirst = (errs: FieldErrors) => {
    const first = def.fields.find((f) => errs[f.key]);
    if (first) document.getElementById(`${formKey}-${first.key}`)?.focus();
  };

  const set = (key: string, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const next = () => {
    const errs = validateForm(def, values, stepGroups[step]);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirst(errs);
    setStep((s) => s + 1);
  };

  const back = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending || status === "sent") return;
    const errs = validateForm(def, values);
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirst(errs);

    setStatus("sending");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: formKey, values }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      let payload: { fields?: FieldErrors } | null = null;
      try {
        payload = await res.json();
      } catch {
        /* non-JSON error body */
      }
      setErrors(payload?.fields ?? {});
      setStatus("failed");
      if (payload?.fields) {
        const bad = def.fields.find((f) => payload.fields![f.key]);
        const gi = bad ? stepGroups.findIndex((g) => g.includes(bad.key)) : -1;
        if (gi >= 0) setStep(gi);
        setTimeout(() => focusFirst(payload.fields!), 0);
      }
    } catch {
      setStatus("failed");
    }
  };

  const renderField = (f: GoogleFormField) => {
    const id = `${formKey}-${f.key}`;
    const err = errors[f.key];
    const describedBy = err ? `${id}-err` : undefined;
    const common = {
      id,
      name: f.key,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": describedBy,
      "aria-required": f.required || undefined,
      disabled: sending,
    };

    let control: React.ReactNode;
    if (f.kind === "textarea") {
      control = (
        <textarea
          {...common}
          rows={4}
          value={values[f.key] ?? ""}
          onChange={(e) => set(f.key, e.target.value)}
        />
      );
    } else if (f.kind === "select") {
      control = (
        <select {...common} value={values[f.key] ?? ""} onChange={(e) => set(f.key, e.target.value)}>
          <option value="">{fs.selectPlaceholder}</option>
          {f.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    } else {
      const type =
        f.kind === "tel" ? "tel" : f.kind === "email" ? "email" : f.kind === "date" ? "date" : f.kind === "time" ? "time" : "text";
      control = (
        <input
          {...common}
          type={type}
          inputMode={f.kind === "pincode" ? "numeric" : undefined}
          maxLength={f.kind === "pincode" ? 6 : undefined}
          autoComplete={f.autocomplete}
          value={values[f.key] ?? ""}
          onChange={(e) => set(f.key, e.target.value)}
        />
      );
    }

    return (
      <div className="field" key={f.key}>
        <label htmlFor={id}>
          {f.label}
          {f.required && (
            <span aria-hidden="true" style={{ color: "var(--bad)" }}>
              {" "}
              *
            </span>
          )}
        </label>
        {control}
        {err && (
          <p className="err" id={`${id}-err`}>
            {msg(err)}
          </p>
        )}
      </div>
    );
  };

  if (status === "sent") {
    return (
      <div className={`form-card gf gf-done ${className}`} role="status" aria-live="polite">
        <div className="form-ok">
          <Check size={18} className="shrink-0" />
          <span>{successMessage ?? fs.success}</span>
        </div>
      </div>
    );
  }

  return (
    <form className={`form-card gf ${className}`} onSubmit={submit} noValidate>
      {total > 1 && (
        <ol className="gf-steps" aria-label={titles.join(" → ")}>
          {titles.map((t, i) => (
            <li
              key={t}
              className={`gf-step${i === step ? " is-active" : i < step ? " is-done" : ""}`}
              aria-current={i === step ? "step" : undefined}
            >
              <span className="gf-step-no">{String(i + 1).padStart(2, "0")}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      )}

      {status === "failed" && !Object.keys(errors).length && (
        <p className="form-err" role="alert">
          {fs.failed}
        </p>
      )}

      {isReview ? (
        <dl className="gf-review">
          {def.fields.map((f) => (
            <div key={f.key}>
              <dt>{f.label}</dt>
              <dd>{values[f.key] || "—"}</dd>
            </div>
          ))}
        </dl>
      ) : (
        stepGroups[step].map((k) => renderField(def.fields.find((f) => f.key === k)!))
      )}

      <div className="gf-actions">
        {step > 0 && (
          <button type="button" className="btn btn-ghost gf-back" onClick={back} disabled={sending}>
            {fs.back}
          </button>
        )}
        {step < total - 1 ? (
          <button type="button" className="btn btn-primary" onClick={next} disabled={sending}>
            {fs.next}
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={sending} aria-busy={sending}>
            {sending ? fs.submitting : submitLabel ?? fs.submit}
          </button>
        )}
      </div>
    </form>
  );
}
