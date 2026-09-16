export interface FaqItem {
  id: string;
  q: { en: string; hi: string };
  a: { en: string; hi: string };
}

/**
 * REAL client FAQs from the PolicyAdda website documentation.
 * Sourced from the client-provided Website.zip support page.
 */
export const faqs: FaqItem[] = [
  {
    id: "fq-how",
    q: {
      en: "How does Policy Adda help me choose a policy?",
      hi: "Policy Adda पॉलिसी चुनने में मेरी मदद कैसे करता है?",
    },
    a: {
      en: "Policy Adda helps you understand insurance categories and compare policy options in plain language. Our knowledgeable advisors match policies to your budget and requirements, so you only pay for features you actually want.",
      hi: "Policy Adda आपको बीमा श्रेणियों को समझने और पॉलिसी विकल्पों की तुलना करने में मदद करता है। हमारे ज्ञानवान सलाहकार आपके बजट और आवश्यकताओं के अनुसार पॉलिसी का मिलान करते हैं।",
    },
  },
  {
    id: "fq-free",
    q: {
      en: "Do I have to pay for assistance?",
      hi: "क्या सहायता के लिए मुझे भुगतान करना होगा?",
    },
    a: {
      en: "Understanding your options and submitting an enquiry through this website is free. Any fees, if applicable, will be clearly explained before you commit to anything.",
      hi: "इस वेबसाइट के माध्यम से आपके विकल्पों को समझना और आवेदन जमा करना निःशुल्क है। कोई भी शुल्क, यदि लागू हो, किसी भी चीज़ के लिए प्रतिबद्ध होने से पहले स्पष्ट रूप से समझाया जाएगा।",
    },
  },
  {
    id: "fq-info",
    q: {
      en: "Is my information handled securely?",
      hi: "क्या मेरी जानकारी सुरक्षित रूप से संभाली जाती है?",
    },
    a: {
      en: "Yes. Your details are used only to process your enquiry and are handled by our team in line with our privacy commitments. We use cookies and similar technologies when you visit our website to enable essential functions and improve your experience.",
      hi: "हाँ। आपकी जानकारी केवल आपकी पूछताछ को संसाधित करने के लिए उपयोग की जाती है और हमारी गोपनीयता प्रतिबद्धताओं के अनुसार संभाली जाती है।",
    },
  },
  {
    id: "fq-next",
    q: {
      en: "What happens after I submit an enquiry?",
      hi: "आवेदन जमा करने के बाद क्या होता है?",
    },
    a: {
      en: "You receive an Application ID. Our team reviews it, an executive is assigned, and you are contacted — typically through the phone number you provide. You can track your status anytime using the Track page.",
      hi: "आपको एक आवेदन आईडी मिलती है। हमारी टीम इसकी समीक्षा करती है, एक कार्यकारी नियुक्त किया जाता है, और आपसे संपर्क किया जाता है। आप ट्रैक पेज का उपयोग करके कभी भी अपनी स्थिति देख सकते हैं।",
    },
  },
  {
    id: "fq-claim",
    q: {
      en: "Will Policy Adda help me fight my case if the insurer wrongfully rejects my claim?",
      hi: "क्या Policy Adda मेरे दावे को गलत तरीके से अस्वीकार करने पर मेरा केस लड़ने में मदद करेगा?",
    },
    a: {
      en: "Absolutely. As your insurance broker, Policy Adda acts as your advocate. Our dedicated Claims Expert reviews every rejection. If your claim is valid but unfairly rejected, our legal and technical experts will represent your case directly to the insurance company's grievance officer or the Insurance Ombudsman.",
      hi: "बिल्कुल। आपके बीमा दलाल के रूप में, Policy Adda आपका प्रतिनिधित्व करता है। हमारा समर्पित क्लेम विशेषज्ञ हर अस्वीकरण की समीक्षा करता है।",
    },
  },
  {
    id: "fq-cashless",
    q: {
      en: "What is the difference between Cashless and Reimbursement claims?",
      hi: "कैशलेस और रीइम्बर्समेंट दावों में क्या अंतर है?",
    },
    a: {
      en: "Cashless: Available at Network Hospitals or Authorized Garages. The insurer settles the eligible bills directly. You only pay for non-payable items or deductibles. Reimbursement: You pay the entire bill out of your pocket, collect all original documents and invoices, and submit them to get your money refunded.",
      hi: "कैशलेस: नेटवर्क अस्पतालों या अधिकृत गैराज में उपलब्ध। बीमाकर्ता पात्र बिलों का भुगतान सीधे करता है। रीइम्बर्समेंट: आप पूरा बिल अपनी जेब से भुगतान करते हैं, फिर दस्तावेज़ जमा करके रिफंड प्राप्त करते हैं।",
    },
  },
  {
    id: "fq-fir",
    q: {
      en: "Is an FIR mandatory for motor claims?",
      hi: "क्या मोटर दावों के लिए FIR अनिवार्य है?",
    },
    a: {
      en: "An FIR is mandatory if: there is injury or death of a person, property damage is caused to a Third Party, or the vehicle is stolen. For minor self-damage (e.g., scraping against a pillar), an FIR is generally not required.",
      hi: "FIR अनिवार्य है यदि: किसी व्यक्ति को चोट या मृत्यु होती है, थर्ड-पार्टी को संपत्ति क्षति होती है, या वाहन चोरी हो जाता है। छोटी आत्म-क्षति के लिए FIR आमतौर पर आवश्यक नहीं है।",
    },
  },
  {
    id: "fq-irrdai",
    q: {
      en: "What is IRDAI and how does it protect me?",
      hi: "IRDAI क्या है और यह मेरी रक्षा कैसे करता है?",
    },
    a: {
      en: "IRDAI (Insurance Regulatory and Development Authority of India) regulates the insurance sector in India. Its guidelines and regulations help ensure fair practices, transparency, and protection of policyholders' interests. As per IRDAI regulations, insurers generally settle straightforward death claims within 15 to 30 days.",
      hi: "IRDAI (भारतीय बीमा नियामक और विकास प्राधिकरण) भारत में बीमा क्षेत्र को नियंत्रित करता है। इसके दिशानिर्देश पॉलिसीधारकों के हितों की सुरक्षा सुनिश्चित करते हैं।",
    },
  },
  {
    id: "fq-renewal",
    q: {
      en: "How do I renew my existing policy?",
      hi: "मैं अपनी मौजूदा पॉलिसी को कैसे नवीनीकृत करूँ?",
    },
    a: {
      en: "You can renew your policy through our online platform in just a few minutes. For complex commercial policies like Property, Business, or Workmen Compensation, we provide personalized paperless renewal assistance.",
      hi: "आप हमारे ऑनलाइन प्लेटफॉर्म के माध्यम से कुछ ही मिनटों में अपनी पॉलिसी नवीनीकृत कर सकते हैं। जटिल वाणिज्यिक पॉलिसियों के लिए हम पेपरलेस नवीनीकरण सहायता प्रदान करते हैं।",
    },
  },
];
