import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

export const metadata: Metadata = {
  title: "Dashboard — PolicyAdda",
  description: "Your PolicyAdda dashboard.",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  if (!isSupabaseConfigured()) {
    return (
      <section className="pad">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="section-head">
            <p className="eyebrow">Dashboard</p>
            <h2>Customer dashboard</h2>
          </div>
          <div className="dev-note">
            ⓘ Placeholder — the dashboard requires Supabase Auth and credentials,
            which are not configured yet. Once enabled, this page will show
            your overview, applications, policies, documents, support tickets,
            and notifications — scoped to your account only.
          </div>
        </div>
      </section>
    );
  }

  const sb = await getServerSupabase();
  const { data } = await sb!.auth.getUser();
  if (!data?.user) {
    redirect("/login");
  }

  // RLS-protected reads happen here; role gates server-side.
  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="section-head">
          <p className="eyebrow">Dashboard</p>
          <h2>Welcome back, {data.user.email}</h2>
        </div>
        <div className="grid-categories">
          <div className="card cat-card"><h3>Applications</h3><p>Your applications and their statuses (under construction).</p></div>
          <div className="card cat-card"><h3>Policies</h3><p>Your active policies and documents.</p></div>
          <div className="card cat-card"><h3>Support</h3><p>Your tickets and replies.</p></div>
        </div>
      </div>
    </section>
  );
}