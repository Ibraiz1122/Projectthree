export type NavPage = 'home' | 'about' | 'programs' | 'booking' | 'testimonials' | 'products' | 'contact';

export interface CoachingProgram {
  id: string;
  title: string;
  category: 'junior' | 'women' | 'private' | 'op36' | 'tech';
  subtitle: string;
  duration: string;
  price: number;
  priceDetails?: string;
  popular?: boolean;
  idealFor: string;
  description: string;
  features: string[];
  technologyUsed: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: 'junior' | 'women' | 'adult' | 'competitive';
  location: string;
  handicapChange?: string;
  quote: string;
  rating: number;
  highlight: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'packages' | 'tech' | 'gear' | 'gift';
  price: number;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingFormData {
  programId: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'junior' | 'competitive';
  handicap?: string;
  primaryGoal: string;
  notes?: string;
  paymentMethod: 'card' | 'interac' | 'at_session';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  skillLevel: string;
  message: string;
}
