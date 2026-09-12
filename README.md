# Sunday Software Solutions

Sitio web de **Sunday Software Solutions**: práctica de software e IA que conecta los datos, procesos y aplicaciones de empresas medianas. Landing de una página multidioma (inglés y español) con tres líneas de servicio — agentes de inteligencia de negocio, automatización con IA y soporte/modernización de aplicaciones — método, modelo de relación y formulario de contacto.

## Stack tecnológico

| Tecnología | Versión | Uso |
| ---------- | ------- | --- |
| Next.js (App Router) | 15.2.8 | Framework y enrutado |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos (configuración vía CSS en `src/app/globals.css`) |
| next-intl | 4 | Internacionalización (EN/ES) |
| Fraunces / Inter | — | Display serif / cuerpo (vía `next/font/google`) |
| Nodemailer | 7 | Envío de correos desde la API |

## Requisitos previos

- Node.js 18.18+ (recomendado Node 20+)
- npm

## Empezar

```bash
npm install        # instalar dependencias
cp .env.example .env.local   # configurar variables de entorno
npm run dev        # servidor de desarrollo en http://localhost:3000
```

## Scripts disponibles

| Comando | Descripción |
| ------- | ----------- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm run start` | Servidor de producción (tras `build`) |
| `npm run lint` | Lint (deprecado en Next 15; usar `npx tsc --noEmit` + ESLint flat config) |
| `npx tsc --noEmit` | Verificación de tipos |

## Variables de entorno

| Variable | Descripción |
| -------- | ----------- |
| `SMTP_USER` | Correo Gmail autenticado (remitente y destinatario del formulario) |
| `SMTP_PASS` | Contraseña de aplicación de Gmail (app password) |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (para sitemap y robots) |
| `CONTACT_PHONE` | Teléfono/WhatsApp de contacto (fallback: `+01 555 666 7777`) |

Ver `.env.example`. El archivo `.env.local` no debe subirse al repositorio.

## Estructura del proyecto

```
src/
├── middleware.ts              # Redirección/localización por locale (next-intl)
├── i18n/
│   ├── routing.ts             # Configuración de locales (en, es)
│   ├── navigation.ts          # Link, useRouter, usePathname con locale
│   └── request.ts             # Carga de mensajes por locale
├── app/
│   ├── globals.css            # Estilos globales + tema Tailwind v4 (tokens)
│   ├── icon.svg               # Icono "Sunrise S" (favicon)
│   ├── apple-icon.png         # Icono iOS (180×180)
│   ├── sitemap.ts             # Sitemap XML (urls en/en y es/es)
│   ├── robots.ts              # robots.txt
│   ├── api/send_email/route.ts# Route Handler del formulario de contacto (Nodemailer)
│   └── [locale]/              # Landing única localizada
│       ├── layout.tsx         # Layout raíz (Nav, Footer, fuentes, metadata)
│       ├── page.tsx           # Landing: hero, problemas, servicios, escenarios, método, relación, empresa, contacto
│       ├── not-found.tsx      # 404 localizado
│       ├── error.tsx          # Error boundary localizado
│       ├── loading.tsx        # Estado de carga localizado
│       └── template.tsx       # Animación de entrada por navegación (CSS, respeta prefers-reduced-motion)
└── components/
    ├── navigation.tsx         # Barra de navegación con anclas + CTA (next-intl Link)
    ├── brandMark.tsx          # Render del icono Sunrise S (mismos vectores que icon.svg)
    ├── contactForm.tsx        # Formulario de contacto (client component, sin redirect)
    ├── footer.tsx             # Pie de página
    ├── localeSwitcher.tsx     # Selector de idioma
    ├── localeSwitcherSelect.tsx# Select HTML "use client"
    └── focusOnRouteChange.tsx # Enfoca el contenido al cambiar de locale
messages/
├── en.json                   # Traducciones inglés
└── es.json                   # Traducciones español
```

## Internacionalización (i18n)

- Locales soportados: `en` (default) y `es`.
- Los mensajes se definen en `messages/en.json` y `messages/es.json` con la **misma estructura**.
- Las rutas internas deben generarse con `Link`, `useRouter` de `@/i18n/navigation` para preservar el locale actual — no se deben hardcodear prefijos `/${locale}/...`. Los anclas de la landing se navegan con `Link href={{pathname: '/', hash: '...'}}`.
- `middleware.ts` redirige automáticamente a `/es` o `/en` según la cookie `NEXT_LOCALE` o el idioma del navegador.

## API de contacto (envío de correo)

El formulario de contacto envía `POST /api/send_email` (Route Handler en `src/app/api/send_email/route.ts`, procesada sólo en el servidor) usando `Nodemailer` + Gmail.

- El remitente (`from`) es siempre el `SMTP_USER` autenticado (Gmail no permite `from` arbitrario). El email del usuario se usa como `replyTo`.
- Campos obligatorios: `name`, `email` (regex), `interest` (uno de `bi|automation|support|other`) y `message`. `website` es el honeypot anti-bots. Hay rate-limit en memoria y el contenido se escapa antes de insertarlo en la plantilla HTML.
- Requiere `SMTP_USER` y `SMTP_PASS` en `.env.local` (o variables de entorno del hosting). Si no están configurados, la API responde 500 y el formulario muestra error (nunca éxito sin envío real).

Cuerpo esperado: `{ name, email, interest, message, website }`.

## Despliegue

La aplicación es compatible con Vercel (Next.js): `next build` produce el bundle de producción. Las variables `SMTP_USER`, `SMTP_PASS` y `NEXT_PUBLIC_SITE_URL` deben configurarse en el panel del proveedor de hosting.