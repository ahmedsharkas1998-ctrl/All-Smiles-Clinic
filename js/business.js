/**
 * All Smiles Dental Clinic - Centralized Business Configuration
 * Single Source of Truth for verified clinic details, contact information,
 * services directory, and dynamic data binding.
 */

const BUSINESS_DATA = {
  name: "All Smiles Dental Clinic",
  tagline: "Pediatric & Family Dentistry",
  headline: "Healthy Smiles Start Here.",
  subheadline: "Comfortable, modern dental care for little smiles, growing families, and everyone in between.",
  
  rating: {
    score: 4.8,
    stars: "★★★★★",
    reviewCount: 31,
    source: "Google Reviews",
    display: "4.8 ★ (31 Google Reviews)",
  },

  location: {
    mall: "Silver Mall",
    floor: "1st Floor",
    street: "North 90th Street",
    district: "First Settlement",
    city: "New Cairo 1",
    governorate: "Cairo Governorate",
    country: "Egypt",
    postalCode: "4740601",
    fullAddress: "Silver Mall, 1st Floor, North 90th Street, First Settlement, New Cairo 1, Cairo Governorate, Egypt (4740601)",
    shortAddress: "Silver Mall, 1st Floor, North 90th St, First Settlement, New Cairo",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=All+Smiles+Dental+Clinic+Silver+Mall+1st+Floor+North+90th+St+First+Settlement+New+Cairo+Egypt",
    embedMapUrl: "https://maps.google.com/maps?q=Silver+Mall+North+90th+Street+First+Settlement+New+Cairo+Egypt&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  contact: {
    primaryPhone: "01225522201",
    primaryPhoneIntl: "+20 122 552 2201",
    primaryPhoneTel: "+201225522201",
    
    additionalPhone: "+20 101 142 9356",
    additionalPhoneTel: "+201011429356",
    
    whatsappNumber: "01225522201",
    whatsappIntl: "+20 122 552 2201",
    whatsappUrl: "https://wa.me/201225522201",
    whatsappDefaultMessage: "Hello All Smiles Dental Clinic, I would like to book a consultation / ask about pediatric & family dental care.",
    
    instagramHandle: "@all_smiles_dentist",
    instagramUrl: "https://www.instagram.com/all_smiles_dentist/",
    
    openingHoursPlaceholder: "By Appointment • Flexible Family Scheduling",
  },

  brandColors: {
    primaryBg: "#F7F4EF",
    cream: "#EFE9DF",
    secondary: "#E4DED3",
    dark: "#242321",
    muted: "#77736C",
    naturalGreen: "#7D8978",
    warmAccent: "#C7B9A4",
    white: "#FFFFFF"
  },

  pillars: [
    {
      number: "01",
      title: "Child-Friendly Care",
      description: "Helping little patients feel comfortable, confident, and at ease from their very first visit."
    },
    {
      number: "02",
      title: "Family Dentistry",
      description: "Dental care tailored to support every generation under one welcoming, modern roof."
    },
    {
      number: "03",
      title: "Comfort-First Experience",
      description: "A calm, gentle environment designed to eliminate anxiety and make every dental visit easier."
    },
    {
      number: "04",
      title: "Modern Dentistry",
      description: "Contemporary dental techniques, precise diagnosis, and warm, attentive personal care."
    }
  ],

  featuredServices: [
    {
      id: "pediatric-dentistry",
      number: "01",
      title: "Pediatric Dentistry",
      category: "Pediatric",
      summary: "Gentle, child-focused dental care designed around growing smiles, positive memories, and lifelong oral health habits.",
      details: "Our pediatric approach is built on patience and gentle communication. We ensure your child feels safe, heard, and excited about taking care of their teeth.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      badge: "Signature Specialty"
    },
    {
      id: "preventive-dentistry",
      number: "02",
      title: "Preventive Dentistry",
      category: "General",
      summary: "Helping patients of all ages maintain vibrant, healthy smiles through thorough exams and gentle cleanings.",
      details: "Preventive care stops problems before they start. Routine checks, plaque removal, and proactive guidance safeguard your family's oral well-being.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      badge: "Routine Care"
    },
    {
      id: "family-dentistry",
      number: "03",
      title: "Family Dentistry",
      category: "Family",
      summary: "Comprehensive dental care for parents, teens, children, and seniors, scheduled conveniently for the whole household.",
      details: "We coordinate family appointments to make quality oral healthcare accessible, unhurried, and reassuring for everyone in the family.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      badge: "All Ages"
    },
    {
      id: "cosmetic-dentistry",
      number: "04",
      title: "Cosmetic Dentistry",
      category: "Aesthetics",
      summary: "Subtle and transformative treatments designed to enhance the natural balance, brightness, and beauty of your smile.",
      details: "From professional whitening to aesthetic smile refinement, we help you achieve a confident, natural-looking smile.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      badge: "Aesthetics"
    },
    {
      id: "restorative-dentistry",
      number: "05",
      title: "Restorative Dentistry",
      category: "Restorative",
      summary: "Restoring the natural strength, functionality, and aesthetic harmony of damaged or decayed teeth.",
      details: "Using modern materials and conservative dentistry principles, we repair and protect teeth for long-term oral function.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      badge: "Restoration"
    },
    {
      id: "dental-emergencies",
      number: "06",
      title: "Dental Emergencies",
      category: "Urgent Care",
      summary: "Prompt, caring relief when unexpected dental pain, injury, or urgent concerns arise.",
      details: "We prioritize urgent family dental concerns to relieve discomfort swiftly and protect damaged teeth.",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
      badge: "Urgent Assistance"
    }
  ],

  servicesDirectory: {
    "PEDIATRIC DENTISTRY": [
      "Preventive Pediatric Care",
      "Children's Dental Exams",
      "Children's Cleanings",
      "Fluoride Treatments",
      "Cavity Prevention",
      "Dental Education & Habit Guidance"
    ],
    "FAMILY DENTISTRY": [
      "Comprehensive Dental Exams",
      "Professional Cleanings",
      "Preventive Oral Care",
      "General Dentistry",
      "Emergency Dental Care"
    ],
    "COSMETIC DENTISTRY": [
      "Smile Enhancement Consultations",
      "Professional Teeth Whitening",
      "Aesthetic Smile Consultations"
    ],
    "RESTORATIVE DENTISTRY": [
      "Dental Fillings & Restorations",
      "Protective Dental Crowns",
      "Restorative Tooth Consultations"
    ]
  },

  pediatricFeatures: [
    { title: "First Dental Visit", desc: "A calm, positive 'happy visit' introduction designed to build lifelong trust without fear." },
    { title: "Preventive Care", desc: "Gentle assessments to track oral development and prevent tooth decay before it starts." },
    { title: "Cavity Prevention", desc: "Protective sealants and customized care routines suited for active growing kids." },
    { title: "Fluoride Care", desc: "Enamel-strengthening treatments to keep primary and permanent teeth resilient." },
    { title: "Children's Cleanings", desc: "Soft, gentle plaque removal delivered with comforting explanations at every step." },
    { title: "Dental Education", desc: "Fun, empowering brushing & flossing coaching for both kids and parents." }
  ],

  testimonials: [
    {
      quote: "My 5-year-old was terrified of dental checkups until we visited All Smiles in Silver Mall. The patience, warmth, and gentle communication turned it into a completely happy experience. Truly exceptional pediatric care in New Cairo!",
      patient: "Parent Review",
      tag: "Mother of 2 • First Settlement",
      rating: 5,
      date: "Verified Google Review"
    },
    {
      quote: "Outstanding clinic atmosphere. Spotlessly clean, serene, and modern. Both my son and I received attentive, unhurried care during the same visit. Highly recommended for families across New Cairo.",
      patient: "Family Patient",
      tag: "Family Visit • New Cairo",
      rating: 5,
      date: "Verified Google Review"
    },
    {
      quote: "A modern clinic that respects your time and your comfort. Scheduling through WhatsApp was smooth and swift. You feel in trustworthy, skilled hands from the moment you step in.",
      patient: "Adult Patient",
      tag: "Preventive Care",
      rating: 5,
      date: "Verified Google Review"
    },
    {
      quote: "From the gentle chairside explanations to the calming environment, All Smiles sets a remarkable standard for dentistry in First Settlement. My daughter now actually looks forward to her check-ups!",
      patient: "Parent Review",
      tag: "Pediatric Patient Parent",
      rating: 5,
      date: "Verified Google Review"
    }
  ],

  instagramFeed: [
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      caption: "Gentle first check-ups: building confidence one happy smile at a time. ✨ #AllSmiles #PediatricDentistry"
    },
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      caption: "A calm, warm space designed to make every dental visit feel like wellness care. 🌿 #NewCairoDentist"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      caption: "Family dentistry made simple: schedule appointments for parents & kids in one visit! 🤍"
    },
    {
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      caption: "Healthy smiles start with preventive habits and regular gentle care. 🦷 #HealthySmiles"
    },
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      caption: "Precision modern equipment in our First Settlement clinic at Silver Mall. 📍"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=600&q=80",
      caption: "Because great dentistry begins with making every patient feel comfortable & understood. 🌟"
    }
  ]
};

if (typeof window !== "undefined") {
  window.BUSINESS_DATA = BUSINESS_DATA;
}
