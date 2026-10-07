import { NextRequest, NextResponse } from 'next/server';
import { getArticles, getArticleBySlug } from '@/lib/services/article-service';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const category = searchParams.get('category') || undefined;

  if (slug) {
    const article = await getArticleBySlug(slug);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json({ article });
  }

  const articles = await getArticles(category);
  return NextResponse.json({ articles });
}
