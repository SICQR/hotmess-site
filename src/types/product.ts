// Product types as specified in the business requirements
export type Badge = 'RAW'|'HUNG'|'HIGH'|'SUPERHUNG'|'SUPERHIGH'|'HNH_MESS';

export interface ProductCard {
  id: string; 
  title: string; 
  priceGBP: number; 
  compareAtGBP?: number;
  image: string; 
  badge: Badge; 
  href: string; 
  inStock?: boolean;
}