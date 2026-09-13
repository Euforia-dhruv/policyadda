"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";

export default function LoginForm({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "notconfigured">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (res.status === 503) {
        setStatus("notconfigured");
        setMsg(json.message ?? "Authentication not configured.");
      } else if (res.ok) {
        setStatus("ok");
        setMsg("Signed in. Redirecting to dashboard…");
        window.location.href = "/dashboard";
      } else {
        setStatus("error");
        setMsg(json.error ?? "Sign-in failed.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please retry.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form-card" onSubmit={submit} style={{ width: "100%" }}>
      <h3 style={{ marginBottom: 6 }}>{copy.nav.login}</h3>
      <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
        Secure sign-in for customers and PolicyAdda team members.
      </p>

      {status === "notconfigured" && (
        <div className="dev-note" style={{ marginBottom: 14 }}>ⓘ {msg}</div>
      )}
      {status === "error" && (
        <div className="alert alert-err" style={{ marginBottom: 14 }}>{msg}</div>
      )}
      {status === "ok" && (
        <div className="alert alert-ok" style={{ marginBottom: 14 }}>{msg}</div>
      )}

      <div className="field">
        <label htmlFor="liEmail">Email</label>
        <input id="liEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="liPass">Password</label>
        <input id="liPass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={busy}>
        {busy ? <span className="spinner" /> : copy.nav.login}
      </button>

      <p style={{ fontSize: 12.5, color: "var(--faint)", marginTop: 14 }}>
        Customer accounts activate once your application has been processed and Authentication is enabled.
      </p>
    </form>
  );
}