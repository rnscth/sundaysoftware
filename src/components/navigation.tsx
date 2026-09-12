'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LocaleSwitcher from './localeSwitcher';

export default function Nav() {
  const t = useTranslations('Nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const links = [
    { href: '/', label: t('home') },
    { href: '/Services', label: t('services') },
    { href: '/About', label: t('about') },
    { href: '/Contact', label: t('contact') },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-4"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) closeMenu();
      }}
    >
      <Link
        href="/"
        className="text-center lg:text-left text-xl lg:text-2xl font-semibold p-1 rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        Sunday Software Solutions
      </Link>

      <nav className="flex justify-between items-center lg:justify-center space-x-4 lg:space-x-8">
        <div className="hidden lg:flex space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        <LocaleSwitcher />

        <div className="lg:hidden flex items-center">
          <button
            ref={hamburgerRef}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={t('mobileMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="flex items-center justify-center min-h-11 min-w-11 p-2 rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute left-1/2 top-full -translate-x-1/2 mt-2 w-60 bg-white shadow-md rounded z-50"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black w-full text-center py-3 min-h-11 flex items-center justify-center"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}