import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";
import { statusPill, fmt } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function TicketsPage() {
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

  const statusRes = await sb.from("ticket_statuses").select("code, label");
  const statusLabels = new Map<string, { en: string; hi: string }>();
  (statusRes.data || []).forEach((s: any) => statusLabels.set(s.code, s.label));

  let query = sb.from("support_tickets").select("id, ticket_no, subject, category, status_code, priority_code, assigned_to, created_at").order("created_at", { ascending: false });

  if (isAdmin(role) || isManager(role)) {
    // all
  } else if (isStaff(role)) {
    query = query.eq("assigned_to", userId);
  } else {
    query = query.eq("customer_id", userId);
  }

  const { data: tickets } = await query.limit(200);

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.allTickets}</h1>
        <p>{copy.dashboard.tickets}</p>
      </div>

      {(tickets || []).length === 0 ? (
        <div className="dash-panel">
          <p className="muted-text">{copy.dashboard.noTickets}</p>
        </div>
      ) : (
        <div className="dash-panel panel-np">
          <div className="dash-table-scroll">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>{copy.dashboard.tickets}</th>
                  <th>Category</th>
                  <th>{copy.dashboard.status}</th>
                  <th>Priority</th>
                  <th>Date</th>
                  <th>{copy.dashboard.Actions}</th>
                </tr>
              </thead>
              <tbody>
                {(tickets || []).map((t: any) => (
                  <tr key={t.id}>
                    <td className="td-mono">{t.ticket_no}</td>
                    <td className="font-semibold">{t.subject}</td>
                    <td>{t.category || "—"}</td>
                    <td>
                      <span className={statusPill(t.status_code)}>{statusLabels.get(t.status_code)?.en || t.status_code}</span>
                    </td>
                    <td>
                      <span className={statusPill(t.priority_code)}>{t.priority_code}</span>
                    </td>
                    <td className="muted-sm whitespace-nowrap">
                      {fmt(locale, t.created_at)}
                    </td>
                    <td className="td-actions">
                      <Link href={`/dashboard/tickets/${t.id}`}>{copy.dashboard.View}</Link>
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

