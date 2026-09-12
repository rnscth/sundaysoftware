# Sunday Software Solutions

Sitio web corporativo de **Sunday Software Solutions**: empresa de desarrollo de software, soluciones SaaS, bots y soporte técnico. El sitio incluye páginas de inicio, servicios, acerca de y contacto, con soporte multidioma (inglés y español).

## Stack tecnológico

| Tecnología | Versión | Uso |
| ---------- | ------- | --- |
| Next.js (App Router) | 15.2.8 | Framework y enrutado |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos (configuración vía CSS, no `tailwind.config`) |
| next-intl | 4 | Internacionalización (EN/ES) |
| Framer Motion | 12 | Animaciones y transiciones de página |
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
│   ├── globals.css            # Estilos globales + tema Tailwind v4
│   ├── sitemap.ts             # Sitemap XML (urls en/en y es/es)
│   ├── robots.ts              # robots.txt
│   ├── api/send_email/route.ts# Route Handler del formulario de contacto (Nodemailer)
│   └── [locale]/              # Páginas localizadas
│       ├── layout.tsx         # Layout raíz (Nav, Footer, metadata)
│       ├── page.tsx           # Inicio (hero + servicios + CTA)
│       ├── Services/page.tsx  # Servicios (incluye IA + Microsoft Entra)
│       ├── About/page.tsx     # Sobre nosotros (equipo, ubicación)
│       ├── Contact/page.tsx   # Formulario de contacto (client component)
│       ├── not-found.tsx      # 404 localizado
│       ├── error.tsx          # Error boundary localizado
│       ├── loading.tsx        # Estado de carga localizado
│       └── template.tsx       # Animación de entrada por navegación (CSS, respeta prefers-reduced-motion)
└── components/
    ├── navigation.tsx         # Barra de navegación responsive (next-intl Link)
    ├── footer.tsx             # Pie de página (año dinámico)
    ├── localeSwitcher.tsx     # Selector de idioma
    ├── localeSwitcher.tsx       # Selector de idioma (componente)
    └── localeSwitcherSelect.ts# Select HTML "use client"
messages/
├── en.json                   # Traducciones inglés
└── es.json                   # Traducciones español
```

## Internacionalización (i18n)

- Locales soportados: `en` (default) y `es`.
- Los mensajes se definen en `messages/en.json` y `messages/es.json` con la **misma estructura**.
- Las rutas internas deben generarse con `Link`, `useRouter` de `@/i18n/navigation` para preservar el locale actual — no se deben hardcodear prefijos `/${locale}/...`.
- `middleware.ts` redirige automáticamente a `/es` o `/en` según la cookie `NEXT_LOCALE` o el idioma del navegador.

## API de contacto (envío de correo)

El formulario de contacto envía `POST /api/send_email` (Route Handler en `src/app/api/send_email/route.ts`, procesada sólo en el servidor) usando `Nodemailer` + Gmail.

- El remitente (`from`) es siempre el `SMTP_USER` autenticado (Gmail no permite `from` arbitrario). El email del usuario se usa como `replyTo`.
- Los campos se validan según el tipo de contacto (`Phone` o `Email`) y el contenido se escapa antes de insertarlo en la plantilla HTML.
- Requiere `SMTP_USER` y `SMTP_PASS` en `.env.local` (o variables de entorno del hosting).

Cuerpo esperado: `{ name, company, requirementType, contactType, phone?, email?, projectDescription, businessSector }`.

## Despliegue

La aplicación es compatible con Vercel (Next.js): `next build` produce el bundle de producción. Las variables `SMTP_USER`, `SMTP_PASS` y `NEXT_PUBLIC_SITE_URL` deben configurarse en el panel del proveedor de hosting.