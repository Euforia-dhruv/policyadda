import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isManager } from "@/lib/roles";
import { statusPill, policyName, fmt } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
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
  if (!isManager(role)) redirect("/dashboard");

  const [staffRes, appsRes, statusRes] = await Promise.all([
    sb.from("profiles").select("user_id, full_name, role_code").in("role_code", ["sales", "support", "manager"]).order("full_name"),
    sb.from("applications").select("id, status_code, assigned_to, application_no, full_name, created_at, policies(name)").order("created_at", { ascending: false }).limit(500),
    sb.from("application_statuses").select("code, label"),
  ]);

  const staff = staffRes.data || [];
  const apps = appsRes.data || [];
  const statusLabels = new Map<string, { en: string; hi: string }>();
  (statusRes.data || []).forEach((s: any) => statusLabels.set(s.code, s.label));

  const workload = new Map<string, { assigned: number; pending: number }>();
  staff.forEach((s: any) => workload.set(s.user_id, { assigned: 0, pending: 0 }));
  apps.forEach((a: any) => {
    if (!a.assigned_to) return;
    const w = workload.get(a.assigned_to);
    if (!w) return;
    w.assigned += 1;
    if (["submitted", "under_review", "assigned", "contacted"].includes(a.status_code)) w.pending += 1;
  });

  const unassigned = apps.filter((a) => !a.assigned_to);

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.team}</h1>
        <p>{copy.dashboard.workload}</p>
      </div>

      <div className="stat-grid">
        {staff.length === 0 ? (
          <div className="dash-panel">
            <p className="muted-text">No team members yet.</p>
          </div>
        ) : (
          staff.map((s: any) => {
            const w = workload.get(s.user_id) || { assigned: 0, pending: 0 };
            return (
              <div className="stat-card" key={s.user_id}>
                <div className="stat-label stat-label-cap">
                  {s.full_name || s.user_id}
                </div>
                <div className="muted-text text-xs mt-0">{s.role_code}</div>
                <div className="stat-value">{w.assigned}</div>
                <div className="stat-sub">
                  {w.pending} pending · {w.assigned - w.pending} progressing
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="dash-panel">
        <h3>
          Unassigned applications ({unassigned.length})
        </h3>
        {unassigned.length === 0 ? (
          <p className="muted-sm">All applications are assigned.</p>
        ) : (
          <div className="dash-table-scroll">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{copy.dashboard.idLabel}</th>
                  <th>Customer</th>
                  <th>{copy.dashboard.policy}</th>
                  <th>{copy.dashboard.status}</th>
                  <th>Date</th>
                  <th>{copy.dashboard.assignTo}</th>
                </tr>
              </thead>
              <tbody>
                {unassigned.slice(0, 12).map((a: any) => (
                  <tr key={a.id}>
                    <td className="td-mono">
                      <Link href={`/dashboard/applications/${a.id}`} className="dash-link" style={{ fontWeight: "inherit" }}>
                        {a.application_no}
                      </Link>
                    </td>
                    <td>{a.full_name}</td>
                    <td>{policyName(a)}</td>
                    <td>
                      <span className={statusPill(a.status_code)}>{statusLabels.get(a.status_code) ? pick(locale, statusLabels.get(a.status_code)!) : a.status_code}</span>
                    </td>
                    <td className="muted-sm whitespace-nowrap">{fmt(locale, a.created_at)}</td>
                    <td>
                      <Link href={`/dashboard/applications/${a.id}`} className="dash-link">
                        {copy.dashboard.assignTo} →
                      </Link>
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

