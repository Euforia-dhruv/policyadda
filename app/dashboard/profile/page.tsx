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
        <div className="dash-panel max-w-[480px]">
          <ProfileForm
            initial={{ fullName: profile?.full_name, phone: profile?.phone, city: profile?.city }}
            saveLabel={copy.dashboard.saveChanges}
            savedText={copy.dashboard.saved}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="dash-panel">
            <h3>{copy.dashboard.roleLabel}</h3>
            <p className="capitalize text-sm">{(profile?.role_code || "customer").replace("_", " ")}</p>
          </div>
          <div className="dash-panel">
            <h3>{copy.dashboard.roleLabel === "Role" ? "Email" : "ईमेल"}</h3>
            <p className="text-sm">{profile?.email || user.email || "—"}</p>
          </div>
          <div className="dash-panel">
            <h3>{copy.dashboard.joinedOn}</h3>
            <p className="text-sm">
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