export type HairType = 'all' | 'wavy-2' | 'curly-3' | 'coily-4' | 'protective-styles';

export type ScalpConcern = 'dryness' | 'itching' | 'flaking' | 'irritation' | 'build-up';

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  hairType?: string;
  recommended?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  size: string;
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  isBundle?: boolean;
  badge?: string;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  primaryImage: string;
  images: string[];
  category: 'system' | 'cleanse' | 'condition' | 'hydrate' | 'accessory';
  stepNumber?: number;
  stepName?: string;
  highlights: string[];
  keyIngredients: {
    name: string;
    purpose: string;
    description: string;
  }[];
  allIngredients: string;
  howToUse: string[];
  dermatologistTip: string;
  clinicalResults?: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
  subscriptionFrequency?: '4-weeks' | '8-weeks' | '12-weeks';
}

export type ActivePage = 
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'story'
  | 'science'
  | 'press'
  | 'reviews'
  | 'faq'
  | 'checkout';

export interface QuizState {
  scalpConcern: string;
  hairTexture: string;
  washFrequency: string;
  primaryGoal: string;
}
