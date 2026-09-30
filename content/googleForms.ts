import { isValidEmail, isValidIndianPhone } from "@/lib/utils";

/**
 * Config for the three Google Forms that back our custom in-site forms.
 * Form ids and entry.* ids were decoded from the public viewform HTML —
 * do not change without re-decoding (submission silently breaks otherwise).
 */

export type FieldKind = "text" | "tel" | "email" | "pincode" | "select" | "date" | "time" | "textarea";

export type GoogleFormField = {
  key: string;
  entry: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: string[];
  autocomplete?: string;
};

export type GoogleFormDef = {
  /** Google form id used in /forms/d/e/{id}/formResponse */
  id: string;
  fields: GoogleFormField[];
  /** Field keys per step. Omit → single-step form. */
  steps?: string[][];
  /** Add a final read-only review step (multi-step forms only). */
  review?: boolean;
};

const PRODUCT_OPTIONS = [
  "Bike/ Vehicle Insurance",
  "Health Insurance",
  "Life Insurance",
  "Property/ Home Insurance",
  "Travel Insurance",
  "Marine/ Cargo Insurance",
  "Fire & Burglary Insurance/ Stock Insurance",
  "Others",
];

const CLAIM_OPTIONS = [...PRODUCT_OPTIONS.slice(0, -1), "Other Insurance"];

export type FormKey = "enquiry" | "claim" | "partner";

export const GOOGLE_FORMS: Record<FormKey, GoogleFormDef> = {
  enquiry: {
    id: "1FAIpQLSdxcLnsBtPNeLyXdG5CatRMyFCqx9hMtndRORiq5FxVxDHgkg",
    fields: [
      { key: "name", entry: "entry.452702575", label: "Name", kind: "text", required: true, autocomplete: "name" },
      { key: "mobile", entry: "entry.226778617", label: "Mobile Number", kind: "tel", required: true, autocomplete: "tel" },
      { key: "product", entry: "entry.2055512530", label: "Insurance Product", kind: "select", required: true, options: PRODUCT_OPTIONS },
    ],
  },
  claim: {
    id: "1FAIpQLSclDlLxL1wCmzFXbWbJNf_ZmFBpBPC9dzdGIeBYNq8xOjixiQ",
    fields: [
      { key: "name", entry: "entry.452702575", label: "Full Name (Policyholder)", kind: "text", required: true, autocomplete: "name" },
      { key: "mobile", entry: "entry.226778617", label: "Registered Mobile Number", kind: "tel", required: true, autocomplete: "tel" },
      { key: "policyNo", entry: "entry.83575566", label: "Policy Number", kind: "text", required: true },
      { key: "provider", entry: "entry.1745704858", label: "Insurance Provider / Company Name", kind: "text", required: true },
      { key: "type", entry: "entry.2055512530", label: "Type of Insurance Claim", kind: "select", required: true, options: CLAIM_OPTIONS },
      { key: "date", entry: "entry.1916422098", label: "Date of Incident / Diagnosis / Loss", kind: "date", required: true },
      { key: "time", entry: "entry.1676713822", label: "Time of Incident / Diagnosis / Loss", kind: "time", required: true },
      { key: "place", entry: "entry.808696522", label: "Place of Incident / Diagnosis / Loss", kind: "text", required: true },
      { key: "description", entry: "entry.2095589362", label: "Brief Description of the Incident / Claim Reason", kind: "textarea", required: true },
    ],
    steps: [
      ["name", "mobile"],
      ["policyNo", "provider", "type"],
      ["date", "time", "place", "description"],
    ],
    review: true,
  },
  partner: {
    id: "1FAIpQLScbzzwrCj8ACq3qYyElexdHSBS6jhf34-c6JI0Vm3jcWM1UaA",
    fields: [
      { key: "name", entry: "entry.765301011", label: "Name", kind: "text", required: true, autocomplete: "name" },
      { key: "mobile", entry: "entry.268309656", label: "Mobile Number", kind: "tel", required: true, autocomplete: "tel" },
      { key: "email", entry: "entry.311878053", label: "Email Id", kind: "email", required: true, autocomplete: "email" },
      { key: "pincode", entry: "entry.1879410659", label: "Pincode", kind: "pincode", required: true, autocomplete: "postal-code" },
    ],
  },
};

/** field key → error code (mapped to copy.forms.* strings in the UI) */
export type FieldErrors = Record<string, string>;

/**
 * Validates the given keys (default: all) of a form.
 * Runs identically on client and in the API route (trust boundary).
 */
export function validateForm(def: GoogleFormDef, values: Record<string, string>, keys?: string[]): FieldErrors {
  const errors: FieldErrors = {};
  for (const f of def.fields) {
    if (keys && !keys.includes(f.key)) continue;
    const v = (values[f.key] ?? "").trim();
    if (!v) {
      if (f.required) errors[f.key] = "required";
      continue;
    }
    if (f.kind === "tel" && !isValidIndianPhone(v)) errors[f.key] = "phone";
    else if (f.kind === "email" && !isValidEmail(v)) errors[f.key] = "email";
    else if (f.kind === "pincode" && !/^[1-9][0-9]{5}$/.test(v)) errors[f.key] = "pin";
    else if (f.kind === "select" && f.options && !f.options.includes(v)) errors[f.key] = "select";
    else if ((f.kind === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(v)) || (f.kind === "time" && !/^\d{2}:\d{2}$/.test(v)))
      errors[f.key] = "date";
  }
  return errors;
}
