import type { StorageBackend } from "./storage";
import { fileBackend } from "./file";
import { supabaseBackend } from "./supabase";

/**
 * Chooses the active storage backend at runtime.
 *  - Supabase when credentials are configured.
 *  - File-based (dev) otherwise — functional but clearly non-production.
 * Adapters are interchangeable so no calling code knows which backend is live.
 */
function pick(): StorageBackend {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? supabaseBackend : fileBackend;
}

export const storage = pick();
export { StorageError } from "./storage";
export type { StorageBackend } from "./storage";