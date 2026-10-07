import { NextRequest, NextResponse } from 'next/server';
import { getProductBySlug } from '@/lib/services/product-service';
import { generateWhatsAppOrderLink } from '@/lib/whatsapp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, variantId, quantity = 1 } = body;

    if (!slug) {
      return NextResponse.json({ error: 'Product slug is required.' }, { status: 400 });
    }

    const product = await getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: 'Product not found.' }, { status: 404 });
    }

    const variant = variantId
      ? product.variants.find((v) => v.id === variantId)
      : undefined;

    const whatsappResult = generateWhatsAppOrderLink({
      product,
      variant,
      quantity,
    });

    return NextResponse.json(whatsappResult);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate WhatsApp order link.' },
      { status: 500 }
    );
  }
}
