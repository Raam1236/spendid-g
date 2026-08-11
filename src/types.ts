export type PropertyType = 'Residential' | 'Commercial' | 'Mixed Use';
export type ProjectStatus = 'Ongoing' | 'Completed' | 'Upcoming';

export interface FloorPlan {
  id: string;
  title: string;
  type: string; // e.g. "2 BHK Premium", "3 BHK Sky Suite"
  sqft: number;
  priceEstimate?: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  image: string;
  features: string[];
}

export interface Amenity {
  name: string;
  category: 'Fitness' | 'Wellness' | 'Landscape' | 'Community' | 'Security' | 'Eco';
  iconName: string;
  description?: string;
}

export interface LocationHighlight {
  category: 'Tech Parks & Hubs' | 'Schools & Universities' | 'Hospitals' | 'Transit & Metro' | 'Retail & Leisure';
  placeName: string;
  distance: string; // e.g. "10 Mins / 3.2 Km"
}

export interface ProjectSpec {
  category: string;
  detail: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  sublocation: string;
  configuration: string; // e.g. "2 & 3 BHK Residences"
  propertyType: PropertyType;
  status: ProjectStatus;
  reraNumber?: string;
  priceRange: string;
  startingPriceNum?: number;
  totalUnits?: number;
  possessionDate?: string;
  shortDescription: string;
  longDescription: string;
  story: string;
  heroImage: string;
  gallery: string[];
  amenities: Amenity[];
  floorPlans: FloorPlan[];
  specs: ProjectSpec[];
  locationHighlights: LocationHighlight[];
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  project: string;
  location: string;
  role: string;
  avatar?: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  projectInterest: string;
  configurationPreference?: string;
  budgetRange?: string;
  message?: string;
}

export interface SiteVisitFormData {
  fullName: string;
  phone: string;
  email: string;
  project: string;
  preferredDate: string;
  preferredTime: string;
  pickupRequired?: boolean;
  message?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}
