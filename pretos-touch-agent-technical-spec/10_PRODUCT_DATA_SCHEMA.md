# Pretos Touch — Product Data Schema

## Goal

Create a flexible product model that supports the current catalog and future expansion.

## TypeScript domain model

```ts
type Money = {
  amount: number;
  currency: string; // e.g. NGN
};

type ProductImage = {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  sortOrder: number;
};

type ProductVariantOption = {
  name: string;
  value: string;
};

type ProductVariant = {
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

type ProductFAQ = {
  question: string;
  answer: string;
};

type Product = {
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
```

## Category model

```ts
type Category = {
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
```

## Collection model

```ts
type Collection = {
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
```

## Review model

```ts
type Review = {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  title?: string;
  body: string;
  images?: string[];
  verifiedPurchase: boolean;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};
```

## Article model

```ts
type Article = {
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
```

## Product content rules

Do not store important product content as one giant HTML blob when structured fields are useful.

Use structured fields for:
- Features
- Specifications
- FAQs
- How to use
- Care
- Shipping
- Returns

This allows future search/filter/UI changes.

## Product image rules

Each image must have:
- Stable ID
- URL
- Alt text
- Ordering

Never use the filename as the only source of alt text.

## Pricing rules

Never treat formatted currency strings as the source of truth.

Store:
- Numeric amount
- Currency code

Format for display at the UI layer.

## Inventory

Support:
- available
- quantity where provided
- out-of-stock

Do not expose internal inventory thresholds unless deliberately configured.

## SEO fields

Every indexable product should have custom SEO metadata.

Fallbacks may be generated, but custom fields should take precedence.

## Example display product

The seed data below is illustrative and must not be presented as verified product specifications.
