import { redirect } from "next/navigation";
import { getServerSupabase } from "@/lib/supabase/client";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { ProfileForm } from "@/components/dashboard/ProfileForm";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const locale = getLocale();
  const copy = getCopy(locale);
  const sb = await getServerSupabase();
  if (!sb) redirect("/login");
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await sb.from("profiles").select("*").eq("user_id", user.id).maybeSingle();

  return (
    <>
      <div className="dash-head">
        <h1>{copy.dashboard.profileEdit}</h1>
        <p>{copy.dashboard.profile}</p>
      </div>

      <div className="dash-detail">
        <div className="dash-panel" style={{ maxWidth: 460 }}>
          <ProfileForm
            initial={{ fullName: profile?.full_name, phone: profile?.phone, city: profile?.city }}
            saveLabel={copy.dashboard.saveChanges}
            savedText={copy.dashboard.saved}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="dash-panel">
            <h3>{copy.dashboard.roleLabel}</h3>
            <p style={{ fontSize: 14, textTransform: "capitalize" }}>{(profile?.role_code || "customer").replace("_", " ")}</p>
          </div>
          <div className="dash-panel">
            <h3>{copy.dashboard.roleLabel === "Role" ? "Email" : "ईमेल"}</h3>
            <p style={{ fontSize: 14 }}>{profile?.email || user.email || "—"}</p>
          </div>
          <div className="dash-panel">
            <h3>{copy.dashboard.joinedOn}</h3>
            <p style={{ fontSize: 14 }}>
              {profile?.created_at
                ? new Date(profile.created_at).toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })
                : "—"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}