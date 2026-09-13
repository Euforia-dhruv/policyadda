export interface FaqItem {
  id: string;
  q: { en: string; hi: string };
  a: { en: string; hi: string };
}

/**
 * APPROVED / CLIENT-PROVIDED FAQs.
 * These must be reviewed by the client before display as the final set.
 */
export const faqs: FaqItem[] = [
  {
    id: "fq-how",
    q: {
      en: "How does PolicyAdda help me choose a policy?",
      hi: "PolicyAdda पॉलिसी चुनने में मेरी मदद कैसे करता है?",
    },
    a: {
      en: "PolicyAdda explains insurance categories and available policy concepts in plain language. A representative can then help you understand options, eligibility, and the application process — step by step.",
      hi: "PolicyAdda बीमा श्रेणियों और उपलब्ध पॉलिसी कॉन्सेप्ट को सरल भाषा में समझाता है। एक प्रतिनिधि आपको विकल्प, पात्रता और आवेदन प्रक्रिया को चरण-दर-चरण समझने में मदद कर सकता है।",
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
      en: "Your details are used only to process your enquiry and are handled by our team in line with our privacy commitments. A formal Privacy Policy will be published here once verified.",
      hi: "आपकी जानकारी केवल आपकी पूछताछ को संसाधित करने के लिए उपयोग की जाती है और हमारी टीम द्वारा गोपनीयता प्रतिबद्धताओं के अनुसार संभाली जाती है। सत्यापन के बाद औपचारिक गोपनीयता नीति यहाँ प्रकाशित की जाएगी।",
    },
  },
  {
    id: "fq-next",
    q: {
      en: "What happens after I submit an enquiry?",
      hi: "आवेदन जमा करने के बाद क्या होता है?",
    },
    a: {
      en: "You receive an application ID. Our team reviews it, an executive is assigned, and you are contacted — typically through the phone number you provide. You can track your status anytime using the Track page.",
      hi: "आपको एक आवेदन आईडी मिलता है। हमारी टीम इसकी समीक्षा करती है, एक कार्यकारी नियुक्त किया जाता है, और आपसे संपर्क किया जाता है — आमतौर पर आपके द्वारा दिए गए फ़ोन नंबर के माध्यम से। आप ट्रैक पेज का उपयोग करके कभी भी अपनी स्थिति देख सकते हैं।",
    },
  },
  {
    id: "fq-insurer",
    q: {
      en: "Are you partnered with the insurance companies listed?",
      hi: "क्या आप सूचीबद्ध बीमा कंपनियों के साथ साझेदार हैं?",
    },
    a: {
      en: "Policy options may be aggregated through multiple insurers. The exact relationship with each insurer is being confirmed and will be disclosed transparently once verified.",
      hi: "पॉलिसी विकल्प कई बीमाकर्ताओं के माध्यम से एकत्रित हो सकते हैं। प्रत्येक बीमाकर्ता के साथ सटीक संबंध की पुष्टि की जा रही है और सत्यापन के बाद पारदर्शी रूप से बताया जाएगा।",
    },
  },
  {
    id: "fq-claim",
    q: {
      en: "Will PolicyAdda help me during claims?",
      hi: "क्या PolicyAdda क्लेम के दौरान मेरी मदद करेगा?",
    },
    a: {
      en: "PolicyAdda assists customers through the policy process, including guidance on what to do when you need to claim. Claims are ultimately settled by the insurer according to policy terms.",
      hi: "PolicyAdda ग्राहकों को पॉलिसी प्रक्रिया में सहायता करता है, जिसमें क्लेम के समय क्या करना है, इस पर मार्गदर्शन शामिल है। क्लेम अंततः बीमाकर्ता द्वारा पॉलिसी की शर्तों के अनुसार निपटाए जाते हैं।",
    },
  },
];