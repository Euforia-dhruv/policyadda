import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff } from "@/lib/roles";
import { statusPill, fmt } from "@/lib/utils";
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
        <Link href="/dashboard/tickets" className="dash-link">
          ← {copy.dashboard.Back}
        </Link>
        <h1 className="mt-2">{ticket.ticket_no}</h1>
        <p>
          {ticket.subject} ·           <span className={statusPill(ticket.status_code)}>{ticket.status_code}</span>
        </p>
      </div>

      <div className="dash-detail dash-detail-full">
        <div className="dash-panel">
          <p className="muted-text" style={{ fontSize: "var(--text-sm)", marginBottom: 4 }}>
            {fmt(locale, ticket.created_at)} · {ticket.category || "General"} · Priority: {ticket.priority_code}
          </p>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text)", whiteSpace: "pre-wrap" }}>{ticket.description}</p>
        </div>

        <div className="dash-panel">
          <h3>Messages</h3>
          {(messages || []).length === 0 ? (
            <p className="muted-sm">No messages yet.</p>
          ) : (
            <div className="msg-thread">
              {(messages || []).map((m: any) => {
                const fromCustomer = m.sender_role === "customer";
                return (
                  <div key={m.id} className={"msg-item " + (fromCustomer ? "msg-customer" : "msg-staff")}>
                    <div className="text-sm">{m.body}</div>
                    <div className="msg-meta">
                      {m.profiles?.full_name || "User"} · {fmt(locale, m.created_at)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {isStaffUser ? <TicketStatusForm ticketId={ticket.id} currentStatus={ticket.status_code} statuses={statuses} /> : null}

          <div className="mt-4">
            <TicketReplyForm ticketId={ticket.id} replyLabel="Send" placeholder="Write a reply…" />
          </div>
        </div>
      </div>
    </>
  );
}

