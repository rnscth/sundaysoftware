import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations('Privacy');
  const informationItems = ['name', 'messages', 'technical'] as const;
  const useItems = ['inquiries', 'proposals', 'meetings', 'services'] as const;
  const providerItems = ['infrastructure', 'email', 'whatsapp', 'ai'] as const;
  const rightsItems = ['access', 'correction', 'deletion', 'questions'] as const;

  return (
    <main id="main" className="flex-1 bg-shell">
      <section className="border-b border-line bg-midnight text-ivory">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunburst">{t('kicker')}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{t('title')}</h1>
          <p className="mt-5 text-base leading-relaxed text-ivory-muted">{t('intro')}</p>
          <p className="mt-6 text-sm font-medium text-sunburst">{t('effectiveDate')}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12 text-base leading-relaxed text-ink-muted">
            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('information.title')}</h2>
              <p className="mt-4">{t('information.intro')}</p>
              <ul className="mt-5 space-y-3">
                {informationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunburst" aria-hidden="true" />
                    <span>{t(`information.items.${item}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('use.title')}</h2>
              <ul className="mt-5 space-y-3">
                {useItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunburst" aria-hidden="true" />
                    <span>{t(`use.items.${item}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('providers.title')}</h2>
              <p className="mt-4">{t('providers.intro')}</p>
              <ul className="mt-5 space-y-3">
                {providerItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunburst" aria-hidden="true" />
                    <span>{t(`providers.items.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">{t('providers.sharing')}</p>
              <p className="mt-4">{t('providers.noSale')}</p>
            </section>

            <section className="rounded-3xl border border-sunburst/40 bg-amber-soft p-6 lg:p-8">
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('sensitive.title')}</h2>
              <p className="mt-4 text-ink-muted">{t('sensitive.body')}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('retention.title')}</h2>
              <p className="mt-4">{t('retention.body')}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('rights.title')}</h2>
              <p className="mt-4">{t('rights.intro')}</p>
              <ul className="mt-5 space-y-3">
                {rightsItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunburst" aria-hidden="true" />
                    <span>{t(`rights.items.${item}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                {t('rights.contact')}{' '}
                <a
                  href="mailto:sunday@sunday-software.com"
                  className="font-medium text-amber-deep underline decoration-amber-deep/40 underline-offset-4 hover:text-midnight focus-visible:ring-2 focus-visible:ring-amber-deep focus-visible:outline-none"
                >
                  sunday@sunday-software.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-midnight">{t('updates.title')}</h2>
              <p className="mt-4">{t('updates.body')}</p>
            </section>

            <p className="border-t border-line pt-8 text-sm">
              {t('company')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
