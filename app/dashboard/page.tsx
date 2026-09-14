import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import SignOutButton from "@/components/SignOutButton";

export const metadata: Metadata = {
  title: "Dashboard — PolicyAdda",
  description: "Your PolicyAdda dashboard.",
};

export const dynamic = "force-dynamic";

interface DashboardRow {
  application_no: string;
  status_code: string;
  created_at: string;
  updated_at?: string;
  policies?: { slug?: string; name?: string } | null;
  application_statuses?: { label?: { en: string; hi: string } } | null;
}

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
  const { data } = sb ? await sb.auth.getUser() : { data: null };
  if (!data?.user) {
    redirect("/login");
  }
  const userId = data.user.id;

  const profileRes = await sb!
    .from("profiles")
    .select("full_name, role_code, phone, email")
    .eq("user_id", userId)
    .maybeSingle();
  const profile = profileRes.data as
    | { full_name: string | null; role_code: string | null; phone: string | null; email: string | null }
    | null;

  // RLS scopes this to the signed-in user (own rows / assigned staff rows).
  const appsRes = await sb!
    .from("applications")
    .select("application_no, status_code, created_at, updated_at, policies(slug, name), application_statuses(label)")
    .order("created_at", { ascending: false })
    .limit(50);
  const apps = (appsRes.error ? [] : (appsRes.data as DashboardRow[])) ?? [];

  const name = profile?.full_name || data.user.email || "";
  const role = profile?.role_code || "customer";

  return (
    <section className="pad">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
          <div>
            <p className="eyebrow">Dashboard</p>
            <h2>Welcome back, {name}</h2>
            <p className="lead">{copy.dashboard.lead}</p>
          </div>
          <SignOutButton label={copy.dashboard.signOut} busyLabel={copy.common.loading} />
        </div>

        <div className="support-grid" style={{ marginBottom: 40 }}>
          <div className="card support-card">
            <div>
              <div className="ico">👤</div>
              <h3>{copy.dashboard.title}</h3>
              <p className="big">{name}</p>
              {profile?.email ? <p>{profile.email}</p> : null}
              {profile?.phone ? <p>{profile.phone}</p> : null}
            </div>
          </div>
          <div className="card support-card">
            <div>
              <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>{copy.dashboard.role}</p>
              <p className="big" style={{ textTransform: "capitalize" }}>{role.replace("_", " ")}</p>
            </div>
          </div>
        </div>

        <h3 style={{ marginBottom: 16 }}>{copy.dashboard.applications}</h3>
        {apps.length === 0 ? (
          <div className="card" style={{ padding: 26 }}>
            <p style={{ color: "var(--muted)", marginBottom: 14 }}>{copy.dashboard.noApps}</p>
            <a href="/policies" className="btn btn-primary btn-sm">{copy.dashboard.noAppsCta}</a>
          </div>
        ) : (
          <div className="acc-list">
            {apps.map((a) => {
              const label = a.application_statuses?.label ? pick(locale, a.application_statuses.label) : a.status_code;
              return (
                <div className="card" key={a.application_no} style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontWeight: 750, fontSize: 17 }}>
                        {a.policies?.name || a.policies?.slug || "—"}
                      </p>
                      <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4 }}>
                        {copy.dashboard.idLabel}: <span style={{ color: "var(--text)", fontWeight: 650 }}>{a.application_no}</span>
                        {" · "}{copy.dashboard.submitted}:{" "}
                        {new Date(a.created_at).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                    </div>
                    <span className="pill pill-ok">{label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}