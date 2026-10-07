import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customer, deliveryFee, totalAmount, paymentMethod } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const orderId = `PT-${Math.floor(100000 + Math.random() * 900000)}`;

    // In a production backend, this would initialize Paystack/Flutterwave or write order to database
    return NextResponse.json({
      success: true,
      orderId,
      status: 'pending',
      amount: totalAmount,
      currency: 'NGN',
      paymentMethod,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to initialize checkout.' }, { status: 500 });
  }
}
