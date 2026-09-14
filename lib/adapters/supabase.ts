import { createClient as createSupabaseClient, SupabaseClient } from "@supabase/supabase-js";
import type {
  ApplicationCreateInput,
  ApplicationRecord,
  TicketCreateInput,
} from "@/lib/types";
import type { StorageBackend } from "./storage";

/**
 * SUPABASE-ENABLED STORAGE.
 * Active when NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.
 * Table names mirror supabase/migrations. RLS still applies to customer
 * reads; service-role writes are auditable via triggers.
 */

let client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase not configured — set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
  }
  if (!client) client = createSupabaseClient(url, key);
  return client;
}

const notImplemented = (what: string) => {
  throw new Error(`${what}: assign a user-bound client or map to a manager workflow`);
};

export const supabaseBackend: StorageBackend = {
  name: "supabase",

  async createApplication(input: ApplicationCreateInput) {
    const policyId = await resolvePolicyId(input.policyId);
    const r = await getClient()
      .from("applications")
      .insert({
        policy_id: policyId,
        customer_id: input.customerId || null,
        full_name: input.fullName.trim(),
        phone: input.phone,
        email: input.email?.trim() || null,
        city: input.city?.trim() || null,
        message: input.message?.trim() || null,
        status_code: "submitted",
        source: input.source ?? "website",
      })
      .select("id, application_no, policies(slug), full_name, phone, email, city, message, status_code, created_at, updated_at")
      .single();
    if (r.error) throw r.error;
    return map(r.data);
  },

  async getApplication(idOrNo: string) {
    const id = idOrNo.trim();
    const cols = "*, policies(slug)";
    const byNo = await getClient()
      .from("applications").select(cols).eq("application_no", id).maybeSingle();
    if (byNo.error) throw byNo.error;
    if (byNo.data) return map(byNo.data);
    if (UUID_RE.test(id)) {
      const byId = await getClient()
        .from("applications").select(cols).eq("id", id).maybeSingle();
      if (byId.error) throw byId.error;
      if (byId.data) return map(byId.data);
    }
    return null;
  },

  async createTicket(input: TicketCreateInput) {
    const r = await getClient()
      .from("support_tickets")
      .insert({
        subject: input.subject,
        category: input.category,
        description: input.description,
        contact_email: input.email,
        contact_phone: input.phone || null,
        status_code: "open",
      })
      .select("id, ticket_no")
      .single();
    if (r.error) throw r.error;
    return { id: r.data.id, ticketNo: r.data.ticket_no };
  },

  async listApplications() {
    notImplemented("listApplications (supabase)");
    return [];
  },
};

function map(row: Record<string, unknown>): ApplicationRecord {
  const policies = row.policies as { slug?: string } | null | undefined;
  return {
    id: String(row.id),
    applicationNo: String(row.application_no ?? ""),
    policyId: String(policies?.slug ?? row.policy_id ?? ""),
    fullName: String(row.full_name ?? ""),
    phone: String(row.phone ?? ""),
    email: row.email ? String(row.email) : undefined,
    city: row.city ? String(row.city) : undefined,
    message: row.message ? String(row.message) : undefined,
    status: String(row.status_code ?? "submitted"),
    createdAt: String(row.created_at ?? new Date().toISOString()),
    updatedAt: String(row.updated_at ?? row.created_at ?? new Date().toISOString()),
  };
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function resolvePolicyId(slugOrId: string): Promise<string> {
  if (UUID_RE.test(slugOrId)) return slugOrId;
  const p = await getClient().from("policies").select("id").eq("slug", slugOrId).maybeSingle();
  if (p.error) throw p.error;
  if (!p.data) throw new Error(`policy_not_found: ${slugOrId}`);
  return p.data.id;
}