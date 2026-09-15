import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isAdmin } from "@/lib/roles";
import { statusPill, policyName, fmt } from "@/lib/utils";
import StatCard from "@/components/dashboard/StatCard";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await sb.from("profiles").select("role_code").eq("user_id", user.id).maybeSingle();
  const role = (profile?.role_code || "customer") as string;
  if (!isAdmin(role)) redirect("/dashboard");

  const [usersRes, appsRes, ticketsRes, statusRes] = await Promise.all([
    sb.from("profiles").select("user_id", { count: "exact", head: true }),
    sb.from("applications").select("id, application_no, full_name, status_code, created_at, policies(name)").order("created_at", { ascending: false }).limit(200),
    sb.from("support_tickets").select("id, ticket_no, subject, status_code, created_at").order("created_at", { ascending: false }).limit(200),
    sb.from("application_statuses").select("code, label"),
  ]);

  const usersCount = usersRes.count ?? 0;
  const apps = appsRes.data || [];
  const tickets = ticketsRes.data || [];

  const statusLabels = new Map<string, { en: string; hi: string }>();
  (statusRes.data || []).forEach((s: any) => statusLabels.set(s.code, s.label));

  const byStatus = new Map<string, number>();
  apps.forEach((a: any) => byStatus.set(a.status_code, (byStatus.get(a.status_code) || 0) + 1));

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.admin}</h1>
        <p>{copy.dashboard.overview}</p>
      </div>

      <div className="stat-grid">
        <StatCard label={copy.dashboard.totalUsers} value={usersCount.toString()} />
        <StatCard label={copy.dashboard.totalApplications} value={apps.length.toString()} />
        <StatCard label={copy.dashboard.totalTickets} value={tickets.length.toString()} />
        <StatCard label={copy.dashboard.pendingActions} value={((byStatus.get("submitted") || 0) + (byStatus.get("under_review") || 0)).toString()} />
      </div>

      <div className="dash-panel">
        <h3 className="flex items-center justify-between">
          <span>{copy.dashboard.allApplications}</span>
          <Link href="/dashboard/applications" className="dash-link">
            {copy.dashboard.View} →
          </Link>
        </h3>
        <div className="dash-table-scroll">
          <table className="dash-table">
            <thead>
              <tr>
                <th>{copy.dashboard.idLabel}</th>
                <th>Customer</th>
                <th>{copy.dashboard.policy}</th>
                <th>{copy.dashboard.status}</th>
                <th>Date</th>
                <th>{copy.dashboard.Actions}</th>
              </tr>
            </thead>
            <tbody>
              {apps.slice(0, 10).map((a: any) => (
                <tr key={a.id}>
                  <td className="td-mono">{a.application_no}</td>
                  <td>{a.full_name}</td>
                  <td>{policyName(a)}</td>
                  <td>
                    <span className={statusPill(a.status_code)}>{statusLabels.get(a.status_code) ? pick(locale, statusLabels.get(a.status_code)!) : a.status_code}</span>
                  </td>
                  <td className="muted-sm whitespace-nowrap">{fmt(locale, a.created_at)}</td>
                  <td className="td-actions">
                    <Link href={`/dashboard/applications/${a.id}`}>{copy.dashboard.View}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dash-panel">
        <h3>
          {copy.dashboard.allTickets} · <Link href="/dashboard/admin/users" className="dash-link">{copy.dashboard.users} →</Link>
        </h3>
        <div className="dash-table-scroll">
          <table className="dash-table">
            <thead>
              <tr>
                <th>No</th>
                <th>{copy.dashboard.tickets}</th>
                <th>{copy.dashboard.status}</th>
                <th>Date</th>
                <th>{copy.dashboard.Actions}</th>
              </tr>
            </thead>
            <tbody>
              {tickets.slice(0, 8).map((t: any) => (
                <tr key={t.id}>
                  <td className="td-mono">{t.ticket_no}</td>
                  <td>{t.subject}</td>
                  <td>
                    <span className={statusPill(t.status_code)}>{t.status_code}</span>
                  </td>
                  <td className="muted-sm whitespace-nowrap">{fmt(locale, t.created_at)}</td>
                  <td className="td-actions">
                    <Link href={`/dashboard/tickets/${t.id}`}>{copy.dashboard.View}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

