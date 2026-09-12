# AGENTS.md

Guía para agentes de IA y desarrolladores que trabajan en este repositorio. Léela antes de modificar código.

## Comandos útiles

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo (http://localhost:3000)
npm run build        # compilación de producción
npx tsc --noEmit     # verificación de tipos (siempre después de cambios)
```

Nota: `npm run lint` usa `next lint`, deprecado en Next 15 y no hay configuración de ESLint en el repo. Preferir `npx tsc --noEmit`.

## Reglas y convenciones

### 1. i18n (crítico)
- Toda cadena visible al usuario debe estar traducida en `messages/en.json` y `messages/es.json` con la **misma estructura de claves**. Agregar ambas o el build fallará en runtime.
- Extruir textos con `useTranslations('Sección')` (ej. `HomePage`, `Services`, `About`, `Contact`, `Nav`, `Footer`, `LocaleSwitcher`). También existen namespaces auxiliares: `Metadata`, `ErrorPage`, `NotFound`, `Loading`.
- Nunca hardcodear textos en español/inglés dentro de componentes.

### 2. Enlaces internos
- Usar **siempre** el `Link`/`useRouter` de `@/i18n/navigation`, no el de `next/link`, para rutas dentro de la app.
- No construir rutas a mano con `/${locale}/...`. Leer el locale desde `useLocale()` o de las utilidades de next-intl.

### 3. Rutas y estructura
- Las páginas viven en `src/app/[locale]/` (nombres con mayúscula inicial: `Services`, `About`, `Contact`).
- Las API van en `src/app/api/<nombre>/route.ts` (Route Handlers de App Router). El formulario usa `src/app/api/send_email/route.ts`. **No** usar `pages/api/*`.
- La página de contacto (`Contact`) es un Client Component (`"use client"`); el resto son Server Components.
- Existen `not-found.tsx`, `error.tsx`, `loading.tsx` y `sitemap.ts`/`robots.ts` localizados. `sitemap`/`robots` leen `NEXT_PUBLIC_SITE_URL`.

### 4. Estilos (Tailwind v4)
- Configuración vía CSS en `src/app/globals.css` (`@import "tailwindcss"` y `@theme`). No existe `tailwind.config`.
- **Solo usar clases de utilidad válidas de Tailwind.** Clases inventadas como `text-l`, `animate-fade-in`, `text-primary`, `bg-primary` no existen y rompen silenciosamente. Para la animación de entrada existe `.fade-in` en `globals.css`.
- Mantener un esquema visual coherente: la cabecera/pie usan fondo oscuro (`--primary-color`), las páginas usan degradados grises y los CTA/botones en `bg-gray-800`/`hover:bg-gray-700`. No mezclar temas arbitrariamente.

### 5. Tipos y calidad
- Mantener `strict` TypeScript. Correr `npx tsc --noEmit` al terminar.
- Los formularios usan `interface` tipada (ver `Contact/page.tsx`).
- No dejar `console.log` de depuración en producción.

### 6. API de correo y variables de entorno
- El envío de correo usa Nodemailer + Gmail. Usar `process.env.SMTP_USER` y `process.env.SMTP_PASS`; nunca exponerlos en código ni commits.
- El campo `from` del correo debe ser el `SMTP_USER` autenticado (Gmail no permite `from` arbitrario).
- Las variables van en `.env.local` (ignorado por git). Referencia en `.env.example`.

### 7. Trabajo con el repositorio
- Rama por defecto: `master`. No commitear `node_modules`, `.next`, `.env*` (excepto `.env.example`).
- Sin pruebas automatizadas por ahora; validar con `npm run build` y `npx tsc --noEmit`.

## Pitfalls conocidos
- La animación de cambio de página se hace con `src/app/[locale]/template.tsx` (fade-in simple, sin `AnimatePresence`). No volver a usar `AnimatePresence`+`key={pathname}` en el layout: en App Router provoca doble animación (fade out + fade in) al navegar.
- `footer.tsx` usa la clave `rightsReserved`. Si se cambia de nuevo, actualizar `en.json` y `es.json` a la vez (antes era `rigthsReserved`, typo ya corregido).
- El selector de idioma depende de la cookie `NEXT_LOCALE` para sincronizar estado; al cambiarla, `router.replace` de `@/i18n/navigation` mantiene la ruta.
- El `from` del correo en `src/app/api/send_email/route.ts` usa `SMTP_USER` (Gmail no permite `from` arbitrario). No revertirlo a usar el email del usuario.