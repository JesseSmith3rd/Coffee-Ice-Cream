import { StoreHours, AtmosphereFeature, Testimonial } from '@/types';

export const STORE_INFO = {
  name: "Henderson's Coffee & Ice Cream",
  tagline: "Historic Charm. Handcrafted Roast. Small-Batch Ice Cream.",
  shortDescription: "A warm, historic neighborhood gathering place nestled amidst exposed brick and amber lighting, serving freshly roasted specialty coffee, artisan small-batch ice cream, and homemade baked goods.",
  establishedYear: "2018",
  phone: "(555) 234-8900",
  email: "hello@hendersonscoffee.com",
  address: {
    street: "142 Historic Main Street",
    city: "Mableton",
    state: "GA",
    zip: "30133",
    fullAddress: "142 Historic Main Street, Mableton, GA 30133",
    mapQuery: "142+Historic+Main+St+Mableton+GA+30133",
  },
  socials: {
    instagram: "https://instagram.com/hendersonscoffee",
    facebook: "https://facebook.com/hendersonscoffee",
  },
  announcement: "☕ Seasonal Autumn Spiced Latte & Fresh Blackberry Cobbler Ice Cream now serving!",
};

export const STORE_HOURS: StoreHours[] = [
  { day: "Monday", open: "6:30 AM", close: "9:00 PM" },
  { day: "Tuesday", open: "6:30 AM", close: "9:00 PM" },
  { day: "Wednesday", open: "6:30 AM", close: "9:00 PM" },
  { day: "Thursday", open: "6:30 AM", close: "9:30 PM" },
  { day: "Friday", open: "6:30 AM", close: "10:30 PM" },
  { day: "Saturday", open: "7:00 AM", close: "10:30 PM" },
  { day: "Sunday", open: "7:30 AM", close: "8:30 PM" },
];

export const ATMOSPHERE_HIGHLIGHTS: AtmosphereFeature[] = [
  {
    id: "exposed-brick",
    title: "100-Year-Old Exposed Brick",
    subtitle: "Historic Architecture",
    description: "Original masonry preserved with love, creating an inviting acoustic haven with authentic historic texture.",
    iconName: "Building2",
  },
  {
    id: "amber-glow",
    title: "Warm Amber Lighting",
    subtitle: "Cozy Evening Ambiance",
    description: "Soft vintage filament fixtures cast a golden, comforting glow ideal for morning reading or late-night conversations.",
    iconName: "Lamp",
  },
  {
    id: "solid-wood",
    title: "Handcrafted Timber & Leather",
    subtitle: "Comfortable Seating",
    description: "Reclaimed walnut tables, deep dark brown leather booths, and antique brass details built for slow living.",
    iconName: "Armchair",
  },
  {
    id: "community-hub",
    title: "Neighborhood Gathering Place",
    subtitle: "Community First",
    description: "Where regulars know each other by name, families celebrate milestones, and local artists share their craft.",
    iconName: "HeartHandshake",
  },
];

export const REVIEWS: Testimonial[] = [
  {
    id: "1",
    quote: "Stepping into Henderson’s feels like coming home. The aroma of freshly pulled espresso against the exposed brick wall, paired with a scoop of their brown butter pecan ice cream, is unbeatable.",
    author: "Eleanor Vance",
    neighborhood: "Downtown Regular",
    rating: 5,
  },
  {
    id: "2",
    quote: "The warm amber atmosphere in the evenings is pure magic. We bring our family every Friday night after dinner for waffle cones and cappuccinos.",
    author: "Marcus & Sarah Jenkins",
    neighborhood: "Oakridge District",
    rating: 5,
  },
  {
    id: "3",
    quote: "True hospitality, incredible single-origin pour overs, and the best affogato in the entire state. A genuine local treasure.",
    author: "David Ross",
    neighborhood: "Historic District",
    rating: 5,
  },
];
