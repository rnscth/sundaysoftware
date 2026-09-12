# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

CFOs, operations leads and IT owners of mid-size companies evaluating a partner to connect their data, processes and applications. Visits the landing to understand what problems Sunday solves, which lines of work can be contracted, how a project would be approached, why the method is reliable, and how to start a conversation (form, email, or WhatsApp).

## Product Purpose

Sunday Software Solutions is a software and AI practice that connects the systems a company already runs — data, processes, applications — so its operation sustains itself. Success means a qualified visitor moves from "this sounds like my situation" to a first conversation about one concrete need.

## Positioning

- **Connectivity over building:** not a generic dev shop. Work is framed around connecting existing systems (ERP, databases, documents, internal apps) and making them understandable and maintainable.
- **Honesty as a feature:** no fabricated clients, testimonials, metrics, SLAs or partners. Every example is labeled illustrative; commitments are scoped per case.
- **Three defined lines:** (1) Business Intelligence Agents — plain-language answers from authorized data sources; (2) AI-Driven Automation — workflows across applications, documents and approvals; (3) Application Support & Legacy Modernization — diagnosis, documentation, maintenance and evolution of internal applications.
- **Method-first:** evaluate → document & connect → implement & validate → maintain & evolve, with environment guidelines, diagnostic/build/test/reconciliation tooling and human review as the reliability argument.

## Operating Context

- Single-page bilingual landing at `/en` and `/es`, bilingual cookie-backed switcher. One route, anchor navigation to `#services`, `#method`, `#company`, `#contact`.
- Sections: hero, familiar problems, three service lines (asymmetric, not a card grid), illustrative use-case scenarios, method (4 steps), relationship model (initial implementation / recurring service / improvements), a short honest "Sunday" section, contact.
- Contact form is minimal (name, email, interest, message) and posts to `/api/send_email`, which validates payload (rate limit, honeypot, escaped HTML) and forwards to the Gmail SMTP account. Direct channels: Sunday.Software.Solutions@gmail.com and WhatsApp +52 686 525 4888.
- Visual world: midnight `#101C2C`, sunrise amber `#FFB547`, ivory `#F5F0E6`; the Sunrise S mark (user-designed, `src/app/icon.svg`) is the brand identity in header, footer and favicon — never redrawn.

## Capabilities and Constraints

Confirmed lines of work (each with honest scope notes):
- Business Intelligence Agents — answers on top of authorized sources under agreed permissions and definitions; results depend on data quality and agreed definitions; not a substitute for financial advice.
- AI-Driven Automation — workflows across apps, documents, APIs, databases, approvals; custom development and Microsoft integrations are part of this capability; workflows scoped and validated before production.
- Application Support & Legacy Modernization — begins with an assessment of access, code and testability; vision includes AI-assisted support with a recurring service. No 24/7/global coverage claims.

Technical constraints: Next.js 15 App Router, React 19, TypeScript strict, Tailwind v4 (CSS-config theme in `src/app/globals.css`), next-intl i18n, Fraunces (display) + Inter (body) via `next/font/google`, page transition via CSS-only `.page-enter`, email via Nodemailer + Gmail requiring `SMTP_USER`/`SMTP_PASS`, deploys to Vercel.

Undecided product facts (do not invent): real client cases or testimonials, employment history details beyond the founder's internal-agent experience (no client/company names), public pricing, SLA numbers, office address, team size.

## Brand Commitments

- Name: Sunday Software Solutions.
- Voice: professional, warm, precise; no theater, no invented grandeur.
- Public contact identity: Sunday.Software.Solutions@gmail.com, WhatsApp +52 686 525 4888.
- The Sunrise S mark represents a sunrise over a flowing process; it is used as the app icon, header/footer brand mark, and never redrawn arbitrarily.

## Evidence on Hand

- Full bilingual landing copy in `messages/en.json` and `messages/es.json` (identical key structure).
- Minimal contact form (`src/components/contactForm.tsx`, client) and API route `src/app/api/send_email/route.ts`.
- Founder's experience implementing internal agents connected to business systems (including a legacy ERP) — described honestly in the Company section without commercial-client claims.
- The Sunrise S icon source `src/app/icon.svg` and its 180×180 `apple-icon.png`.

## Product Principles

1. **Commercial clarity first:** a CFO-referred visitor understands in seconds what problem is solved, what can be contracted, and how a project would run.
2. **Honesty over polish:** never fabricate clients, testimonials, metrics, SLAs or partners; label all illustrative material.
3. **Connectivity, not novelty:** the pitch is connecting what exists, not selling the latest tool.
4. **Bilingual by default:** every string ships EN/ES with identical structure and meaning.
5. **Scoped commitments:** every engagement is defined in writing by case; no promises without scope.