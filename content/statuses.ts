import type { WorkflowStatus } from "@/lib/types";

/**
 * APPLICATION WORKFLOW (CONFIGURABLE).
 * These statuses are a starting point, not a final business workflow.
 * The client must define the exact workflow; administrators can edit this
 * list (and later the application_statuses table / Admin Console).
 */
export const workflowStatuses: WorkflowStatus[] = [
  {
    code: "submitted",
    order: 1,
    label: { en: "Application Submitted", hi: "आवेदन प्रस्तुत" },
    description: {
      en: "We have received your details.",
      hi: "हमें आपकी जानकारी प्राप्त हो गई है।",
    },
  },
  {
    code: "under_review",
    order: 2,
    label: { en: "Under Review", hi: "समीक्षा में" },
    description: {
      en: "Our team is checking your enquiry.",
      hi: "हमारी टीम आपकी पूछताछ की जाँच कर रही है।",
    },
  },
  {
    code: "assigned",
    order: 3,
    label: { en: "Executive Assigned", hi: "कार्यकारी नियुक्त" },
    description: {
      en: "A PolicyAdda executive has been assigned to you.",
      hi: "आपके लिए एक PolicyAdda कार्यकारी नियुक्त किया गया है।",
    },
  },
  {
    code: "contacted",
    order: 4,
    label: { en: "Customer Contacted", hi: "ग्राहक से संपर्क" },
    description: {
      en: "Our executive has contacted you.",
      hi: "हमारे कार्यकारी ने आपसे संपर्क किया है।",
    },
  },
  {
    code: "processing",
    order: 5,
    label: { en: "Processing", hi: "प्रक्रिया जारी" },
    description: {
      en: "Your application is being processed.",
      hi: "आपका आवेदन संसाधित किया जा रहा है।",
    },
  },
  {
    code: "completed",
    order: 6,
    terminal: true,
    label: { en: "Completed", hi: "पूर्ण" },
    description: {
      en: "The process has been completed.",
      hi: "प्रक्रिया पूर्ण हो गई है।",
    },
  },
  {
    code: "on_hold",
    order: 7,
    label: { en: "On Hold", hi: "रोक दिया गया" },
    description: {
      en: "Awaiting further information.",
      hi: "अधिक जानकारी की प्रतीक्षा में।",
    },
  },
  {
    code: "rejected",
    order: 8,
    terminal: true,
    label: { en: "Rejected", hi: "अस्वीकृत" },
    description: {
      en: "This application could not proceed.",
      hi: "यह आवेदन आगे नहीं बढ़ सका।",
    },
  },
  {
    code: "cancelled",
    order: 9,
    terminal: true,
    label: { en: "Cancelled", hi: "रद्द" },
    description: {
      en: "The application has been cancelled.",
      hi: "आवेदन रद्द कर दिया गया है।",
    },
  },
];

export const getStatusByCode = (code: string) =>
  workflowStatuses.find((s) => s.code === code);

export const sortedStatuses = () =>
  [...workflowStatuses].sort((a, b) => a.order - b.order);