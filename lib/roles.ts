import { getServerSupabase } from "@/lib/supabase/client";

export type AppRole = "super_admin" | "admin" | "manager" | "sales" | "support" | "developer" | "customer";

export const STAFF_ROLES: AppRole[] = ["super_admin", "admin", "manager", "sales", "support", "developer"];
export const ADMIN_ROLES: AppRole[] = ["super_admin", "admin"];
export const MANAGER_ROLES: AppRole[] = ["super_admin", "admin", "manager"];

export function isStaff(role: string): boolean { return STAFF_ROLES.includes(role as AppRole); }
export function isAdmin(role: string): boolean { return ADMIN_ROLES.includes(role as AppRole); }
export function isManager(role: string): boolean { return MANAGER_ROLES.includes(role as AppRole); }

export async function getUserRole(): Promise<{ role: AppRole; userId: string; profile: any } | null> {
  const sb = await getServerSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data: profile } = await sb.from("profiles").select("*").eq("user_id", user.id).single();
  return { role: (profile?.role_code || "customer") as AppRole, userId: user.id, profile };
}
