import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isAdmin } from "@/lib/roles";
import { RoleChangeForm } from "@/components/dashboard/RoleChangeForm";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
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

  const [usersRes, rolesRes] = await Promise.all([
    sb.from("profiles").select("*").order("created_at", { ascending: false }).limit(500),
    sb.from("roles").select("code, name").order("code"),
  ]);

  const users = usersRes.data || [];
  const roles = (rolesRes.data || []).map((r: any) => ({ code: r.code, name: r.name }));

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.users}</h1>
        <p>{copy.dashboard.admin}</p>
      </div>

      <div className="dash-panel" style={{ padding: 0, overflow: "hidden" }}>
        <div className="dash-table-scroll">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>{copy.dashboard.roleLabel}</th>
                <th>{copy.dashboard.joinedOn}</th>
                <th>{copy.dashboard.Actions}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => (
                <tr key={u.user_id}>
                  <td style={{ fontWeight: 600 }}>{u.full_name || "—"}</td>
                  <td style={{ fontSize: 13 }}>{u.email || "—"}</td>
                  <td style={{ fontSize: 13 }}>{u.phone || "—"}</td>
                  <td>
                    <span className={rolePill(u.role_code)} style={{ fontSize: 12 }}>{u.role_code?.replace("_", " ")}</span>
                  </td>
                  <td style={{ fontSize: 13, color: "var(--muted)", whiteSpace: "nowrap" }}>
                    {u.created_at ? fmt(locale, u.created_at) : "—"}
                  </td>
                  <td>
                    <RoleChangeForm userId={u.user_id} currentRole={u.role_code || "customer"} roles={roles} saveLabel="Change" />
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

function rolePill(code: string): string {
  return (
    {
      super_admin: "pill pill-cancel",
      admin: "pill pill-cancel",
      manager: "pill pill-gold",
      sales: "pill pill-info",
      support: "pill pill-info",
      developer: "pill pill-info",
      customer: "pill pill-muted",
    }[code] ?? "pill pill-muted"
  );
}

function fmt(locale: string, d: string) {
  return new Date(d).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
}