import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";
import { statusPill, policyName } from "@/lib/utils";
import StatCard from "@/components/dashboard/StatCard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");
  const userId = user.id;

  const { data: profile } = await sb.from("profiles").select("*").eq("user_id", userId).maybeSingle();
  const role = (profile?.role_code || "customer") as string;
  const name = profile?.full_name || user.email || "";

  const statusLabelsRes = await sb.from("application_statuses").select("code, label");
  const statusLabels = new Map<string, { en: string; hi: string }>();
  (statusLabelsRes.data || []).forEach((s: any) => statusLabels.set(s.code, s.label));

  let apps: any[] = [];
  let tickets: any[] = [];

  if (isAdmin(role) || isManager(role)) {
    const [a, t] = await Promise.all([
      sb.from("applications").select("id, application_no, status_code, full_name, created_at, policies(name)").order("created_at", { ascending: false }).limit(50),
      sb.from("support_tickets").select("id, ticket_no, subject, status_code, created_at").order("created_at", { ascending: false }).limit(20),
    ]);
    apps = a.data || [];
    tickets = t.data || [];
  } else if (isStaff(role)) {
    const [a, t] = await Promise.all([
      sb.from("applications").select("id, application_no, status_code, full_name, created_at, policies(name)").eq("assigned_to", userId).order("created_at", { ascending: false }).limit(50),
      sb.from("support_tickets").select("id, ticket_no, subject, status_code, created_at").eq("assigned_to", userId).order("created_at", { ascending: false }).limit(20),
    ]);
    apps = a.data || [];
    tickets = t.data || [];
  } else {
    const [a, t] = await Promise.all([
      sb.from("applications").select("id, application_no, status_code, full_name, created_at, policies(name)").eq("customer_id", userId).order("created_at", { ascending: false }).limit(50),
      sb.from("support_tickets").select("id, ticket_no, subject, status_code, created_at, priority_code").eq("customer_id", userId).order("created_at", { ascending: false }).limit(20),
    ]);
    apps = a.data || [];
    tickets = t.data || [];
  }

  const counts = countBy(apps, (a: any) => a.status_code);
  const ticketCounts = countBy(tickets, (t: any) => t.status_code);

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.title}</h1>
        <p>{copy.dashboard.lead}</p>
      </div>

      <div className="stat-grid">
        <StatCard label={copy.dashboard.applications} value={apps.length.toString()} />
        <StatCard label={copy.dashboard.tickets} value={tickets.length.toString()} />
        {isAdmin(role) || isManager(role) ? (
          <>
            <StatCard label={copy.dashboard.workload} value={((counts.get("submitted") || 0) + (counts.get("under_review") || 0) + (counts.get("assigned") || 0)).toString()} />
            <StatCard label="Pending" value={((ticketCounts.get("open") || 0) + (ticketCounts.get("in_progress") || 0) + (ticketCounts.get("waiting_customer") || 0)).toString()} />
          </>
        ) : null}
      </div>

      <div className="dash-panel">
        <h3 className="flex items-center justify-between">
          <span>{copy.dashboard.applications}</span>
          <Link href="/dashboard/applications" className="dash-link">
            {copy.dashboard.View} →
          </Link>
        </h3>
        {apps.length === 0 ? (
          <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>{copy.dashboard.noApps}</p>
        ) : (
          <div className="dash-table-scroll">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{copy.dashboard.idLabel}</th>
                  <th>{copy.dashboard.policy}</th>
                  <th>{copy.dashboard.status}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {apps.slice(0, 8).map((a) => (
                  <tr key={a.application_no}>
                    <td className="td-mono">{a.application_no}</td>
                    <td>{a.policies?.[0]?.name ?? policyName(a) ?? "—"}</td>
                    <td>
                      <span className={statusPill(a.status_code)}>{statusLabels.get(a.status_code) ? pick(locale, statusLabels.get(a.status_code)!) : a.status_code}</span>
                    </td>
                    <td className="td-actions">
                      <Link href={`/dashboard/applications/${a.id ?? a.application_no}`}>{copy.dashboard.View}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="dash-panel">
        <h3 className="flex items-center justify-between">
          <span>{copy.dashboard.tickets}</span>
          <Link href="/dashboard/tickets" className="dash-link">
            {copy.dashboard.View} →
          </Link>
        </h3>
        {tickets.length === 0 ? (
          <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>{copy.dashboard.noTickets}</p>
        ) : (
          <div className="dash-table-scroll">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>{copy.dashboard.tickets}</th>
                  <th>{copy.dashboard.status}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tickets.slice(0, 6).map((t) => (
                  <tr key={t.ticket_no}>
                    <td className="td-mono">{t.ticket_no}</td>
                    <td>{t.subject}</td>
                    <td>
                      <span className={statusPill(t.status_code)}>{t.status_code}</span>
                    </td>
                    <td className="td-actions">
                      <Link href={`/dashboard/tickets/${t.id ?? t.ticket_no}`}>{copy.dashboard.View}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function countBy(arr: any[], key: (x: any) => string): Map<string, number> {
  const m = new Map<string, number>();
  for (const x of arr) m.set(key(x), (m.get(key(x)) || 0) + 1);
  return m;
}