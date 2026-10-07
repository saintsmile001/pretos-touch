import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/services/product-service';
import { getCategories } from '@/lib/services/category-service';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (!q.trim()) {
    return NextResponse.json({ products: [], categories: [] });
  }

  const [products, allCategories] = await Promise.all([
    getProducts({ search: q }),
    getCategories(),
  ]);

  const query = q.toLowerCase();
  const matchedCategories = allCategories.filter((c) =>
    c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)
  );

  return NextResponse.json({
    query: q,
    products,
    categories: matchedCategories,
    total: products.length,
  });
}
