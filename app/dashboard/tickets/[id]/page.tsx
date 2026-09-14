import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff } from "@/lib/roles";
import { TicketReplyForm } from "@/components/dashboard/TicketReplyForm";
import { TicketStatusForm } from "@/components/dashboard/TicketStatusForm";

export const dynamic = "force-dynamic";

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
  const isStaffUser = isStaff(role);

  const { data: ticket } = await sb.from("support_tickets").select("*").eq("id", id).maybeSingle();
  if (!ticket) notFound();
  if (!isStaffUser && ticket.customer_id !== userId) notFound();

  const { data: messages } = await sb
    .from("support_messages")
    .select("*, profiles(full_name, role_code)")
    .eq("ticket_id", id)
    .order("created_at", { ascending: true });

  const statusesRes = await sb.from("ticket_statuses").select("code, label").order("sort");
  const statuses = (statusesRes.data || []).map((s: any) => ({ code: s.code, label: s.label?.[locale === "hi" ? "hi" : "en"] || s.code }));

  return (
    <>
      <div className="dash-head">
        <Link href="/dashboard/tickets" style={{ fontSize: 13, color: "var(--accent-strong)", textDecoration: "none", fontWeight: 600 }}>
          ← {copy.dashboard.Back}
        </Link>
        <h1 style={{ marginTop: 8 }}>{ticket.ticket_no}</h1>
        <p>
          {ticket.subject} · <span className={pill(ticket.status_code)}>{ticket.status_code}</span>
        </p>
      </div>

      <div className="dash-detail dash-detail-full">
        <div className="dash-panel">
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 4 }}>
            {fmt(locale, ticket.created_at)} · {ticket.category || "General"} · Priority: {ticket.priority_code}
          </p>
          <p style={{ fontSize: 15, color: "var(--text)", whiteSpace: "pre-wrap" }}>{ticket.description}</p>
        </div>

        <div className="dash-panel">
          <h3>Messages</h3>
          {(messages || []).length === 0 ? (
            <p style={{ color: "var(--muted)", fontSize: 14 }}>No messages yet.</p>
          ) : (
            <div className="msg-thread">
              {(messages || []).map((m: any) => {
                const fromCustomer = m.sender_role === "customer";
                return (
                  <div key={m.id} className={"msg-item " + (fromCustomer ? "msg-customer" : "msg-staff")}>
                    <div style={{ fontSize: 14 }}>{m.body}</div>
                    <div className="msg-meta">
                      {m.profiles?.full_name || "User"} · {fmt(locale, m.created_at)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {isStaffUser ? <TicketStatusForm ticketId={ticket.id} currentStatus={ticket.status_code} statuses={statuses} /> : null}

          <div style={{ marginTop: 16 }}>
            <TicketReplyForm ticketId={ticket.id} replyLabel="Send" placeholder="Write a reply…" />
          </div>
        </div>
      </div>
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
    }[code] ?? "pill pill-info"
  );
}

function fmt(locale: string, d: string): string {
  return new Date(d).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
}