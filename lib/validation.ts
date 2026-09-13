import { z } from "zod";
import { isValidIndianPhone } from "@/lib/utils";

export const applicationSchema = z.object({
  policyId: z.string().min(3).max(80),
  fullName: z.string().trim().min(2, "name_too_short").max(120),
  phone: z.string().trim().min(10).max(15).refine(isValidIndianPhone, "phone_invalid"),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(40).default("website"),
});

export const ticketSchema = z.object({
  name: z.string().trim().min(2, "name_too_short").max(120),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(15).optional().or(z.literal("")).refine(
    (v) => !v || isValidIndianPhone(v),
    "phone_invalid"
  ),
  category: z.string().trim().max(60),
  subject: z.string().trim().min(3, "subject_too_short").max(120),
  description: z.string().trim().min(10, "description_too_short").max(3000),
});

export function parseWith<T>(schema: z.ZodType<T>, raw: unknown) {
  const res = schema.safeParse(raw);
  if (!res.success) {
    return { error: res.error.errors[0]?.message ?? "validation_error", issues: res.error.errors };
  }
  return { data: res.data };
}