import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to Pretos Touch updates.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process subscription.' }, { status: 500 });
  }
}
