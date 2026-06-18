export interface Villa {
  id: string;
  name: string;
  description: string;
  size: string;
  capacity: string;
  image: string;
  highlights: string[];
  features: string[];
  startingPrice: string;
}

export interface DiningOutlet {
  id: string;
  name: string;
  tagline: string;
  concept: string;
  description: string;
  signatureDish: string;
  hours: string;
  image: string;
  menu: {
    category: string;
    items: {
      name: string;
      description: string;
      price?: string;
    }[];
  }[];
}

export interface Experience {
  id: string;
  name: string;
  category: 'water' | 'land' | 'romantic' | 'all';
  description: string;
  duration: string;
  bestTime: string;
  image: string;
}

export interface Offer {
  id: string;
  title: string;
  tagline: string;
  code: string;
  description: string;
  inclusions: string[];
  validUntil: string;
  image: string;
}

export interface EnquiryFormInput {
  name: string;
  email: string;
  phone?: string;
  type: 'general' | 'villa' | 'wedding' | 'dining' | 'buyout' | 'offer' | 'spa';
  selectedOptionId?: string;
  arrivalDate?: string;
  departureDate?: string;
  guestsCount?: string;
  message: string;
}
