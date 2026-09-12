# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and medium business owners and operators evaluating a software, automation, or IT-support partner. Views the site to understand the service catalog, gauge credibility, and open contact (form, email, or WhatsApp).

## Product Purpose

Sunday Software Solutions builds and supports software for growing companies: custom development, SaaS, bots, AI-driven automation, and Microsoft cloud/identity solutions. Success means a qualified SMB owner reaches out with a concrete project or support need and moves into a conversation.

## Positioning

- **Microsoft specialist:** depth in Microsoft Copilot Studio and Microsoft Entra ID/App Proxy that generalist dev shops don't carry.
- **AI automation focus:** AI agents, copilots, and bots are flagship work, not an add-on bullet.
- **Border/Nearshore value:** a bilingual EN/ES team positioned between Mexican nearshore economics and US-standard quality.

## Operating Context

- Visitors land on Home (hero + service cards + CTA), browse Services (six groups), read About, and contact via a structured form or direct channels (email, WhatsApp).
- The Contact form captures name, company, requirement type, contact type (phone/email), project description, and business sector; it posts to `/api/send_email`, which forwards to the Gmail SMTP account.
- Direct channels: Sunday.Software.Solutions@gmail.com and WhatsApp +52 686 525 4888 (Mexican number).
- Bilingual EN/ES; locales are `/en/*` and `/es/*` with a cookie-backed switcher.

## Capabilities and Constraints

Confirmed service catalog:
- Software development: custom software, mobile apps, web apps, enterprise solutions.
- Technical support: IT support, help desk, maintenance and system updates.
- SaaS: custom SaaS development, cloud solutions, scalable applications.
- Bots: WhatsApp bots, customer-support chatbots, appointment scheduling, automated responses.
- AI-driven automation: workflow automation, custom AI agents, Copilot Studio copilots, document processing.
- Microsoft cloud & identity: Entra ID, Entra Application Proxy, SSO/MFA integration, Power Platform automation.

Technical constraints: Next.js 15 App Router, React 19, TypeScript strict, Tailwind v4 (CSS-config theme), next-intl i18n, Framer Motion; email via Nodemailer + Gmail requiring `SMTP_USER`/`SMTP_PASS`; deploys to Vercel.

Undecided product facts (do not invent): real team members (the placeholder team was removed and substituted by a capabilities section), real client cases or testimonials, precise office address.

## Brand Commitments

- Name: Sunday Software Solutions.
- Voice: professional, solution-oriented, business-friendly (established by current copy).
- Public contact identity: Sunday.Software.Solutions@gmail.com, WhatsApp +52 686 525 4888.

## Evidence on Hand

- Full bilingual service copy in `messages/en.json` and `messages/es.json`.
- Contact form and API route at `src/app/api/send_email/route.ts` (validated payload, escaped HTML, Gmail transport).
- Mexicali, B.C. map embed in the About page; Mexican WhatsApp line.
- The About section previously showed placeholder team members (John Doe, Jane Smith, Alex Johnson); they were removed in favor of an honest capabilities section (confirmed decision). No team/avatar imagery remains.

## Product Principles

1. **SMB-first clarity:** every offering is explained so a non-technical business owner understands what it does for their operation.
2. **Microsoft depth:** Copilot Studio and Entra work is genuine specialization, not a checklist item.
3. **Honesty over polish:** never fabricate testimonials, team members, or client cases.
4. **Bilingual by default:** everything ships EN/ES with identical structure and meaning.
5. **One partner, build and beyond:** development is paired with ongoing support and maintenance.