import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import type {
  ApplicationCreateInput,
  ApplicationRecord,
  TicketCreateInput,
} from "@/lib/types";
import { makeApplicationNo, makeTicketNo } from "@/lib/utils";
import type { StorageBackend } from "./storage";

/**
 * FILE-BACKED DEV STORAGE.
 * Keeps the application/ticket flows fully functional before Supabase
 * credentials are provided. Data is written to .data/policyadda (gitignored).
 * NOT for production: no RLS, no audit, single-node only.
 */
const DIR = join(process.cwd(), ".data", "policyadda");

async function readDb(fallback: object) {
  try {
    return JSON.parse(await readFile(join(DIR, "db.json"), "utf-8"));
  } catch {
    return fallback;
  }
}

async function writeDb(db: object) {
  await mkdir(DIR, { recursive: true });
  await writeFile(join(DIR, "db.json"), JSON.stringify(db, null, 2), "utf-8");
}

interface DbShape {
  seq: number;
  applications: ApplicationRecord[];
  tickets: { id: string; ticketNo: string; email: string; createdAt: string }[];
}

export const fileBackend: StorageBackend = {
  name: "file",

  async createApplication(input: ApplicationCreateInput): Promise<ApplicationRecord> {
    if (!/^[6-9]\d{9}$/.test(input.phone)) throw new Error("invalid_phone");
    const db = (await readDb({ seq: 0, applications: [], tickets: [] })) as DbShape;
    const now = new Date().toISOString();
    const rec: ApplicationRecord = {
      id: randomUUID(),
      applicationNo: makeApplicationNo(db.seq),
      policyId: input.policyId,
      customerId: input.customerId,
      fullName: input.fullName.trim(),
      phone: input.phone,
      email: input.email?.trim() || undefined,
      city: input.city?.trim() || undefined,
      message: input.message?.trim() || undefined,
      status: "submitted",
      createdAt: now,
      updatedAt: now,
    };
    db.seq += 1;
    db.applications.unshift(rec);
    await writeDb(db);
    return rec;
  },

  async getApplication(idOrNo: string): Promise<ApplicationRecord | null> {
    const db = (await readDb({ seq: 0, applications: [], tickets: [] })) as DbShape;
    const id = idOrNo.trim().toUpperCase();
    return db.applications.find(
      (a) => a.applicationNo.toUpperCase() === id || a.id.toLowerCase() === idOrNo.toLowerCase()
    ) ?? null;
  },

  async createTicket(input: TicketCreateInput) {
    const db = (await readDb({ seq: 0, applications: [], tickets: [] })) as DbShape;
    db.tickets.unshift({
      id: randomUUID(),
      ticketNo: makeTicketNo(db.seq),
      email: input.email.trim(),
      createdAt: new Date().toISOString(),
    });
    await writeDb(db);
    return { id: db.tickets[0].id, ticketNo: db.tickets[0].ticketNo };
  },

  async listApplications(): Promise<ApplicationRecord[]> {
    const db = (await readDb({ seq: 0, applications: [], tickets: [] })) as DbShape;
    return db.applications;
  },
};

export async function clearDevDatabase() {
  try {
    await readdir(DIR);
    await writeFile(join(DIR, "db.json"), JSON.stringify({ seq: 0, applications: [], tickets: [] }), "utf-8");
    return true;
  } catch {
    return false;
  }
}