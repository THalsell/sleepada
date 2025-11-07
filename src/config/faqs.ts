export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'products',
    title: 'Products & Mattresses',
    questions: [
      {
        question: "What's the difference between Core, Prime, and FIR+?",
        answer: "The Sleepada Core is our entry-level memory foam mattress with medium-firm support, perfect for guest rooms or budget-conscious buyers. The Prime features gel-infused cooling and medium support, ideal for couples and hot sleepers. The FIR+ is our premium mattress with Far Infrared technology, advanced cooling, and medium-plush comfort for ultimate recovery and performance."
      },
      {
        question: "What sizes do you offer?",
        answer: "We offer all standard mattress sizes: Twin, Full, Queen, King, and California King. All sizes are available for each mattress tier."
      },
      {
        question: "Are your mattresses CertiPUR-US® certified?",
        answer: "Yes! All Sleepada mattresses use CertiPUR-US® certified foams, meaning they're made without ozone depleters, harmful chemicals, heavy metals, or formaldehyde."
      },
      {
        question: "What is Far Infrared (FIR) technology?",
        answer: "FIR technology uses your body's natural heat and reflects it back as far infrared waves, promoting circulation, muscle recovery, and deeper sleep. It's available exclusively in our FIR+ mattress. Learn more on our Infrared Technology page."
      },
      {
        question: "What firmness levels do you offer?",
        answer: "Core is medium-firm, Prime is medium, and FIR+ is medium-plush. Each is designed to accommodate all sleep positions."
      },
      {
        question: "Do you sell adjustable bases or bed frames?",
        answer: "Currently, we focus on mattresses, pillows, toppers, and pet beds. However, our mattresses are compatible with most adjustable bases and bed frames."
      }
    ]
  },
  {
    id: 'ordering',
    title: 'Ordering & Payment',
    questions: [
      {
        question: "How do I place an order?",
        answer: "You can order directly through our website or contact us at sleepadasales@gmail.com. Select your mattress, choose your size, and add to cart. We accept major credit cards and offer secure checkout."
      },
      {
        question: "Do you offer financing or payment plans?",
        answer: "Contact us for current financing options at sleepadasales@gmail.com"
      },
      {
        question: "Can I purchase on Amazon?",
        answer: "Yes! Sleepada mattresses are available on Amazon with Prime shipping."
      },
      {
        question: "Do you have a showroom where I can try the mattresses?",
        answer: "We're an online-direct brand to keep costs low and pass savings to you. However, we encourage you to contact us with questions — we're happy to help you find the perfect mattress."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and other secure payment methods through our checkout."
      }
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    questions: [
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free shipping to the continental United States on all mattress orders."
      },
      {
        question: "How long does shipping take?",
        answer: "Most orders ship within 2-3 business days and arrive within 5-10 business days. You'll receive tracking information once your order ships."
      },
      {
        question: "How is the mattress delivered?",
        answer: "Your mattress arrives compressed, rolled, and boxed for easy delivery right to your door. Simply unbox, unroll, and allow 24-48 hours for full expansion."
      },
      {
        question: "Do you ship to Alaska, Hawaii, or internationally?",
        answer: "Currently, we ship to the continental US. For Alaska, Hawaii, or international orders, please contact us at sleepadasales@gmail.com for options."
      },
      {
        question: "Do you offer white glove delivery or setup?",
        answer: "Contact us at sleepadasales@gmail.com for white glove delivery options and pricing."
      },
      {
        question: "What if I'm not home when it's delivered?",
        answer: "The package will typically be left at your door. Make sure someone is available to bring the box inside, as mattresses can be heavy."
      }
    ]
  },
  {
    id: 'warranty',
    title: 'Warranty & Returns',
    questions: [
      {
        question: "What warranty do Sleepada mattresses come with?",
        answer: "Warranty coverage ranges from 3-20 years depending on the model. Contact us at sleepadasales@gmail.com for specific warranty details for your mattress."
      },
      {
        question: "What does the warranty cover?",
        answer: "Our warranty covers manufacturing defects including significant sagging, broken coils (if applicable), and material defects. Normal wear and tear, stains, and damage from improper use are not covered."
      },
      {
        question: "Do you have a sleep trial or return policy?",
        answer: "Please contact us at sleepadasales@gmail.com for current return policy and trial period information."
      },
      {
        question: "How do I file a warranty claim?",
        answer: "Contact us at sleepadasales@gmail.com with your order number, photos of the issue, and a description. Our team will guide you through the process."
      },
      {
        question: "Can I exchange my mattress for a different firmness?",
        answer: "Contact us to discuss exchange options at sleepadasales@gmail.com"
      }
    ]
  },
  {
    id: 'care',
    title: 'Care & Maintenance',
    questions: [
      {
        question: "How do I set up my new mattress?",
        answer: "Unbox your mattress, remove the plastic wrap, and unroll it on your bed frame or foundation. Allow 24-48 hours for full expansion. The new mattress smell (off-gassing) is normal and will dissipate within a few days."
      },
      {
        question: "Do I need a box spring?",
        answer: "No, our mattresses work on any flat, supportive surface including platform beds, slatted frames, adjustable bases, or traditional box springs."
      },
      {
        question: "How often should I rotate my mattress?",
        answer: "We recommend rotating your mattress head-to-foot every 3-6 months to ensure even wear."
      },
      {
        question: "Can I flip my Sleepada mattress?",
        answer: "No, our mattresses are designed with specific layers and should not be flipped. Only rotate head-to-foot."
      },
      {
        question: "How do I clean my mattress?",
        answer: "Spot clean with a mild detergent and warm water. Do not soak or machine wash. We strongly recommend using a mattress protector to keep your mattress clean."
      },
      {
        question: "Should I use a mattress protector?",
        answer: "Yes! A quality mattress protector extends the life of your mattress and keeps it clean. Note that stains may void your warranty."
      },
      {
        question: "How long will my Sleepada mattress last?",
        answer: "With proper care, your Sleepada mattress should provide 7-10 years of comfortable sleep or more, depending on the model and usage."
      }
    ]
  },
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        question: "Where are Sleepada mattresses made?",
        answer: "All Sleepada mattresses are handcrafted in Tennessee, USA using premium domestic and imported materials."
      },
      {
        question: "Are your mattresses safe for children?",
        answer: "Yes! Our CertiPUR-US® certified foams are made without harmful chemicals, making them safe for the whole family."
      },
      {
        question: "Do your mattresses contain fiberglass?",
        answer: "Contact us at sleepadasales@gmail.com for specific material information."
      },
      {
        question: "Can I use an electric blanket or heating pad?",
        answer: "Yes, but use caution. High heat can damage memory foam over time. Follow the manufacturer's instructions for your heating product."
      },
      {
        question: "Do you make custom sizes?",
        answer: "Contact us at sleepadasales@gmail.com to discuss custom size options."
      },
      {
        question: "How can I contact customer service?",
        answer: "Email us at sleepadasales@gmail.com. We typically respond within 1-2 business days."
      },
      {
        question: "Do you have a physical store location?",
        answer: "No, we're an online-direct brand, which allows us to offer premium mattresses at better prices by eliminating retail overhead."
      }
    ]
  }
];
