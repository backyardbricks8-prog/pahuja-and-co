export interface FirmDetails {
  name: string;
  hindiName: string;
  tagline: string;
  establishedNote: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: {
    office: string;
    officeDisplay: string;
    mobile: string;
    mobileDisplay: string;
  };
  email: string;
  website: string;
  googleRating: {
    score: number;
    maxScore: number;
    reviewsCount: number;
    isVerified: boolean;
  };
  verifiedReview: {
    quote: string;
    author: string;
    rating: number;
    source: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  mapUrl: string;
  whatsappUrl: string;
}

export const FIRM_DETAILS: FirmDetails = {
  name: "Pahuja & Co.",
  hindiName: "पाहुजा & को. चार्टर्ड अकाउंटेंट्स",
  tagline: "Clarity in Compliance. Confidence in Every Decision.",
  establishedNote: "Independent professional practice based in Janakpuri, New Delhi.",
  address: {
    line1: "C-2/271, Ground Floor",
    locality: "Janakpuri",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110058",
    full: "C-2/271, Ground Floor, Janakpuri, New Delhi, Delhi – 110058"
  },
  phones: {
    office: "+911145626500",
    officeDisplay: "+91 11 4562 6500",
    mobile: "+919871012900",
    mobileDisplay: "+91 98710 12900"
  },
  email: "puneet@pahujaandco.com",
  website: "https://www.pahujaandco.com/",
  googleRating: {
    score: 4.0,
    maxScore: 5.0,
    reviewsCount: 6,
    isVerified: true
  },
  verifiedReview: {
    quote: "Very Reliable and Efficient CA services, 5 Stars all the way",
    author: "Aditya Mohan",
    rating: 5,
    source: "Google Review"
  },
  hours: {
    weekdays: "Monday – Friday: 10:00 AM – 6:30 PM",
    saturday: "Saturday: 10:00 AM – 4:00 PM",
    sunday: "Sunday: Closed"
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=C-2%2F271%2C+Ground+Floor%2C+Janakpuri%2C+New+Delhi%2C+Delhi+110058",
  whatsappUrl: "https://wa.me/919871012900?text=Hello%20Pahuja%20%26%20Co.%2C%20I%20would%20like%20to%20enquire%20about%20your%20chartered%20accountancy%20services."
};
