import type { Locale } from "@/lib/types";

export type Bilingual = { en: string; hi: string };

export const careersFormUrl = "https://forms.gle/epS84cizW4k69DLh6";

export const company = {
  tagline: {
    en: "Your Trusted Insurance & Risk Management Partner.",
    hi: "आपका भरोसेमंद बीमा और जोखिम प्रबंधन साझीदार।",
  },
  intro: {
    en: "Policy Adda is a customer-focused insurance consultancy committed to making insurance simpler, more accessible and easier to understand. Established in 2018, we work with individuals, families and businesses to help them identify suitable insurance solutions for their protection needs. Our approach is built around personalised guidance, transparent communication and responsive service.",
    hi: "पॉलिसी अड्डा एक ग्राहक-केंद्रित बीमा सलाहकार संस्था है जो बीमा को सरल, सुलभ और समझने में आसान बनाने के लिए प्रतिबद्ध है। 2018 में स्थापित, हम व्यक्तियों, परिवारों और व्यवसायों के साथ मिलकर उनकी सुरक्षा आवश्यकताओं के लिए उपयुक्त बीमा समाधान पहचानने में मदद करते हैं। हमारा दृष्टिकोण व्यक्तिगत मार्गदर्शन, पारदर्शी संचार और तत्पर सेवा पर आधारित है।",
  },
  valueLine: {
    en: "We believe insurance should not be complicated. Our team works closely with clients to understand their requirements, explain available options and support them throughout their insurance journey.",
    hi: "हम मानते हैं कि बीमा जटिल नहीं होना चाहिए। हमारी टीम ग्राहकों की आवश्यकताओं को समझने, उपलब्ध विकल्प समझाने और उनकी बीमा यात्रा में हर कदम पर सहयोग देने के लिए उनके साथ निकटता से काम करती है।",
  },
  whoWeAre: {
    en: "At Policy Adda, we combine insurance expertise, customer service and a strong understanding of risk to deliver practical insurance solutions. Our objective is simple — to help our clients protect what matters most while allowing them to focus on their personal and business goals. With a growing presence across India, our team serves customers through our network of branches and service channels.",
    hi: "पॉलिसी अड्डा में हम बीमा विशेषज्ञता, ग्राहक सेवा और जोखिम की गहरी समझ को मिलाकर व्यावहारिक बीमा समाधान देते हैं। हमारा उद्देश्य सरल है — ग्राहकों को उनकी सबसे महत्वपूर्ण चीज़ों की सुरक्षा में मदद करना। भारत में बढ़ती उपस्थिति के साथ, हमारी टीम शाखाओं और सेवा चैनलों के नेटवर्क के माध्यम से ग्राहकों की सेवा करती है।",
  },
  journey: {
    title: {
      en: "Our Journey",
      hi: "हमारी यात्रा",
    },
    stats: [
      { value: "2018", label: { en: "Policy Adda established", hi: "पॉलिसी अड्डा स्थापित" } },
      { value: "2 Lakh+", label: { en: "Customers served", hi: "ग्राहकों की सेवा" }, note: { en: "as stated in our company presentation", hi: "हमारी कंपनी प्रस्तुति के अनुसार" } },
      { value: "95%", label: { en: "Service Excellence", hi: "सेवा उत्कृष्टता" } },
      { value: "9+", label: { en: "Branch locations", hi: "शाखा स्थान" } },
      { value: "PAN India", label: { en: "Presence", hi: "उपस्थिति" } },
      { value: "24/7", label: { en: "Customer support", hi: "ग्राहक सहायता" } },
    ],
  },
  mission: {
    title: { en: "Our Mission", hi: "हमारा मिशन" },
    text: {
      en: "To guide clients towards their protection and financial goals through reliable insurance advice, personalised support and responsive service.",
      hi: "विश्वसनीय बीमा सलाह, व्यक्तिगत सहयोग और तत्पर सेवा के माध्यम से ग्राहकों को उनके सुरक्षा और वित्तीय लक्ष्यों तक पहुँचाना।",
    },
    note: {
      en: "We aim to build long-term relationships by putting customer requirements at the centre of everything we do.",
      hi: "हम ग्राहकों की आवश्यकताओं को हर कार्य के केंद्र में रखकर दीर्घकालिक संबंध बनाने का प्रयास करते हैं।",
    },
  },
  vision: {
    title: { en: "Our Vision", hi: "हमारा विज़न" },
    text: {
      en: "To make insurance simpler, more transparent and accessible for individuals, families and businesses across India.",
      hi: "भारत भर के व्यक्तियों, परिवारों और व्यवसायों के लिए बीमा को सरल, अधिक पारदर्शी और सुलभ बनाना।",
    },
    note: {
      en: "We aspire to be a trusted insurance partner by combining professional expertise, technology, efficient processes and customer-centric service.",
      hi: "हम पेशेवर विशेषज्ञता, तकनीक, कुशल प्रक्रियाओं और ग्राहक-केंद्रित सेवा के संयोजन से एक भरोसेमंद बीमा साझीदार बनने का लक्ष्य रखते हैं।",
    },
  },
  coreValues: {
    title: { en: "Our Core Values", hi: "हमारे मूल मूल्य" },
    items: [
      { title: { en: "Teamwork", hi: "टीम वर्क" }, text: { en: "We work together to deliver better outcomes for our clients and partners.", hi: "हम अपने ग्राहकों और साझीदारों के लिए बेहतर परिणाम देने हेतु एक साथ काम करते हैं।" } },
      { title: { en: "Respect for All", hi: "सभी के प्रति सम्मान" }, text: { en: "We treat our customers, employees and business partners with respect and professionalism.", hi: "हम अपने ग्राहकों, कर्मचारियों और व्यावसायिक साझीदारों के साथ सम्मान और व्यावसायिकता से पेश आते हैं।" } },
      { title: { en: "Unquestionable Integrity", hi: "अटल सत्यनिष्ठा" }, text: { en: "We believe in ethical conduct, transparent communication and responsible insurance advice.", hi: "हम नैतिक आचरण, पारदर्शी संचार और जिम्मेदार बीमा सलाह में विश्वास रखते हैं।" } },
      { title: { en: "Excellence", hi: "उत्कृष्टता" }, text: { en: "We continuously strive to improve the quality of our products, services and customer experience.", hi: "हम अपने उत्पादों, सेवाओं और ग्राहक अनुभव की गुणवत्ता में निरंतर सुधार का प्रयास करते हैं।" } },
      { title: { en: "Speed in Servicing", hi: "सेवा में शीघ्रता" }, text: { en: "We value our customers' time and aim to provide timely assistance throughout the insurance journey.", hi: "हम ग्राहकों के समय का आदर करते हैं और पूरी बीमा यात्रा में समय पर सहायता देने का लक्ष्य रखते हैं।" } },
      { title: { en: "Truthfulness", hi: "सत्यता" }, text: { en: "We believe in clear and honest communication so that customers can make informed decisions.", hi: "हम स्पष्ट और ईमानदार संचार में विश्वास रखते हैं ताकि ग्राहक सही निर्णय ले सकें।" } },
    ],
  },
  solutions: {
    title: { en: "Our Insurance Solutions", hi: "हमारे बीमा समाधान" },
    note: {
      en: "Our product offerings may vary depending on customer requirements and the products available from our insurance partners.",
      hi: "हमारे उत्पाद ग्राहक की आवश्यकताओं और हमारे बीमा साझीदारों से उपलब्ध उत्पादों के आधार पर भिन्न हो सकते हैं।",
    },
    individual: {
      title: { en: "Individual Insurance", hi: "व्यक्तिगत बीमा" },
      items: [
        { en: "Motor / Vehicle Insurance", hi: "मोटर / वाहन बीमा" },
        { en: "Health Insurance", hi: "स्वास्थ्य बीमा" },
        { en: "Life Insurance", hi: "जीवन बीमा" },
        { en: "Travel Insurance", hi: "यात्रा बीमा" },
      ],
    },
    business: {
      title: { en: "Business & Institutional Insurance", hi: "व्यावसायिक और संस्थागत बीमा" },
      items: [
        { en: "Fire Insurance", hi: "अग्नि बीमा" },
        { en: "Burglary Insurance", hi: "चोरी बीमा" },
        { en: "Surety Bonds", hi: "सरकारी जमानत बॉन्ड" },
        { en: "Public Liability Insurance", hi: "पब्लिक लायबिलिटी बीमा" },
        { en: "Contractors All Risk Insurance", hi: "कॉन्ट्रैक्टर्स ऑल रिस्क बीमा" },
        { en: "Group Personal Accident Insurance", hi: "ग्रुप पर्सनल एक्सीडेंट बीमा" },
        { en: "Group Mediclaim / Group Health Insurance", hi: "ग्रुप मेडिक्लेम / ग्रुप हेल्थ बीमा" },
        { en: "Cyber Insurance", hi: "साइबर बीमा" },
        { en: "Professional Liability Insurance", hi: "व्यावसायिक देयता बीमा" },
        { en: "And other general insurance solutions", hi: "और अन्य सामान्य बीमा समाधान" },
      ],
    },
  },
  claims: {
    title: { en: "Claims Management Services", hi: "क्लेम प्रबंधन सेवाएँ" },
    sub: { en: "Supporting You Through the Claims Process", hi: "क्लेम प्रक्रिया में आपका सहयोग" },
    intro: {
      en: "A claim can be a stressful experience. Policy Adda provides claims management support to help customers navigate the process and coordinate with relevant stakeholders. Our claims support may involve coordination between the customer, insurer, workshop, dealer and other concerned parties, as applicable.",
      hi: "क्लेम एक तनावपूर्ण अनुभव हो सकता है। पॉलिसी अड्डा ग्राहकों को प्रक्रिया में सहयोग देने और संबंधित पक्षों के साथ समन्वय करने के लिए क्लेम प्रबंधन सहायता प्रदान करता है। हमारा क्लेम सहयोग ग्राहक, बीमाकर्ता, वर्कशॉप, डीलर और अन्य संबंधित पक्षों के बीच समन्वय से जुड़ा हो सकता है।",
    },
    supports: [
      { en: "Assistance with claim-related communication", hi: "क्लेम से संबंधित संचार में सहायता" },
      { en: "Documentation support", hi: "दस्तावेज़ों में सहायता" },
      { en: "Coordination with relevant parties", hi: "संबंधित पक्षों के साथ समन्वय" },
      { en: "Assistance in claim submission processes", hi: "क्लेम दाखिल प्रक्रिया में सहायता" },
      { en: "Follow-up on claim-related requirements", hi: "क्लेम संबंधी आवश्यकताओं पर अनुवर्ती" },
      { en: "Support throughout the claim journey", hi: "पूरी क्लेम यात्रा में सहयोग" },
    ],
    objective: {
      en: "Our objective is to help reduce communication gaps, documentation issues and avoidable delays.",
      hi: "हमारा उद्देश्य संचार की कमियों, दस्तावेज़ी समस्याओं और टाली जा सकने वाली देरी को कम करने में मदद करना है।",
    },
    disclaimer: {
      en: "Important: Final claim decisions, approvals and settlements are subject to the terms and conditions of the respective insurance policy and the insurer's assessment.",
      hi: "महत्वपूर्ण: अंतिम क्लेम निर्णय, अनुमोदन और निपटान संबंधित बीमा पॉलिसी के नियमों और बीमाकर्ता के मूल्यांकन के अधीन हैं।",
    },
  },
  team: {
    title: { en: "Meet the Team Behind Policy Adda", hi: "पॉलिसी अड्डा के पीछे की टीम से मिलें" },
    intro: {
      en: "Our leadership team brings together experience across business development, insurance advisory, operations, sales, claims management and customer service.",
      hi: "हमारी नेतृत्व टीम व्यावसायिक विकास, बीमा सलाह, संचालन, बिक्री, क्लेम प्रबंधन और ग्राहक सेवा में अनुभव को एक साथ लाती है।",
    },
    members: [
      { name: "Anubhaw Ajad", role: { en: "Founder", hi: "संस्थापक" }, text: { en: "Provides strategic direction and leads the overall growth and development of Policy Adda.", hi: "रणनीतिक दिशा प्रदान करते हैं और पॉलिसी अड्डा के समग्र विकास का नेतृत्व करते हैं।" } },
      { name: "Gaurav Jaiswal", role: { en: "Director", hi: "निदेशक" }, text: { en: "Responsible for business leadership, strategic execution and organisational growth.", hi: "व्यावसायिक नेतृत्व, रणनीतिक कार्यान्वयन और संगठनात्मक विकास के लिए जिम्मेदार।" } },
      { name: "Bijay Shankar Saha", role: { en: "Chief Advisor", hi: "मुख्य सलाहकार" }, text: { en: "Provides strategic guidance and insurance-related advisory expertise.", hi: "रणनीतिक मार्गदर्शन और बीमा संबंधी सलाहकार विशेषज्ञता प्रदान करते हैं।" } },
      { name: "Gaurav Kumar", role: { en: "Business Head", hi: "व्यवसाय प्रमुख" }, text: { en: "Focuses on business development, client relationships and business growth.", hi: "व्यावसायिक विकास, ग्राहक संबंधों और व्यवसाय वृद्धि पर ध्यान केंद्रित करते हैं।" } },
      { name: "Prithvi Singh", role: { en: "T&Q Head", hi: "टी एंड क्यू प्रमुख" }, text: { en: "Leads revenue growth initiatives, sales strategy and related business functions.", hi: "राजस्व वृद्धि पहलों, बिक्री रणनीति और संबद्ध व्यावसायिक कार्यों का नेतृत्व करते हैं।" } },
      { name: "Vikram Kumar Singh", role: { en: "Operations Head", hi: "संचालन प्रमुख" }, text: { en: "Oversees operational processes, service delivery and process optimisation.", hi: "संचालन प्रक्रियाओं, सेवा वितरण और प्रक्रिया अनुकूलन की देखरेख करते हैं।" } },
      { name: "Ashutosh Rohan", role: { en: "Claims Head", hi: "क्लेम प्रमुख" }, text: { en: "Leads claims management and customer support functions.", hi: "क्लेम प्रबंधन और ग्राहक सहायता कार्यों का नेतृत्व करते हैं।" } },
    ],
  },
  awards: {
    title: { en: "Awards", hi: "पुरस्कार" },
    text: {
      en: "Awards and recognition details are being finalised and will be shared soon.",
      hi: "पुरस्कारों और सम्मानों का विवरण अंतिम चरण में है और जल्द ही साझा किया जाएगा।",
    },
  },
  careers: {
    title: { en: "Careers @Policy Adda", hi: "करियर @पॉलिसी अड्डा" },
    tagline: { en: "Build Your Career with Policy Adda", hi: "पॉलिसी अड्डा के साथ अपना करियर बनाएँ" },
    intro: {
      en: "At Policy Adda, we believe that our people are at the heart of our growth. We are building a team of motivated, customer-focused and talented professionals who want to learn, take responsibility and grow with the organisation. If you are looking for an opportunity to develop your skills while working in the insurance industry, Policy Adda could be the right place for you.",
      hi: "पॉलिसी अड्डा में हम मानते हैं कि हमारे लोग हमारी वृद्धि के केंद्र हैं। हम ऐसे प्रेरित, ग्राहक-केंद्रित और प्रतिभाशाली पेशेवरों की टीम बना रहे हैं जो सीखना, ज़िम्मेदारी लेना और संगठन के साथ बढ़ना चाहते हैं। अगर आप बीमा उद्योग में काम करते हुए अपने कौशल विकसित करने का अवसर ढूँढ रहे हैं, तो पॉलिसी अड्डा आपके लिए सही जगह हो सकती है।",
    },
    why: {
      title: { en: "Why Join Policy Adda?", hi: "पॉलिसी अड्डा क्यों ज्वाइन करें?" },
      items: [
        { title: { en: "Growth Opportunities", hi: "विकास के अवसर" }, text: { en: "We encourage employees to learn new skills, take on responsibilities and grow professionally.", hi: "हम कर्मचारियों को नए कौशल सीखने, ज़िम्मेदारियाँ लेने और पेशेवर रूप से बढ़ने के लिए प्रोत्साहित करते हैं।" } },
        { title: { en: "Learning & Development", hi: "सीख और विकास" }, text: { en: "Our team members get opportunities to develop their knowledge of insurance, sales, customer service, operations and other business functions.", hi: "हमारी टीम के सदस्यों को बीमा, बिक्री, ग्राहक सेवा, संचालन और अन्य व्यावसायिक कार्यों का ज्ञान विकसित करने के अवसर मिलते हैं।" } },
        { title: { en: "Collaborative Work Culture", hi: "सहयोगी कार्य संस्कृति" }, text: { en: "We believe in teamwork, mutual respect and open communication. Everyone's contribution matters.", hi: "हम टीम वर्क, आपसी सम्मान और खुले संचार में विश्वास करते हैं। हर किसी का योगदान महत्वपूर्ण है।" } },
        { title: { en: "Performance Recognition", hi: "प्रदर्शन की पहचान" }, text: { en: "We value commitment and performance and believe in recognising employees for their contribution to the organisation.", hi: "हम प्रतिबद्धता और प्रदर्शन को महत्व देते हैं और संगठन में योगदान के लिए कर्मचारियों की पहचान में विश्वास करते हैं।" } },
        { title: { en: "Customer-Focused Environment", hi: "ग्राहक-केंद्रित वातावरण" }, text: { en: "Our work directly helps individuals, families and businesses understand and access insurance solutions. Customer service is therefore at the centre of our work.", hi: "हमारा कार्य सीधे व्यक्तियों, परिवारों और व्यवसायों को बीमा समाधान समझने और प्राप्त करने में मदद करता है। इसलिए ग्राहक सेवा हमारे कार्य के केंद्र में है।" } },
        { title: { en: "Career Progression", hi: "कैरियर प्रगति" }, text: { en: "We support employees who demonstrate commitment, capability and a willingness to take on greater responsibilities.", hi: "हम उन कर्मचारियों का समर्थन करते हैं जो प्रतिबद्धता, क्षमता और बड़ी ज़िम्मेदारियाँ लेने की इच्छा दिखाते हैं।" } },
      ],
    },
    life: {
      title: { en: "Life at Policy Adda", hi: "पॉलिसी अड्डा में जीवन" },
      text: {
        en: "Working at Policy Adda means being part of a growing organisation where every day brings new learning opportunities. Our teams work across areas such as:",
        hi: "पॉलिसी अड्डा में काम करने का मतलब एक बढ़ते संगठन का हिस्सा होना है जहाँ हर दिन नए सीखने के अवसर मिलते हैं। हमारी टीमें विभिन्न क्षेत्रों में काम करती हैं:",
      },
      areas: [
        "Sales & Business Development",
        "Tele-sales",
        "Customer Service",
        "Insurance Operations",
        "Claims Support",
        "Renewals",
        "Corporate Business",
        "Technology & Digital",
        "Human Resources",
      ],
      note: {
        en: "We encourage a professional, supportive and performance-oriented workplace where employees can contribute, learn and grow.",
        hi: "हम एक पेशेवर, सहयोगी और प्रदर्शन-उन्मुख कार्यस्थल को प्रोत्साहित करते हैं जहाँ कर्मचारी योगदान दे सकें, सीख सकें और बढ़ सकें।",
      },
    },
    whoCanJoin: {
      title: { en: "Who Can Join Us?", hi: "हमसे कौन जुड़ सकता है?" },
      items: [
        { en: "Freshers looking to start their career", hi: "करियर शुरू करने को इच्छुक फ्रेशर्स" },
        { en: "Experienced insurance professionals", hi: "अनुभवी बीमा पेशेवर" },
        { en: "Sales and business development professionals", hi: "बिक्री और व्यावसायिक विकास पेशेवर" },
        { en: "Professionals interested in corporate insurance", hi: "कॉर्पोरेट बीमा में रुचि रखने वाले पेशेवर" },
        { en: "Candidates looking for leadership opportunities", hi: "नेतृत्व के अवसर तलाशने वाले उम्मीदवार" },
      ],
      note: {
        en: "Specific eligibility and experience requirements may vary depending on the position.",
        hi: "विशिष्ट पात्रता और अनुभव आवश्यकताएँ पद के अनुसार भिन्न हो सकती हैं।",
      },
    },
    resume: {
      title: { en: "Don't See a Suitable Opening?", hi: "उपयुक्त अवसर नहीं मिला?" },
      text: {
        en: "Even if you do not find a current opening matching your profile, you can share your resume with us. We are always interested in connecting with talented professionals who can contribute to the growth of Policy Adda.",
        hi: "यदि आपको अपनी प्रोफ़ाइल से मेल खाता कोई मौजूदा अवसर नहीं मिलता, तो भी आप अपना रिज़्यूमे हमारे साथ साझा कर सकते हैं। हम हमेशा ऐसे प्रतिभाशाली पेशेवरों से जुड़ने में रुचि रखते हैं जो पॉलिसी अड्डा की वृद्धि में योगदान दे सकें।",
      },
      cta: { en: "Share Your Resume", hi: "अपना रिज़्यूमे साझा करें" },
    },
    workCulture: {
      title: { en: "Our Work Culture", hi: "हमारी कार्य संस्कृति" },
      items: [
        { title: { en: "Integrity", hi: "सत्यनिष्ठा" }, text: { en: "We believe in honest and responsible professional conduct.", hi: "हम ईमानदार और ज़िम्मेदार पेशेवर आचरण में विश्वास करते हैं।" } },
        { title: { en: "Teamwork", hi: "टीम वर्क" }, text: { en: "We work together and support each other to achieve common goals.", hi: "हम सामान्य लक्ष्यों को पाने के लिए एक साथ काम करते हैं और एक-दूसरे का समर्थन करते हैं।" } },
        { title: { en: "Customer Focus", hi: "ग्राहक केंद्रितता" }, text: { en: "Our customers are at the centre of our work.", hi: "हमारे ग्राहक हमारे कार्य के केंद्र में हैं।" } },
        { title: { en: "Ownership", hi: "स्वामित्व" }, text: { en: "We encourage employees to take responsibility for their work and commitments.", hi: "हम कर्मचारियों को अपने कार्य और प्रतिबद्धताओं की ज़िम्मेदारी लेने के लिए प्रोत्साहित करते हैं।" } },
        { title: { en: "Learning", hi: "सीखना" }, text: { en: "We encourage continuous learning and improvement.", hi: "हम निरंतर सीखने और सुधार को प्रोत्साहित करते हैं।" } },
        { title: { en: "Excellence", hi: "उत्कृष्टता" }, text: { en: "We strive to improve our processes, services and customer experience.", hi: "हम अपनी प्रक्रियाओं, सेवाओं और ग्राहक अनुभव को बेहतर बनाने का प्रयास करते हैं।" } },
      ],
    },
    joinCta: { en: "Join the Policy Adda Team", hi: "पॉलिसी अड्डा टीम से जुड़ें" },
    joinText: {
      en: "If you are ambitious, willing to learn and ready to take on new challenges, we would like to hear from you. Start your journey with Policy Adda.",
      hi: "यदि आप महत्वाकांक्षी हैं, सीखने को तैयार हैं और नई चुनौतियाँ लेने के लिए तैयार हैं, तो हम आपसे सुनना चाहेंगे। पॉलिसी अड्डा के साथ अपनी यात्रा शुरू करें।",
    },
    safety: {
      title: { en: "Recruitment Safety Notice", hi: "भर्ती सुरक्षा सूचना" },
      text: {
        en: "Policy Adda does not ask candidates to make payments, transfer money or pay any fee for applying for a job or participating in the recruitment process. Candidates should be cautious of fraudulent job offers or individuals claiming to represent Policy Adda and asking for money or sensitive financial information. Please apply only through our official recruitment channels and verify any communication that appears suspicious.",
        hi: "पॉलिसी अड्डा उम्मीदवारों से नौकरी के लिए आवेदन या भर्ती प्रक्रिया में भाग लेने के लिए कोई भुगतान, पैसा ट्रांसफर या शुल्क नहीं मांगता। उम्मीदवारों को फर्जी नौकरी के प्रस्तावों या पॉलिसी अड्डा का प्रतिनिधित्व करने का दावा करने वाले और पैसे या संवेदनशील वित्तीय जानकारी मांगने वाले व्यक्तियों से सतर्क रहना चाहिए। कृपया केवल हमारे आधिकारिक भर्ती चैनलों के माध्यम से आवेदन करें और किसी भी संदिग्ध संचार की पुष्टि करें।",
      },
    },
  },
};

export function pickLocale<T extends Bilingual>(value: T, locale: Locale): string {
  return locale === "hi" ? value.hi : value.en;
}