import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isAdmin } from "@/lib/roles";
import { fmt } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminPoliciesPage() {
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

  const { data: policies } = await sb
    .from("policies")
    .select("*, policy_categories(slug, name)")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.policies}</h1>
        <p>{copy.dashboard.admin}</p>
      </div>

      <div className="dash-panel panel-np">
        <div className="dash-table-scroll">
          <table className="dash-table">
            <thead>
              <tr>
                <th>{copy.dashboard.policy}</th>
                <th>Category</th>
                <th>Active</th>
                <th>Featured</th>
                <th>{copy.dashboard.roleLabel === "Role" ? "Updated" : "अपडेट"}</th>
              </tr>
            </thead>
            <tbody>
              {(policies || []).map((p: any) => {
                const cat = Array.isArray(p.policy_categories) ? p.policy_categories[0] : p.policy_categories;
                const catName: string = cat?.name ? String(pick(locale, cat.name) || "—") : "—";
                return (
                  <tr key={p.id}>
                    <td className="font-semibold">
                      {p.name}
                      <div className="muted-text" style={{ fontSize: "var(--text-xs)" }}>/{p.slug}</div>
                    </td>
                    <td>{catName}</td>
                    <td>{p.is_active ? <span className="pill pill-ok">Active</span> : <span className="pill pill-muted">Draft</span>}</td>
                    <td>{p.is_featured ? <span className="pill pill-info">Featured</span> : <span className="pill pill-muted">—</span>}</td>
                    <td className="muted-text whitespace-nowrap" style={{ fontSize: "var(--text-sm)" }}>
                      {p.updated_at ? fmt(locale, p.updated_at) : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dash-panel">
        <p className="muted-text" style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
          {copy.verif.note} Editing of policy descriptions is an admin-only action and is managed alongside
          verified insurer documentation.
        </p>
      </div>
    </>
  );
}

