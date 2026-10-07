// Pretos Touch Domain Type Definitions
// Based on 10_PRODUCT_DATA_SCHEMA.md & 11_DATABASE_SCHEMA.md

export type Money = {
  amount: number; // in primary units e.g. NGN 25,000 or 0
  currency: string; // e.g. 'NGN'
};

export type ProductImage = {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  sortOrder: number;
};

export type ProductVariantOption = {
  name: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  sku: string;
  title: string;
  options: ProductVariantOption[];
  price: Money;
  compareAtPrice?: Money;
  inventoryQuantity?: number;
  available: boolean;
  imageId?: string;
};

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  collectionIds: string[];
  brand?: string;
  images: ProductImage[];
  price: Money;
  compareAtPrice?: Money;
  sku?: string;
  variants: ProductVariant[];
  features: string[];
  specifications: Record<string, string>;
  howToUse?: string;
  careInstructions?: string;
  shippingInfo?: string;
  returnInfo?: string;
  faqs: ProductFAQ[];
  ratingAverage?: number;
  reviewCount: number;
  available: boolean;
  seo: {
    title: string;
    description: string;
    canonical?: string;
    noindex?: boolean;
  };
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  parentId?: string;
  seo: {
    title: string;
    description: string;
  };
  sortOrder: number;
};

export type Collection = {
  id: string;
  slug: string;
  name: string;
  description: string;
  productIds: string[];
  image?: string;
  seo: {
    title: string;
    description: string;
  };
};

export type Review = {
  id: string;
  productId: string;
  customerName: string;
  rating: number; // 1 to 5
  title?: string;
  body: string;
  images?: string[];
  verifiedPurchase: boolean;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: ProductImage;
  category: string;
  authorName?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes?: number;
  seo: {
    title: string;
    description: string;
    canonical?: string;
  };
};

export type CartItem = {
  id: string; // unique item line id (productId + variantId)
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  unitPrice: Money;
};

export type Cart = {
  items: CartItem[];
  subtotal: Money;
  currency: string;
};

export type SiteSettings = {
  brandName: string;
  siteUrl: string;
  currency: string;
  supportEmail: string;
  supportPhone: string;
  whatsappNumber: string;
  businessAddress: string;
  socialLinks: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  deliveryPolicy: string;
  returnPolicy: string;
};
