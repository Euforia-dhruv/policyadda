import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";

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
          <p style={{ color: "var(--muted)" }}>{copy.dashboard.noTickets}</p>
        </div>
      ) : (
        <div className="dash-panel" style={{ padding: 0, overflow: "hidden" }}>
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
                    <td style={{ fontWeight: 600 }}>{t.subject}</td>
                    <td>{t.category || "—"}</td>
                    <td>
                      <span className={pill(t.status_code)}>{statusLabels.get(t.status_code)?.en || t.status_code}</span>
                    </td>
                    <td>
                      <span className={pill(t.priority_code)}>{t.priority_code}</span>
                    </td>
                    <td style={{ whiteSpace: "nowrap", fontSize: 13, color: "var(--muted)" }}>
                      {new Date(t.created_at).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}
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

function pill(code: string): string {
  return (
    {
      open: "pill pill-gold",
      in_progress: "pill pill-info",
      waiting_customer: "pill pill-info",
      resolved: "pill pill-ok",
      closed: "pill pill-muted",
      low: "pill pill-muted",
      normal: "pill pill-info",
      high: "pill pill-gold",
      urgent: "pill pill-cancel",
    }[code] ?? "pill pill-info"
  );
}