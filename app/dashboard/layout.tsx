import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy, pick } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { isStaff, isManager, isAdmin } from "@/lib/roles";
import { rolePill } from "@/lib/utils";
import SignOutButton from "@/components/SignOutButton";
import DashToggle from "@/components/dashboard/DashToggle";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  const copy = getCopy(locale);

  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await sb.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
  const role = (profile?.role_code || "customer") as string;
  const name = profile?.full_name || user.email || "";
  const isStaffUser = isStaff(role);
  const isManagerUser = isManager(role);
  const isAdminUser = isAdmin(role);

  const links: { href: string; label: string; show: boolean }[] = [
    { href: "/dashboard", label: copy.dashboard.overview, show: true },
    { href: "/dashboard/applications", label: isStaffUser ? copy.dashboard.allApplications : copy.dashboard.applications, show: true },
    { href: "/dashboard/tickets", label: isStaffUser ? copy.dashboard.allTickets : copy.dashboard.tickets, show: true },
    { href: "/dashboard/notifications", label: copy.dashboard.notifications, show: !isStaffUser },
    { href: "/dashboard/team", label: copy.dashboard.team, show: isManagerUser && !isAdminUser },
    { href: "/dashboard/profile", label: copy.dashboard.profile, show: true },
    { href: "/dashboard/admin", label: copy.dashboard.admin, show: isAdminUser },
    { href: "/dashboard/admin/users", label: copy.dashboard.users, show: isAdminUser },
    { href: "/dashboard/admin/policies", label: copy.dashboard.policies, show: isAdminUser },
  ];

  return (
    <div className="dash-wrap">
      <DashToggle cssId="dash-side" />
      <aside className="dash-side" id="dash-side">
        <div className="dash-side-head">
          <div className="dash-side-name">{name}</div>
          <div className="mt-1">
            <span className={rolePill(role)}>{role.replace("_", " ")}</span>
          </div>
        </div>
        <nav className="dash-nav" aria-label="Dashboard">
          {links
            .filter((l) => l.show)
            .map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
        </nav>
        <div className="border-t-line pt-3.5 mt-3.5">
          <SignOutButton label={copy.dashboard.signOut} busyLabel={copy.common.loading} />
        </div>
      </aside>
      <div className="dash-side-overlay" id="dash-side-overlay" />
      <main className="dash-main">{children}</main>
    </div>
  );
}

