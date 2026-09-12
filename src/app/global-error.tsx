'use client';

import { useEffect, useState } from 'react';
import en from '../../messages/en.json';
import es from '../../messages/es.json';

export default function GlobalError({
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  const [locale, setLocale] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=(\w+)/);
    setLocale(match && match[1] === 'es' ? 'es' : 'en');
  }, []);

  const messages = locale === 'es' ? es.ErrorPage : en.ErrorPage;

  return (
    <html lang={locale}>
      <body style={{margin: 0, background: '#101C2C', fontFamily: 'Inter, Arial, sans-serif'}}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: '#F5F0E6',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FFB547',
                margin: '0 0 1rem',
              }}
            >
              Sunday Software Solutions
            </p>
            <h1
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                fontWeight: 600,
                margin: '0 0 0.75rem',
                lineHeight: 1.15,
              }}
            >
              {messages.title}
            </h1>
            <p style={{color: '#A8B3C2', margin: '0 auto 1.75rem', maxWidth: '28rem', lineHeight: 1.6}}>
              {messages.description}
            </p>
            <button
              onClick={reset}
              style={{
                background: '#FFB547',
                color: '#101C2C',
                border: 0,
                borderRadius: 999,
                padding: '0.8rem 1.75rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              {messages.retry}
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}