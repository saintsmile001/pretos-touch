import { NextRequest, NextResponse } from 'next/server';
import { initialReviews } from '@/data/seed-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  let reviews = initialReviews.filter((r) => r.status === 'approved');
  if (productId) {
    reviews = reviews.filter((r) => r.productId === productId);
  }

  return NextResponse.json({ reviews });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, customerName, rating, body: reviewText, title } = body;

    if (!productId || !customerName || !rating || !reviewText) {
      return NextResponse.json(
        { error: 'Missing required review fields.' },
        { status: 400 }
      );
    }

    // In a real DB backend, this would write to Postgres/DB with status 'pending'
    const newReview = {
      id: `rev-${Date.now()}`,
      productId,
      customerName,
      rating: Number(rating),
      title: title || undefined,
      body: reviewText,
      verifiedPurchase: false,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { message: 'Review submitted for moderation.', review: newReview },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process review submission.' },
      { status: 500 }
    );
  }
}
