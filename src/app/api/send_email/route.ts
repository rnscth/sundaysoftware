import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  interest: string;
  message: string;
  website: string;
};

const INTERESTS = new Set(['bi', 'automation', 'support', 'other']);

const LIMITS: Record<keyof ContactPayload, number> = {
  name: 120,
  email: 254,
  interest: 40,
  message: 3000,
  website: 80,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_PER_WINDOW = 5;
const rateLimit = new Map<string, {count: number; resetAt: number}>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateLimit.size > 1000) {
    for (const [key, entry] of rateLimit) {
      if (entry.resetAt < now) rateLimit.delete(key);
    }
  }
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, {count: 1, resetAt: now + RATE_WINDOW_MS});
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX_PER_WINDOW;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({message: 'Invalid request body'}, {status: 400});
  }

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({message: 'Empty request body'}, {status: 400});
  }

  const forwarded = request.headers.get('x-forwarded-for');
  const clientIp = forwarded?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(clientIp)) {
    return NextResponse.json({message: 'Too many requests'}, {status: 429});
  }

  const website = body.website?.trim() ?? '';
  if (website) {
    return NextResponse.json({message: 'Email sent successfully'});
  }

  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({message: 'SMTP not configured'}, {status: 500});
    }

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const interest = body.interest?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !interest || !message) {
      return NextResponse.json({message: 'Missing required fields'}, {status: 400});
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({message: 'Invalid email address'}, {status: 400});
    }
    if (!INTERESTS.has(interest)) {
      return NextResponse.json({message: 'Invalid interest'}, {status: 400});
    }

    const overLimit = (Object.keys(LIMITS) as (keyof ContactPayload)[]).find((field) => {
      const value = {
        name,
        email,
        interest,
        message,
        website,
      }[field] ?? '';
      return value.length > LIMITS[field];
    });
    if (overLimit) {
      return NextResponse.json({message: `${overLimit} exceeds maximum length`}, {status: 400});
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {user: smtpUser, pass: smtpPass},
    });

    await transporter.sendMail({
      from: `"Sunday Software Solutions" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Interest: ${interest}`, `Message: ${message}`].join(
        '\n'
      ),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({message: 'Email sent successfully'});
  } catch {
    return NextResponse.json({message: 'Failed to send email'}, {status: 500});
  }
}