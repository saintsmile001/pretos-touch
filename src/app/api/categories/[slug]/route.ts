import { NextRequest, NextResponse } from 'next/server';
import { getCategoryBySlug } from '@/lib/services/category-service';
import { getProducts } from '@/lib/services/product-service';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) {
    return NextResponse.json(
      { error: { code: 'CATEGORY_NOT_FOUND', message: 'Category not found.' } },
      { status: 404 }
    );
  }

  const products = await getProducts({ categorySlug: params.slug });

  return NextResponse.json({
    category,
    products,
  });
}
