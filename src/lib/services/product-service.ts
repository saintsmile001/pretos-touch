import { Product } from '@/types';
import { initialProducts } from '@/data/seed-data';

export async function getProducts(options?: {
  categoryId?: string;
  categorySlug?: string;
  collectionSlug?: string;
  search?: string;
  sort?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  availableOnly?: boolean;
}): Promise<Product[]> {
  let products = [...initialProducts];

  if (options?.availableOnly) {
    products = products.filter((p) => p.available);
  }

  if (options?.categoryId) {
    products = products.filter((p) => p.categoryId === options.categoryId);
  }

  if (options?.categorySlug) {
    products = products.filter((p) => p.categoryId.replace('cat-', '') === options.categorySlug || p.categoryId === options.categorySlug);
  }

  if (options?.collectionSlug) {
    const colId = `col-${options.collectionSlug}`;
    products = products.filter((p) => p.collectionIds.includes(colId) || p.collectionIds.includes(options.collectionSlug!));
  }

  if (options?.search) {
    const query = options.search.toLowerCase().trim();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.features.some((f) => f.toLowerCase().includes(query))
    );
  }

  if (options?.sort) {
    switch (options.sort) {
      case 'price-asc':
        products.sort((a, b) => a.price.amount - b.price.amount);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price.amount - a.price.amount);
        break;
      case 'rating':
        products.sort((a, b) => (b.ratingAverage || 0) - (a.ratingAverage || 0));
        break;
      case 'newest':
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }
  }

  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = initialProducts.find((p) => p.slug === slug);
  return product || null;
}

export async function getRelatedProducts(productId: string, limit = 4): Promise<Product[]> {
  const current = initialProducts.find((p) => p.id === productId);
  if (!current) return initialProducts.slice(0, limit);

  return initialProducts
    .filter((p) => p.id !== productId && (p.categoryId === current.categoryId || p.collectionIds.some((c) => current.collectionIds.includes(c))))
    .slice(0, limit);
}
