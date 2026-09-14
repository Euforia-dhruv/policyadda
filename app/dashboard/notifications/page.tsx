import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { MarkReadButton } from "@/components/dashboard/MarkReadButton";

export const dynamic = "force-dynamic";

export default async function NotificationsPage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");

  const { data: notifs } = await sb
    .from("notifications")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.notifications}</h1>
        <p>{copy.dashboard.noNotifications}</p>
      </div>

      {(notifs || []).length === 0 ? (
        <div className="dash-panel">
          <p className="muted-text">{copy.dashboard.noNotifications}</p>
        </div>
      ) : (
        <div className="notif-list">
          {(notifs || []).map((n: any) => (
            <div key={n.id} className={"notif-item " + (n.read_at ? "" : "notif-unread")}>
              <div className={"notif-dot" + (n.read_at ? " notif-dim" : "")} />
              <div className="notif-text">
                <div className="notif-title">{n.title}</div>
                {n.body ? <div className="notif-body">{n.body}</div> : null}
                <div className="notif-date">{new Date(n.created_at).toLocaleString(locale === "hi" ? "hi-IN" : "en-IN")}</div>
              </div>
              {!n.read_at ? (
                <MarkReadButton notificationId={n.id} markReadLabel={copy.dashboard.markRead} />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
}