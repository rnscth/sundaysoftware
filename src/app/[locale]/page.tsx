import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/contactForm';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

type T = (key: string) => string;

function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
        dark ? 'text-sunburst' : 'text-amber-deep'
      }`}
    >
      {children}
    </p>
  );
}

function ArrowDown({ className = 'text-sunburst' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4v16m0 0l-6-6m6 6l6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeroDiagram({ t }: { t: T }) {
  return (
    <figure>
      <div className="rounded-3xl border border-line-dark bg-midnight-soft p-6 lg:p-8">
        <div className="flex items-center justify-between border-b border-line-dark pb-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sunburst">
            {t('diagramLabel')}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold text-ivory">{t('diagramSources')}</p>
          <p className="mt-1 text-xs text-ivory-muted">{t('diagramSourcesDesc')}</p>
        </div>

        <div className="my-4">
          <ArrowDown />
        </div>

        <div className="rounded-2xl border border-sunburst/40 bg-midnight-raised p-4">
          <p className="text-sm font-semibold text-sunburst">{t('diagramAgent')}</p>
          <p className="mt-1 text-xs text-ivory-muted">{t('diagramAgentSub')}</p>
        </div>

        <div className="my-4">
          <ArrowDown />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-midnight p-4">
            <p className="text-sm font-semibold text-ivory">{t('diagramAnswers')}</p>
            <p className="mt-1 text-xs text-ivory-muted">{t('diagramAnswersDesc')}</p>
          </div>
          <div className="rounded-2xl bg-midnight p-4">
            <p className="text-sm font-semibold text-ivory">{t('diagramActions')}</p>
            <p className="mt-1 text-xs text-ivory-muted">{t('diagramActionsDesc')}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-ivory-muted">{t('diagramCaption')}</figcaption>
    </figure>
  );
}

function ServicePanel({
  num,
  title,
  tagline,
  description,
  examples,
  note,
  exampleLabel,
  noteLabel,
}: {
  num: string;
  title: string;
  tagline: string;
  description: string;
  examples: string[];
  note: string;
  exampleLabel: string;
  noteLabel: string;
}) {
  return (
    <div className="h-full">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm font-semibold text-amber-deep">{num}</span>
        <h3 className="font-display text-2xl lg:text-[1.7rem] font-semibold text-midnight leading-tight">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-base font-medium text-ink">{tagline}</p>
      <p className="mt-4 text-base text-ink-muted leading-relaxed">{description}</p>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {exampleLabel}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {examples.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-shell px-4 py-1.5 text-sm text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 border-l-2 border-amber-deep pl-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-deep mb-1">
          {noteLabel}
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">{note}</p>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const tHero = await getTranslations('Hero');
  const tProblems = await getTranslations('Problems');
  const tServices = await getTranslations('Services');
  const tUseCases = await getTranslations('UseCases');
  const tMethod = await getTranslations('Method');
  const tRelationship = await getTranslations('Relationship');
  const tCompany = await getTranslations('Company');
  const tContact = await getTranslations('Contact');

  const serviceKeys = ['bi', 'auto', 'support'] as const;
  const servicesData = serviceKeys.map((key, index) => ({
    key,
    num: `0${index + 1}`,
    title: tServices(`${key}.title`),
    tagline: tServices(`${key}.tagline`),
    description: tServices(`${key}.description`),
    examples: ['1', '2', '3', '4'].map((i) => tServices(`${key}.examples.${i}`)),
    note: tServices(`${key}.note`),
  }));

  const useCaseKeys = ['bi', 'auto', 'support'] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-midnight text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <Kicker dark>{tHero('kicker')}</Kicker>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-ivory">
              {tHero('title1')}
              <br />
              {tHero('title2')}
              <br />
              <span className="text-sunburst">{tHero('title3')}</span>
            </h1>
            <p className="mt-6 text-lg text-ivory-muted leading-relaxed">{tHero('description')}</p>
            <p className="mt-4 text-sm text-ivory-muted">{tHero('audience')}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-11 rounded-full bg-sunburst px-7 py-3 font-semibold text-midnight shadow-lg shadow-black/20 transition-[background-color,transform] duration-300 ease-smooth hover:bg-sunburst-hover focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:ring-offset-2 focus-visible:ring-offset-midnight focus-visible:outline-none"
              >
                {tHero('ctaPrimary')}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center min-h-11 rounded-full border border-line-dark px-7 py-3 font-medium text-ivory transition-colors duration-300 ease-smooth hover:border-sunburst hover:text-sunburst focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:ring-offset-2 focus-visible:ring-offset-midnight focus-visible:outline-none"
              >
                {tHero('ctaSecondary')}
              </a>
            </div>
          </div>

          <HeroDiagram t={tHero} />
        </div>
      </section>

      {/* Problems */}
      <section id="problems" className="scroll-mt-24 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Kicker>{tProblems('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
              {tProblems('title')}
            </h2>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9">
            {['1', '2', '3', '4', '5', '6'].map((index) => (
              <li key={index} className="flex gap-4">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sunburst" aria-hidden="true" />
                <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
                  {tProblems(`items.${index}`)}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl font-display text-xl lg:text-2xl text-midnight">
            {tProblems('outro')}
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Kicker>{tServices('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
              {tServices('title')}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-line bg-ivory p-8 lg:p-10">
                <ServicePanel
                  num={servicesData[0].num}
                  title={servicesData[0].title}
                  tagline={servicesData[0].tagline}
                  description={servicesData[0].description}
                  examples={servicesData[0].examples}
                  note={servicesData[0].note}
                  exampleLabel={tServices('illustrativeLabel')}
                  noteLabel={tServices('noteLabel')}
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="h-full rounded-3xl border border-line bg-ivory p-8">
                <ServicePanel
                  num={servicesData[1].num}
                  title={servicesData[1].title}
                  tagline={servicesData[1].tagline}
                  description={servicesData[1].description}
                  examples={servicesData[1].examples}
                  note={servicesData[1].note}
                  exampleLabel={tServices('illustrativeLabel')}
                  noteLabel={tServices('noteLabel')}
                />
              </div>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="h-full rounded-3xl border border-line bg-ivory p-8 lg:p-10">
                <ServicePanel
                  num={servicesData[2].num}
                  title={servicesData[2].title}
                  tagline={servicesData[2].tagline}
                  description={servicesData[2].description}
                  examples={servicesData[2].examples}
                  note={servicesData[2].note}
                  exampleLabel={tServices('illustrativeLabel')}
                  noteLabel={tServices('noteLabel')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="uses" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Kicker>{tUseCases('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
              {tUseCases('title')}
            </h2>
            <p className="mt-4 text-base text-ink-muted">{tUseCases('note')}</p>
          </div>

          <div className="mt-14 space-y-16">
            {useCaseKeys.map((key, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={key}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  <div className={reverse ? 'lg:order-2' : undefined}>
                    <span className="inline-flex rounded-full border border-amber-deep/30 bg-amber-soft px-3 py-1 text-xs font-medium text-amber-deep">
                      {tUseCases('caseLabel')}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-midnight leading-tight">
                      {tUseCases(`cases.${key}.title`)}
                    </h3>
                    <p className="mt-4 text-base text-ink-muted leading-relaxed">
                      {tUseCases(`cases.${key}.body`)}
                    </p>
                  </div>

                  <div className={reverse ? 'lg:order-1' : undefined}>
                    {key === 'bi' && (
                      <div className="rounded-3xl border border-line bg-ivory p-6">
                        <div className="rounded-2xl bg-midnight p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-ivory-muted mb-1">
                            {tUseCases('vis.question')}
                          </p>
                          <p className="text-ivory">{tUseCases('vis.q')}</p>
                        </div>
                        <div className="my-4">
                          <ArrowDown className="text-amber-deep" />
                        </div>
                        <div className="rounded-2xl border border-sunburst/50 bg-shell p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-amber-deep mb-1">
                            {tUseCases('vis.answer')}
                          </p>
                          <p className="text-ink font-medium">{tUseCases('vis.a')}</p>
                        </div>
                      </div>
                    )}

                    {key === 'auto' && (
                      <div className="rounded-3xl border border-line bg-ivory p-6">
                        <ul className="flex flex-wrap items-center justify-center gap-2">
                          {['1', '2', '3', '4'].map((step, idx) => (
                            <li key={step} className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-midnight px-4 py-2 text-sm text-ivory">
                                {tUseCases(`vis.auto.${step}`)}
                              </span>
                              {idx < 3 && (
                                <svg
                                  className="text-amber-deep"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M5 12h14m0 0l-5-5m5 5l-5 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {key === 'support' && (
                      <div className="rounded-3xl border border-line bg-ivory p-6">
                        <ul className="flex flex-wrap gap-2">
                          {['1', '2', '3'].map((step) => (
                            <li
                              key={step}
                              className="rounded-full border border-line bg-shell px-4 py-1.5 text-sm text-ink-muted"
                            >
                              {tUseCases(`vis.support.${step}`)}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-sunburst/50 bg-midnight p-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-sunburst" aria-hidden="true" />
                          <p className="text-sm font-medium text-ivory">
                            {tUseCases('vis.support.stabilized')}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-line bg-ivory p-8 lg:p-12">
            <div className="max-w-2xl">
              <Kicker>{tMethod('kicker')}</Kicker>
              <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
                {tMethod('title')}
              </h2>
            </div>

            <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {['1', '2', '3', '4'].map((index) => (
                <li key={index} className="relative md:border-t md:border-line md:pt-16">
                  <span
                    className="absolute top-0 left-0 mt-[-6px] h-3 w-3 rounded-full bg-amber-deep ring-4 ring-amber-soft"
                    aria-hidden="true"
                  />
                  <span className="font-display text-sm font-semibold text-amber-deep">
                    0{index}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-midnight">
                    {tMethod(`steps.${index}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                    {tMethod(`steps.${index}.body`)}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-14 border-t border-line pt-8">
              <p className="text-sm font-semibold text-midnight">{tMethod('benefitsTitle')}</p>
              <ul className="mt-4 flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3">
                {['1', '2', '3', '4'].map((index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-sunburst" aria-hidden="true" />
                    {tMethod(`benefits.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship model */}
      <section id="relationship" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Kicker>{tRelationship('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
              {tRelationship('title')}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['initial', 'recurrent', 'growth'] as const).map((key, index) => {
              const isDark = key === 'recurrent';
              return (
                <div
                  key={key}
                  className={
                    isDark
                      ? 'rounded-3xl bg-midnight p-8 text-ivory shadow-xl shadow-midnight/20 md:-my-4'
                      : 'rounded-3xl border border-line bg-ivory p-8'
                  }
                >
                  <span
                    className={`font-display text-sm font-semibold ${
                      isDark ? 'text-sunburst' : 'text-amber-deep'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className={`mt-3 font-display text-xl font-semibold leading-tight ${
                      isDark ? 'text-ivory' : 'text-midnight'
                    }`}
                  >
                    {tRelationship(`items.${key}.title`)}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDark ? 'text-ivory-muted' : 'text-ink-muted'
                    }`}
                  >
                    {tRelationship(`items.${key}.body`)}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-12 inline-flex rounded-full border border-amber-deep/30 bg-amber-soft px-5 py-2.5 text-sm text-amber-deep">
            {tRelationship('honestNote')}
          </p>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="scroll-mt-24 bg-midnight text-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Kicker dark>{tCompany('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-ivory leading-tight">
              {tCompany('title')}
            </h2>
            <p className="mt-6 text-lg text-ivory-muted leading-relaxed">{tCompany('p1')}</p>
            <p className="mt-4 text-lg text-ivory-muted leading-relaxed">{tCompany('p2')}</p>
            <p className="mt-8 inline-flex rounded-full border border-sunburst/50 px-5 py-2.5 text-sm text-sunburst">
              {tCompany('honestNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Kicker>{tContact('kicker')}</Kicker>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-semibold text-midnight leading-tight">
              {tContact('title')}
            </h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">{tContact('description')}</p>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {tContact('orDirect')}
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:Sunday.Software.Solutions@gmail.com"
                className="flex items-center gap-3 py-3 rounded text-midnight hover:text-ink-muted transition-colors duration-200 ease-smooth focus-visible:ring-2 focus-visible:ring-amber-deep focus-visible:ring-offset-2 focus-visible:outline-none break-all"
              >
                <AiOutlineMail size={22} className="text-amber-deep shrink-0" aria-hidden="true" />
                {tContact('email')}
              </a>
              <a
                href="https://wa.me/+526865254888"
                className="flex items-center gap-3 py-3 rounded text-midnight hover:text-ink-muted transition-colors duration-200 ease-smooth focus-visible:ring-2 focus-visible:ring-amber-deep focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <FaWhatsapp size={22} className="text-amber-deep shrink-0" aria-hidden="true" />
                {tContact('whatsapp')}
              </a>
            </div>

            <p className="mt-8 max-w-md text-sm text-ink-muted leading-relaxed">
              {tContact('privacyNote')}
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-ivory p-6 lg:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}