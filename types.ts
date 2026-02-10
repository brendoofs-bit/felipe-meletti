export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  imageBefore: string;
  imageAfter: string;
  procedure: string;
  timeframe: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  installments: string;
  features: string[];
  highlight?: boolean;
}