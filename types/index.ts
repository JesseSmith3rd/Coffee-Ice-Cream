export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'espresso' | 'ice-cream' | 'bakery' | 'seasonal' | 'specialty';
  description: string;
  price: string;
  dietary?: string[];
  featured?: boolean;
  flavorNotes?: string[];
  image?: string;
  originOrRoast?: string;
}

export interface StoreHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface AtmosphereFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  neighborhood: string;
  rating: number;
}
