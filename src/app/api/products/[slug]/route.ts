import { NextRequest, NextResponse } from 'next/server';
import { getProductBySlug, getRelatedProducts } from '@/lib/services/product-service';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return NextResponse.json(
      { error: { code: 'PRODUCT_NOT_FOUND', message: 'Product not found.' } },
      { status: 404 }
    );
  }

  const related = await getRelatedProducts(product.id, 4);

  return NextResponse.json({
    product,
    related,
  });
}
