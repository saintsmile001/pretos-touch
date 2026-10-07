import { Category, Collection } from '@/types';
import { initialCategories, initialCollections } from '@/data/seed-data';

export async function getCategories(): Promise<Category[]> {
  return [...initialCategories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const category = initialCategories.find((c) => c.slug === slug);
  return category || null;
}

export async function getCollections(): Promise<Collection[]> {
  return [...initialCollections];
}

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  const collection = initialCollections.find((c) => c.slug === slug);
  return collection || null;
}
