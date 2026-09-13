import type {
  ApplicationCreateInput,
  ApplicationRecord,
  TicketCreateInput,
} from "@/lib/types";

/** Storage abstraction: swap "file" (dev) → "supabase" (prod) via env. */
export interface StorageBackend {
  name: "file" | "supabase";
  createApplication(input: ApplicationCreateInput): Promise<ApplicationRecord>;
  getApplication(idOrNo: string): Promise<ApplicationRecord | null>;
  createTicket(input: TicketCreateInput): Promise<{ id: string; ticketNo: string }>;
  listApplications(): Promise<ApplicationRecord[]>;
}

export class StorageError extends Error {
  constructor(message: string, public code = "STORAGE_ERROR") {
    super(message);
  }
}