import type { PolicyCategory } from "@/lib/types";

export const categories: PolicyCategory[] = [
  {
    id: "cat-motor",
    slug: "motor",
    icon: "🛞",
    sort: 1,
    isActive: true,
    name: { en: "Motor Insurance", hi: "मोटर बीमा" },
    short: {
      en: "Protection for two-wheelers and private cars.",
      hi: "दोपहिया और निजी कार के लिए सुरक्षा।",
    },
    description: {
      en: "Cover options for your bike, scooter, or private car — including accidental damage, theft, and third-party liabilities.",
      hi: "आपकी बाइक, स्कूटर या निजी कार के लिए कवर विकल्प — दुर्घटना, चोरी और थर्ड-पार्टी देयता सहित।",
    },
  },
  {
    id: "cat-health",
    slug: "health",
    icon: "🏥",
    sort: 2,
    isActive: true,
    name: { en: "Health Insurance", hi: "हेल्थ इंश्योरेंस" },
    short: {
      en: "Hospitalization and medical expense coverage for you and your family.",
      hi: "आपके और आपके परिवार के लिए अस्पताल व चिकित्सा खर्च कवरेज।",
    },
    description: {
      en: "Health plans that help cover hospitalization, day-care procedures, and related medical expenses for eligible members.",
      hi: "हेल्थ प्लान जो अस्पताल में भर्ती, डे-केयर प्रक्रियाओं और संबंधित चिकित्सा खर्चों को कवर करने में मदद करते हैं।",
    },
  },
  {
    id: "cat-business",
    slug: "business",
    icon: "🏢",
    sort: 5,
    isActive: true,
    name: { en: "Business / SME Insurance", hi: "व्यवसाय / एसएमई बीमा" },
    short: {
      en: "Employee health benefits and protection solutions for organizations.",
      hi: "संगठनों के लिए कर्मचारी स्वास्थ्य लाभ और सुरक्षा समाधान।",
    },
    description: {
      en: "Customizable solutions that help businesses provide employee health coverage and relevant protection with the workforce planned in mind.",
      hi: "अनुकूलन योग्य समाधान जो व्यवसायों को कर्मचारी स्वास्थ्य कवरेज प्रदान करने में मदद करते हैं।",
    },
  },
  {
    id: "cat-life",
    slug: "life",
    icon: "🛡️",
    sort: 3,
    isActive: true,
    name: { en: "Life Insurance", hi: "जीवन बीमा" },
    short: {
      en: "Long-term financial protection for your family.",
      hi: "आपके परिवार के लिए दीर्घकालिक वित्तीय सुरक्षा।",
    },
    description: {
      en: "Life cover concepts that help secure your family's financial future — with options for pure protection and, where applicable, savings-linked plans.",
      hi: "जीवन कवर कॉन्सेप्ट जो आपके परिवार के वित्तीय भविष्य को सुरक्षित करने में मदद करते हैं — शुद्ध सुरक्षा और, जहाँ लागू हो, बचत-आधारित प्लान के विकल्प सहित।",
    },
  },
  {
    id: "cat-travel",
    slug: "travel",
    icon: "✈️",
    sort: 4,
    isActive: true,
    name: { en: "Travel Insurance", hi: "ट्रैवल इंश्योरेंस" },
    short: {
      en: "Coverage for trips abroad — medical, trip disruption, and baggage.",
      hi: "विदेश यात्रा के लिए कवरेज — चिकित्सा, यात्रा व्यवधान और सामान।",
    },
    description: {
      en: "Travel cover concepts that help you handle medical emergencies, trip disruptions, and baggage issues while travelling outside India.",
      hi: "ट्रैवल कवर कॉन्सेप्ट जो भारत के बाहर यात्रा के दौरान चिकित्सा आपातकाल, यात्रा व्यवधान और सामान से जुड़ी समस्याओं में मदद करते हैं।",
    },
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getActiveCategories = () =>
  categories.filter((c) => c.isActive);