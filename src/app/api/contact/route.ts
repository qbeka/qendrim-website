import { NextResponse } from 'next/server';
import { SITE } from '@/lib/siteData';

type Payload = {
  email?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Bucket = { count: number; resetAt: number };
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 min
const RATE_MAX = 10;
const buckets = new Map<string, Bucket>();

function getClientIp(req: Request) {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]?.trim() || 'unknown';
  return req.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  buckets.set(ip, bucket);
  return bucket.count > RATE_MAX;
}

export async function POST(req: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json(
      { ok: false, error: 'Server is not configured.' },
      { status: 500 },
    );
  }

  const origin = req.headers.get('origin');
  const allowedOrigins = new Set([SITE.url, 'https://qendrimbeka.com', 'http://localhost:3000']);
  const isVercelPreview = origin ? /^https:\/\/.+\.vercel\.app$/.test(origin) : false;
  if (origin && !allowedOrigins.has(origin) && !isVercelPreview) {
    return NextResponse.json({ ok: false, error: 'Forbidden.' }, { status: 403 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests.' }, { status: 429 });
  }

  let payload: Payload = {};
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  // Honeypot: pretend success for bots.
  if ((payload.website || '').trim().length > 0) {
    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store' },
      },
    );
  }

  const email = (payload.email || '').trim();
  const message = (payload.message || '').trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid email.' }, { status: 400 });
  }

  if (email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Email is too long.' }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
  }

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      fields: { message: message || 'No message provided' },
      groups: [groupId],
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { ok: false, error: 'Failed to send. Please try again.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    },
  );
}

