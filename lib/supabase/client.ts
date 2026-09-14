import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { SupabaseClient as SupabaseJsClient } from "@supabase/supabase-js";

/**
 * Supabase client factories (browser + server).
 * Dashboards activate only when env is set; otherwise pages render the
 * "setup required" state. Nothing here exposes secrets to the client.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anonKey);
}

/**
 * Service-role client — server routes only. Bypasses RLS by design; use only
 * where the request has already been authorized (signup, admin actions).
 */
export function getServiceSupabase(): SupabaseJsClient | null {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createSupabaseClient(url, key);
}

export function getBrowserSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  return createBrowserClient(url, anonKey);
}

export async function getServerSupabase(): Promise<SupabaseClient | null> {
  if (!url || !anonKey) return null;
  const cookieStore = await cookies();
  return createServerClient(url, anonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // middleware-less call path (server component prerender) — safe to ignore
        }
      },
    },
  });
}