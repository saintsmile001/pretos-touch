import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/services/product-service';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  const collection = searchParams.get('collection') || undefined;
  const search = searchParams.get('search') || undefined;
  const sort = (searchParams.get('sort') as any) || undefined;

  const items = await getProducts({
    categorySlug: category,
    collectionSlug: collection,
    search,
    sort,
  });

  return NextResponse.json({
    items,
    page: 1,
    limit: items.length,
    total: items.length,
    totalPages: 1,
  });
}
