import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  company: string;
  requirementType: string;
  contactType: 'Phone' | 'Email';
  phone: string;
  email: string;
  projectDescription: string;
  businessSector: string;
  website: string;
};

const REQUIREMENT_TYPES = new Set([
  'development',
  'support',
  'saas',
  'bot',
  'ai',
  'microsoft',
  'other',
]);

const CONTACT_TYPES = new Set(['Phone', 'Email']);

const LIMITS: Record<keyof ContactPayload, number> = {
  name: 120,
  company: 120,
  requirementType: 40,
  contactType: 10,
  phone: 20,
  email: 254,
  projectDescription: 3000,
  businessSector: 120,
  website: 80,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9()+\-\s]{7,20}$/;

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
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ message: 'Empty request body' }, { status: 400 });
  }

  const forwarded = request.headers.get('x-forwarded-for');
  const clientIp = forwarded?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
  }

  const website = body.website?.trim() ?? '';
  if (website) {
    return NextResponse.json({ message: 'Email sent successfully' });
  }

  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ message: 'SMTP not configured' }, { status: 500 });
    }

    const name = body.name?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const requirementType = body.requirementType?.trim() ?? '';
    const contactType = body.contactType;
    const phone = body.phone?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const projectDescription = body.projectDescription?.trim() ?? '';
    const businessSector = body.businessSector?.trim() ?? '';

    if (
      !name ||
      !company ||
      !requirementType ||
      !contactType ||
      !projectDescription ||
      !businessSector
    ) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    if (!REQUIREMENT_TYPES.has(requirementType)) {
      return NextResponse.json({ message: 'Invalid requirement type' }, { status: 400 });
    }
    if (!CONTACT_TYPES.has(contactType)) {
      return NextResponse.json({ message: 'Invalid contact type' }, { status: 400 });
    }
    if (contactType === 'Phone' && !phone) {
      return NextResponse.json({ message: 'Phone is required' }, { status: 400 });
    }
    if (contactType === 'Phone' && !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ message: 'Invalid phone number' }, { status: 400 });
    }
    if (contactType === 'Email' && !email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }
    if (contactType === 'Email' && !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const overLimit = (Object.keys(LIMITS) as (keyof ContactPayload)[]).find((field) => {
      const value = { name, company, requirementType, contactType, phone, email, projectDescription, businessSector, website }[field] ?? '';
      return value.length > LIMITS[field];
    });
    if (overLimit) {
      return NextResponse.json({ message: `${overLimit} exceeds maximum length` }, { status: 400 });
    }

    const contactInfo = contactType === 'Phone' ? phone : email;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Sunday Software Solutions" <${smtpUser}>`,
      to: smtpUser,
      replyTo: contactType === 'Email' ? email : undefined,
      subject: `New contact request from ${name}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Business sector: ${businessSector}`,
        `Requirement type: ${requirementType}`,
        `Contact type: ${contactType}`,
        `Contact detail: ${contactInfo}`,
        `Project description: ${projectDescription}`,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Business sector:</strong> ${escapeHtml(businessSector)}</p>
        <p><strong>Requirement type:</strong> ${escapeHtml(requirementType)}</p>
        <p><strong>Contact type:</strong> ${escapeHtml(contactType)}</p>
        <p><strong>Contact detail:</strong> ${escapeHtml(contactInfo)}</p>
        <p><strong>Project description:</strong> ${escapeHtml(projectDescription)}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch {
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}