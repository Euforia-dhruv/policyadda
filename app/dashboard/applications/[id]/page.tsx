import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";
import { statusPill, policyName, fmt } from "@/lib/utils";
import { StatusUpdateForm } from "@/components/dashboard/StatusUpdateForm";
import { NoteForm } from "@/components/dashboard/NoteForm";
import { AssignForm } from "@/components/dashboard/AssignForm";

export const dynamic = "force-dynamic";

export default async function AppDetailPage({ params }: { params: Promise<{ id: string }> }) {
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

  const { data: app } = await sb
    .from("applications")
    .select("*, policies(name, slug), application_statuses(label)")
    .eq("id", id)
    .maybeSingle();

  if (!app) notFound();

  // Access guard: staff can view assigned/all; customers can view their own
  const canView = isStaff(role) || app.customer_id === userId;
  if (!canView) notFound();

  const isStaffUser = isStaff(role);
  const canAssign = isManagerUnit(role);

  const [statusesRes, historyRes, notesRes, staffRes] = await Promise.all([
    sb.from("application_statuses").select("code, label, sort").order("sort"),
    sb.from("application_status_history").select("*, profiles(full_name)").eq("application_id", id).order("created_at", { ascending: true }),
    sb.from("application_status_history").select("*, profiles(full_name)").eq("application_id", id).not("note", "is", null).order("created_at", { ascending: false }),
    canAssign ? sb.from("profiles").select("user_id, full_name").in("role_code", ["sales", "support", "manager"]) : Promise.resolve({ data: [] }),
  ]);

  const statuses = (statusesRes.data || []).map((s: any) => ({ code: s.code, label: String(pick(locale, s.label) || s.code), sort: s.sort }));
  const statusLabelMap = new Map<string, string>(statuses.map((s) => [s.code, s.label]));
  const history = historyRes.data || [];
  const notes = notesRes.data || [];
  const staff = (staffRes.data || []).map((s: any) => ({ userId: s.user_id, fullName: s.full_name || s.user_id }));

  const currentSort = statuses.find((s: any) => s.code === app.status_code)?.sort ?? 0;
  const assigneeRes = staff.find((s) => s.userId === app.assigned_to);

  return (
    <>
      <div className="dash-head">
        <Link href="/dashboard/applications" className="dash-link">
          ← {copy.dashboard.Back}
        </Link>
        <h1 className="mt-2">{app.application_no}</h1>
        <p className="capitalize">
          {policyName(app)} · <span className={statusPill(app.status_code)}>{pick(locale, app.application_statuses?.label || { en: app.status_code, hi: app.status_code })}</span>
        </p>
      </div>

      <div className="dash-detail">
        <div>
          <div className="dash-panel">
            <h3>{copy.dashboard.customerInfo}</h3>
            <dl>
              <DetailField label="Name" value={app.full_name} />
              <DetailField label="Phone" value={app.phone} />
              <DetailField label="Email" value={app.email || "—"} />
              <DetailField label="City" value={app.city || "—"} />
              {app.message ? <DetailField label="Message" value={app.message} /> : null}
              <DetailField label="Source" value={app.source} />
              <DetailField label={copy.dashboard.idLabel} value={app.application_no} mono />
            </dl>
          </div>

          <div className="dash-panel">
            <h3>{copy.dashboard.statusHistory}</h3>
            {history.length === 0 ? (
              <p className="muted-text" style={{ fontSize: "var(--text-sm)" }}>{app.status_code}</p>
            ) : (
              <div className="dash-timeline">
                {history.map((h: any) => {
                  const isCurrent = h.to_status === app.status_code && h.to_status === app.status_code;
                  const done = currentSort >= (statuses.find((s: any) => s.code === h.to_status)?.sort ?? 0);
                  return (
                    <div key={h.id} className={"dash-timeline-item " + (isCurrent ? "tl-current" : done ? "tl-done" : "")}>
                      <div className="dash-timeline-label">{statusLabelMap.get(h.to_status) || h.to_status}</div>
                      {isStaffUser && h.note ? <div className="dash-timeline-note">{h.note}</div> : null}
                      <div className="dash-timeline-date">
                        {fmt(locale, h.created_at)} · {h.profiles?.full_name || "System"}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {isStaffUser && notes.length > 0 ? (
            <div className="dash-panel">
              <h3>{copy.dashboard.notes}</h3>
              {notes.map((n: any) => (
                <div className="note-item" key={n.id}>
                  <div className="note-meta">
                    {n.profiles?.full_name || "System"} · {fmt(locale, n.created_at)}
                  </div>
                  <div className="note-body">{n.note}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="flex flex-col gap-5">
          {isStaffUser ? (
            <div className="dash-panel">
              <h3>{copy.dashboard.updateStatus}</h3>
              <StatusUpdateForm applicationId={app.id} currentStatus={app.status_code} statuses={statuses} actionLabel={copy.dashboard.saveChanges} />
            </div>
          ) : null}

          {isStaffUser ? (
            <div className="dash-panel">
              <h3>{copy.dashboard.internalNote}</h3>
              <NoteForm applicationId={app.id} addLabel={copy.dashboard.addNote} placeholder={copy.dashboard.notes} />
            </div>
          ) : null}

          {canAssign ? (
            <div className="dash-panel">
              <h3>{copy.dashboard.assignTo}</h3>
              <AssignForm
                applicationId={app.id}
                staff={staff}
                currentAssignee={app.assigned_to || null}
                assignLabel={copy.dashboard.assignTo}
                unassigned={copy.dashboard.unassigned}
              />
            </div>
          ) : null}

          {isStaffUser ? (
            <div className="dash-panel">
              <h3>{copy.dashboard.assignedTo}</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text)" }}>{assigneeRes?.fullName || copy.dashboard.unassigned}</p>
              {app.assigned_at ? <p className="muted-text mt-1" style={{ fontSize: "var(--text-xs)" }}>{fmt(locale, app.assigned_at)}</p> : null}
            </div>
          ) : null}
        </aside>
      </div>
    </>
  );
}

function DetailField({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="detail-field">
      <dt>{label}</dt>
      <dd className={mono ? "td-mono" : ""} style={mono ? { fontFamily: "monospace" } : undefined}>
        {value}
      </dd>
    </div>
  );
}

function isManagerUnit(role: string): boolean {
  return isManager(role);
}