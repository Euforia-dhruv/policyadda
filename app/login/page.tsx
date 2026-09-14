import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login — PolicyAdda",
  description: "Secure sign-in for PolicyAdda customers and team.",
};

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  let signedInUser = false;
  if (isSupabaseConfigured()) {
    try {
      const sb = await getServerSupabase();
      const session = sb ? await sb.auth.getUser() : { data: null };
      signedInUser = Boolean(session.data?.user);
    } catch {
      // keep the login form reachable if the session probe fails
    }
  }
  if (signedInUser) redirect("/dashboard");

  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 520 }}>
        <div className="section-head">
          <p className="eyebrow">{copy.nav.login}</p>
          <h2>{copy.nav.login}</h2>
          <p className="lead">
            Access your applications, policies, documents, and support tickets.
          </p>
        </div>

        <LoginForm copy={copy} locale={locale} />

        {!isSupabaseConfigured() && (
          <div className="dev-note" style={{ marginTop: 18 }}>
            ⓘ Development state: secure customer accounts are enabled through Supabase Auth.
            The login will activate once the PolicyAdda team provides project credentials (see docs/BUSINESS-INFO-NEEDED.md and docs/ARCHITECTURE.md).
          </div>
        )}
      </div>
    </section>
  );
}