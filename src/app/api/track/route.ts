
import { serverEvent } from '@/lib/fpixel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName } = body;

    if (!eventName) {
      return NextResponse.json({ message: 'Event name is required' }, { status: 400 });
    }

    const ip = req.ip ?? req.headers.get('x-forwarded-for');
    const userAgent = req.headers.get('user-agent');
    
    const userData = {
        client_ip_address: ip,
        client_user_agent: userAgent,
    }

    const result = await serverEvent(eventName, userData);

    if (result.success) {
      return NextResponse.json({ message: 'Event tracked successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to track event', error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('API track error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
