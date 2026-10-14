export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'heart-handshake' | 'shield-alert' | 'umbrella' | 'stethoscope' | 'plane' | 'trending-up';
  keyBenefits: string[];
  idealFor: string[];
  typicalCoverage: string;
  faqHighlight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrLocation: string;
  avatarUrl: string;
  quote: string;
  coveragePurchased: string;
  rating: number;
}

export interface StatItem {
  number: string;
  label: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'life' | 'critical' | 'disability' | 'health' | 'travel';
  question: string;
  answer: string;
}

export interface CarrierItem {
  name: string;
  category: string;
  rating: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  insuranceType: string;
  postalCode: string;
  age?: string;
  coverageAmount?: string;
  smokingStatus?: 'non-smoker' | 'smoker';
  notes?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  meetingFormat: 'zoom' | 'phone' | 'in-person';
  primaryGoal: string;
  additionalDetails?: string;
}

export interface AdvisorApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  cityProvince: string;
  licensingStatus: 'Not Licensed (Want to Learn)' | 'Currently Studying LLQP' | 'Already LLQP Licensed' | 'Transferring from Another Agency';
  employmentGoal: 'Full-Time Independent Advisor' | 'Part-Time Transition' | 'Exploring Financial Career Options';
  currentOccupation?: string;
  experienceNotes?: string;
}
