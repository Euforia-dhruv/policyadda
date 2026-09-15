"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import type { SiteCopy } from "@/content/copy";
import PolicyAddaBrand from "./brand/PolicyAddaBrand";

type Mode = "signin" | "signup";

export default function LoginForm({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const [mode, setMode] = useState<Mode>("signin");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "notconfigured">("idle");
  const [msg, setMsg] = useState("");

  async function signIn(email: string, password: string) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    if (!res.ok) {
      if (res.status === 503) {
        setStatus("notconfigured");
        setMsg(json.message ?? "Authentication not configured.");
      } else {
        setStatus("error");
        setMsg(json.error ?? "Sign-in failed.");
      }
      return false;
    }
    return true;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    try {
      if (mode === "signup") {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, phone, email, password, city }),
        });
        const json = await res.json();
        if (!res.ok) {
          setStatus("error");
          setMsg(json.error ?? "Sign-up failed.");
          return;
        }
        setStatus("ok");
        setMsg(copy.auth.success);
        await signIn(email.trim(), password);
        window.location.href = "/dashboard";
        return;
      }

      const ok = await signIn(email, password);
      if (ok) window.location.href = "/dashboard";
    } catch {
      setStatus("error");
      setMsg("Network error. Please retry.");
    } finally {
      setBusy(false);
    }
  }

  const t = copy.auth;

  return (
    <form className="form-card w-full" onSubmit={submit}>
      <div className="auth-brand">
        <PolicyAddaBrand variant="icon" />
      </div>
      <h3 className="mb-1">{mode === "signin" ? t.signInTitle : t.signUpTitle}</h3>
      <p className="muted-text text-sm mb-[18px]">
        {mode === "signin" ? t.loginLead : t.signUpLead}
      </p>

      {mode === "signup" && (
        <>
          <div className="field">
            <label>{t.name}</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} required minLength={2} autoComplete="name" />
          </div>
          <div className="field">
            <label>
              {t.phone} <span className="opt">({t.phoneHint})</span>
            </label>
            <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} inputMode="numeric" required pattern="[6-9][0-9]{9}" autoComplete="tel" />
          </div>
          <div className="field">
            <label>{t.city} <span className="opt">({copy.common.optional})</span></label>
            <input value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" />
          </div>
        </>
      )}

      <div className="field">
        <label>{t.email}</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </div>
      <div className="field">
        <label>{t.password}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
      </div>

      <button type="submit" className="btn btn-primary btn-block mt-1" disabled={busy}>
        {busy ? copy.common.loading : mode === "signin" ? t.signInCta : t.signUpCta}
      </button>

      {status === "notconfigured" && (
        <div className="dev-note mt-4">ⓘ {msg}</div>
      )}
      {status === "error" && (
        <div className="form-err mt-4">{msg}</div>
      )}
      {status === "ok" && (
        <div className="form-ok mt-4">{msg}</div>
      )}

      <p className="muted-text text-xs mt-[18px]">
        {mode === "signin" ? (
          <button type="button" className="link-btn" onClick={() => { setMode("signup"); setStatus("idle"); }}>{t.switchToSignUp}</button>
        ) : (
          <button type="button" className="link-btn" onClick={() => { setMode("signin"); setStatus("idle"); }}>{t.switchToLogin}</button>
        )}
        <span className="mt-2 block">{t.policyNote}</span>
      </p>
    </form>
  );
}