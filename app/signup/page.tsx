"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="card p-8 w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-2">Check your email</h1>
          <p className="muted-text">We sent a confirmation link to <strong>{email}</strong>. Please verify to continue.</p>
          <Link href="/login" className="btn btn-primary mt-6 inline-block">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="card p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="muted-text mt-1">Join PolicyAdda</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-1 font-medium text-sm">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 mb-3 bg-[var(--surface)] text-[var(--text)]"
            placeholder="Your name"
            autoFocus
            required
          />
          <label className="block mb-1 font-medium text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 mb-3 bg-[var(--surface)] text-[var(--text)]"
            placeholder="you@example.com"
            required
          />
          <label className="block mb-1 font-medium text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 mb-4 bg-[var(--surface)] text-[var(--text)]"
            placeholder="Min 6 characters"
            minLength={6}
            required
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm mt-4 muted-text">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--accent-strong)] font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}
