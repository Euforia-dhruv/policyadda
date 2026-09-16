/**
 * Shared server-side request security helpers.
 * Only import from route handlers / server code — never from client bundles.
 */

/** Roles allowed to mutate business records (sales/support on their assigned
 *  work, managers/admins system-wide). Developer is intentionally excluded
 *  from mutations and super_admin is always included. */
export const MUTATION_STAFF_ROLES = [
  "sales",
  "support",
  "manager",
  "admin",
  "super_admin",
] as const;

export function isMutationStaff(role: string): boolean {
  return (MUTATION_STAFF_ROLES as readonly string[]).includes(role);
}

/**
 * CSRF defense-in-depth: reject cross-origin state-changing requests.
 * Browser requests carry an Origin (or Referer) header; when present it must
 * match the request's host. Requests without both headers (scripts, curl,
 * server-to-server) are left to cookie/SameSite protections.
 */
export function sameOrigin(request: Request): boolean {
  const url = new URL(request.url);
  const origin = request.headers.get("origin");
  if (!origin) {
    const referer = request.headers.get("referer");
    if (!referer) return true;
    try {
      return new URL(referer).host === url.host;
    } catch {
      return false;
    }
  }
  try {
    return new URL(origin).host === url.host;
  } catch {
    return false;
  }
}