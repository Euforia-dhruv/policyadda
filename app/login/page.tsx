import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login — PolicyAdda",
  description: "Secure sign-in for PolicyAdda customers and team.",
};

export default function LoginPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

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