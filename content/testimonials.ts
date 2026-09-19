export type Testimonial = {
  name: string;
  city: string;
  text: { en: string; hi: string };
};

/**
 * Realistic customer feedback, AI-generated as requested by the PolicyAdda
 * home page brief ("Ai generated (realistic)"). First names + city only.
 * These reflect the product lines described in the client's About/Home docs.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Ramesh",
    city: "Ranchi",
    text: {
      en: "The claim support was a pleasant surprise. My car met with an accident at night and their team guided me step-by-step right up to settlement.",
      hi: "क्लेम सपोर्ट ने मुझे सुखद आश्चर्य में डाल दिया। रात में कार दुर्घटना हुई और उनकी टीम ने निपटारे तक कदम-दर-कदम मार्गदर्शन किया।",
    },
  },
  {
    name: "Sunita",
    city: "Jamshedpur",
    text: {
      en: "They compared health plans from several insurers and found one that actually covered my parents' needs at a lower premium.",
      hi: "उन्होंने कई बीमाकर्ताओं के हेल्थ प्लान की तुलना की और माता-पिता की ज़रूरत के अनुकूल कम प्रीमियम पर प्लान ढूँढा।",
    },
  },
  {
    name: "Arjun",
    city: "Bokaro",
    text: {
      en: "Renewed my bike insurance in minutes over WhatsApp. No paperwork, no visits. Exactly what I wanted.",
      hi: "व्हाट्सऐप पर मिनटों में अपनी बाइक बीमा नवीनीकृत करा ली। न कागज़ी कार्रवाई, न दफ्तर जाना। मेरी ज़रूरत के अनुसार एकदम सही।",
    },
  },
  {
    name: "Priya",
    city: "Dhanbad",
    text: {
      en: "As a first-time buyer I was nervous. They explained everything in simple language and helped me choose a family floater I actually understand.",
      hi: "पहली बार खरीदारी करते समय मैं घबराई हुई थी। उन्होंने सब कुछ सरल भाषा में समझाया और एक फैमिली फ्लोटर चुनने में मदद की जिसे मैं आज भी समझती हूँ।",
    },
  },
  {
    name: "Imran",
    city: "Hazaribagh",
    text: {
      en: "Good advice on term life — they compared policies honestly instead of pushing the highest premium one.",
      hi: "टर्म लाइफ़ पर अच्छी सलाह — उन्होंने सबसे महँगी पॉलिसी थोपने के बजाय विकल्पों की ईमानदारी से तुलना की।",
    },
  },
  {
    name: "Deepika",
    city: "Ranchi",
    text: {
      en: "My mother's health claim had missing documents. Their support team followed up with the hospital and TPA until it was settled.",
      hi: "माँ के हेल्थ क्लेम में कुछ दस्तावेज़ छूट गए थे। उनकी टीम ने निपटारे तक अस्पताल और टीपीए से अनुवर्ती किया।",
    },
  },
];