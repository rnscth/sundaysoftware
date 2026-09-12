'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LocaleSwitcher from './localeSwitcher';
import BrandMark from './brandMark';

const ctaClasses =
  'inline-flex items-center justify-center min-h-11 rounded-full bg-sunburst px-5 py-2 text-sm font-semibold text-midnight transition-[background-color,color] duration-300 ease-smooth hover:bg-sunburst-hover focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:ring-offset-2 focus-visible:ring-offset-midnight focus-visible:outline-none';

export default function Nav() {
  const t = useTranslations('Nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const links = [
    { hash: 'services', label: t('services') },
    { hash: 'method', label: t('method') },
    { hash: 'company', label: t('company') },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <div
      className="relative mx-auto max-w-6xl px-6"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) closeMenu();
      }}
    >
      <div className="flex items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded min-h-11 p-1 focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
        >
          <BrandMark className="h-10 w-10 shrink-0" />
          <span className="leading-tight text-left">
            <span className="block text-base lg:text-lg font-semibold text-ivory">
              Sunday Software Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label={t('ariaLabel')}>
          {links.map((link) => (
            <Link
              key={link.hash}
              href={{ pathname: '/', hash: link.hash }}
              className="text-base font-medium text-ivory-muted hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
          <Link href={{ pathname: '/', hash: 'contact' }} className={`${ctaClasses} ml-4`}>
            {t('cta')}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitcher />

          <div className="lg:hidden flex items-center">
            <button
              ref={hamburgerRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={t('mobileMenu')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center min-h-11 min-w-11 p-2 rounded text-ivory focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" aria-hidden="true" />
              ) : (
                <FaBars className="text-xl" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[min(20rem,calc(100%-1.5rem))] rounded-2xl border border-line-dark bg-midnight-raised p-4 z-50"
        >
          <div className="flex flex-col items-stretch gap-1">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={{ pathname: '/', hash: link.hash }}
                className="text-sm font-medium text-ivory-muted hover:text-ivory w-full text-center py-3 min-h-11 flex items-center justify-center rounded focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={{ pathname: '/', hash: 'contact' }}
              className={`${ctaClasses} mt-2 w-full`}
              onClick={closeMenu}
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}