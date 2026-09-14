import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";

export const dynamic = "force-dynamic";

export default async function ApplicationsPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");
  const userId = user.id;

  const { data: profile } = await sb.from("profiles").select("role_code").eq("user_id", userId).maybeSingle();
  const role = (profile?.role_code || "customer") as string;

  const statusLabelsRes = await sb.from("application_statuses").select("code, label");
  const statusLabels = new Map<string, { en: string; hi: string }>();
  (statusLabelsRes.data || []).forEach((s: any) => statusLabels.set(s.code, s.label));

  const staffRes = await sb.from("profiles").select("user_id, full_name").in("role_code", ["sales", "support", "manager"]);
  const staff = new Map<string, string>((staffRes.data || []).map((s: any) => [s.user_id, s.full_name || s.user_id]));

  let query = sb
    .from("applications")
    .select("id, application_no, customer_id, full_name, phone, email, city, status_code, assigned_to, created_at, policy_id, policies(name)")
    .order("created_at", { ascending: false });

  if (isAdmin(role) || isManager(role)) {
    // all applications
  } else if (isStaff(role)) {
    query = query.eq("assigned_to", userId);
  } else {
    query = query.eq("customer_id", userId);
  }

  const { data: apps } = await query.limit(200);

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.allApplications}</h1>
        <p>{copy.dashboard.applications}</p>
      </div>

      {(apps || []).length === 0 ? (
        <div className="dash-panel">
          <p style={{ color: "var(--muted)" }}>{copy.dashboard.noApps}</p>
        </div>
      ) : (
        <div className="dash-panel" style={{ padding: 0, overflow: "hidden" }}>
          <div className="dash-table-scroll">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{copy.dashboard.idLabel}</th>
                  <th>{copy.dashboard.policy}</th>
                  {(isAdmin(role) || isManager(role)) && <th>Customer</th>}
                  <th>{copy.dashboard.roleLabel}</th>
                  <th>{copy.dashboard.status}</th>
                  {(isAdmin(role) || isManager(role)) && <th>{copy.dashboard.assignedTo}</th>}
                  <th>Date</th>
                  <th>{copy.dashboard.Actions}</th>
                </tr>
              </thead>
              <tbody>
                {(apps || []).map((a: any) => (
                  <tr key={a.id}>
                    <td className="td-mono">{a.application_no}</td>
                    <td>{policyName(a)}</td>
                    {(isAdmin(role) || isManager(role)) && <td>{a.full_name}</td>}
                    <td>{a.city || "—"}</td>
                    <td>
                      <span className={pill(a.status_code)}>{statusLabels.get(a.status_code) ? pick(locale, statusLabels.get(a.status_code)!) : a.status_code}</span>
                    </td>
                    {(isAdmin(role) || isManager(role)) && <td>{staff.get(a.assigned_to) || "—"}</td>}
                    <td style={{ whiteSpace: "nowrap", fontSize: 13, color: "var(--muted)" }}>
                      {new Date(a.created_at).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="td-actions">
                      <Link href={`/dashboard/applications/${a.id}`}>{copy.dashboard.View}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

function policyName(a: any): string {
  const l = Array.isArray(a.policies) ? a.policies[0] : a.policies;
  return l?.name || "—";
}

function pill(code: string): string {
  return (
    {
      completed: "pill pill-ok",
      cancelled: "pill pill-cancel",
      rejected: "pill pill-cancel",
      submitted: "pill pill-gold",
      under_review: "pill pill-gold",
      assigned: "pill pill-info",
      contacted: "pill pill-info",
      processing: "pill pill-info",
      on_hold: "pill pill-muted",
    }[code] ?? "pill pill-info"
  );
}