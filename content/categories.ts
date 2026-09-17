import type { PolicyCategory } from "@/lib/types";

export const categories: PolicyCategory[] = [
  {
    id: "cat-motor",
    slug: "motor",
    icon: "car",
    sort: 1,
    isActive: true,
    name: { en: "Motor Insurance", hi: "मोटर बीमा" },
    short: {
      en: "Protect your vehicle — car, bike, or commercial — against accidental damage, theft, and third-party liabilities.",
      hi: "अपने वाहन की सुरक्षा — कार, बाइक या कमर्शियल — दुर्घटना, चोरी और थर्ड-पार्टी देयता से।",
    },
    description: {
      en: "Motor insurance provides financial protection for your vehicle and covers third-party liabilities. In India, Third-Party Liability insurance is mandatory for vehicles plying on public roads. You can also choose cover for damage to your own vehicle through an Own Damage or Comprehensive policy.",
      hi: "मोटर बीमा आपके वाहन के लिए वित्तीय सुरक्षा प्रदान करता है और थर्ड-पार्टी देयता को कवर करता है। भारत में, सार्वजनिक सड़कों पर चलने वाले वाहनों के लिए थर्ड-पार्टी देयता बीमा अनिवार्य है।",
    },
  },
  {
    id: "cat-health",
    slug: "health",
    icon: "cross",
    sort: 2,
    isActive: true,
    name: { en: "Health Insurance", hi: "हेल्थ इंश्योरेंस" },
    short: {
      en: "Protect your health and savings with comprehensive medical coverage for you and your family.",
      hi: "अपने स्वास्थ्य और बचत की रक्षा करें — आप और आपके परिवार के लिए व्यापक चिकित्सा कवरेज।",
    },
    description: {
      en: "Health insurance provides financial protection against eligible medical and hospitalisation expenses arising from illness, injury or accidents. With the right health insurance policy, you can get access to quality healthcare while reducing the financial burden on your savings.",
      hi: "हेल्थ इंश्योरेंस बीमारी, चोट या दुर्घटना से उत्पन्न पात्र चिकित्सा और अस्पताल खर्चों के खिलाफ वित्तीय सुरक्षा प्रदान करता है।",
    },
  },
  {
    id: "cat-life",
    slug: "life",
    icon: "heart",
    sort: 3,
    isActive: true,
    name: { en: "Life Insurance", hi: "लाइफ इंश्योरेंस" },
    short: {
      en: "Secure your family's financial future with term plans, savings plans, and investment-linked coverage.",
      hi: "टर्म प्लान, बचत प्लान और निवेश-लिंक्ड कवरेज के साथ अपने परिवार के वित्तीय भविष्य को सुरक्षित करें।",
    },
    description: {
      en: "Life insurance provides financial protection to your family in case of your unfortunate demise during the policy term. It can also serve as a savings and investment tool through various plan types including term insurance, ULIPs, pension plans, and guaranteed return plans.",
      hi: "लाइफ इंश्योरेंस पॉलिसी अवधि के दौरान आपके दुर्भाग्यपूर्ण निधन की स्थिति में आपके परिवार को वित्तीय सुरक्षा प्रदान करता है। यह टर्म इंश्योरेंस, यूलिप्स, पेंशन प्लान और गारंटीड रिटर्न प्लान जैसे विभिन्न प्लान प्रकारों के माध्यम से बचत और निवेश उपकरण के रूप में भी काम कर सकता है।",
    },
  },
  {
    id: "cat-business",
    slug: "business",
    icon: "briefcase",
    sort: 4,
    isActive: true,
    name: { en: "Business & Commercial Insurance", hi: "व्यवसाय और वाणिज्यिक बीमा" },
    short: {
      en: "Protect your business, employees, and commercial assets with tailored insurance solutions.",
      hi: "अनुकूलित बीमा समाधानों के साथ अपने व्यवसाय, कर्मचारियों और वाणिज्यिक संपत्ति की रक्षा करें।",
    },
    description: {
      en: "Business and commercial insurance helps protect organizations against various risks — from employee health coverage and workplace accidents to property damage, cyber incidents, and professional liability. Suitable for businesses of all sizes.",
      hi: "व्यवसाय और वाणिज्यिक बीमा संगठनों को विभिन्न जोखिमों से बचाने में मदद करता है — कर्मचारी स्वास्थ्य कवरेज और कार्यस्थल दुर्घटनाओं से लेकर संपत्ति क्षति, साइबर घटनाओं और पेशेवर देयता तक।",
    },
  },
  {
    id: "cat-property",
    slug: "property",
    icon: "home",
    sort: 5,
    isActive: true,
    name: { en: "Property & Home Insurance", hi: "संपत्ति और घर बीमा" },
    short: {
      en: "Protect your home, property, and valuable assets against fire, natural calamities, and burglary.",
      hi: "आग, प्राकृतिक आपदाओं और चोरी से अपने घर, संपत्ति और बहुमूल्य संपत्ति की रक्षा करें।",
    },
    description: {
      en: "Property and home insurance provides financial protection for your residential or commercial property against covered risks such as fire, natural calamities, burglary, and accidental damage. It can also protect home loan borrowers against outstanding loan liability.",
      hi: "संपत्ति और घर बीमा आग, प्राकृतिक आपदाओं, चोरी और आकस्मिक क्षति जैसे कवर्ड जोखिमों के खिलाफ आपकी आवासीय या वाणिज्यिक संपत्ति के लिए वित्तीय सुरक्षा प्रदान करता है।",
    },
  },
  {
    id: "cat-travel",
    slug: "travel",
    icon: "plane",
    sort: 6,
    isActive: true,
    name: { en: "Travel Insurance", hi: "ट्रैवल इंश्योरेंस" },
    short: {
      en: "Travel with confidence — protect your trip against medical emergencies, delays, and disruptions.",
      hi: "आत्मविश्वास के साथ यात्रा करें — चिकित्सा आपातकाल, देरी और व्यवधानों के खिलाफ अपनी यात्रा की सुरक्षा करें।",
    },
    description: {
      en: "Travel insurance can protect you against unexpected expenses and emergencies during your journey — including emergency medical treatment, baggage loss, flight delays, and trip cancellation. Whether travelling within India or internationally.",
      hi: "ट्रैवल इंश्योरेंस आपकी यात्रा के दौरान अप्रत्याशित खर्चों और आपातकालों से आपकी रक्षा कर सकता है — आपातकालीन चिकित्सा उपचार, सामान हानि, उड़ान में देरी और यात्रा रद्दीकरण सहित।",
    },
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getActiveCategories = () =>
  categories.filter((c) => c.isActive);