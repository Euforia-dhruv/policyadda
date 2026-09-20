"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="card p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="muted-text mt-1">Welcome back to PolicyAdda</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-1 font-medium text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 mb-3 bg-[var(--surface)] text-[var(--text)]"
            placeholder="you@example.com"
            autoFocus
            required
          />
          <label className="block mb-1 font-medium text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 mb-4 bg-[var(--surface)] text-[var(--text)]"
            placeholder="Your password"
            required
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm mt-4 muted-text">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[var(--accent-strong)] font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
