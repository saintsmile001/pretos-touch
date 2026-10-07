import { Article } from '@/types';
import { initialArticles } from '@/data/seed-data';

export async function getArticles(category?: string): Promise<Article[]> {
  if (category) {
    return initialArticles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  }
  return [...initialArticles];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = initialArticles.find((a) => a.slug === slug);
  return article || null;
}
