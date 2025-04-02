'use client'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './locateSwitcher';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function Nav() {
  const locale = useLocale();
  const t = useTranslations('Nav');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-2">
      {/* Logo and Company Name */}
      <h2 className="text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-semibold p-1">Sunday Software Solutions</p>
      </h2>

      {/* Navigation Links */}
      <nav className="flex justify-between items-center sm:justify-center space-x-4 sm:space-x-8">
        <div className="hidden sm:flex space-x-4">
          <Link href="/" locale={locale} className="text-sm sm:text-lg">
            {t('home')}
          </Link>
          <Link href="/Services" locale={locale} className="text-sm sm:text-lg">
            {t('services')}
          </Link>
          <Link href="/About" locale={locale} className="text-sm sm:text-lg">
            {t('about')}
          </Link>
          <Link href="/Contact" locale={locale} className="text-sm sm:text-lg">
            {t('contact')}
          </Link>
        </div>

        {/* Locale Switcher */}
        <LocaleSwitcher />

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="p-2">
            <span className="text-xl">☰</span> {/* Hamburger Icon */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Conditional Rendering */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute left-1/2 top-16 transform -translate-x-1/2 w-60 bg-white shadow-md rounded">

          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              locale={locale}
              className="text-sm sm:text-lg text-black"
              onClick={toggleMobileMenu} // Close menu after click
            >
              {t('home')}
            </Link>
            <Link
              href="/Services"
              className="text-sm sm:text-lg text-black"
              onClick={toggleMobileMenu}
            >
              {t('services')}
            </Link>
            <Link
              href="/About"
              className="text-sm sm:text-lg text-black"
              onClick={toggleMobileMenu}
            >
              {t('about')}
            </Link>
            <Link
              href="/Contact"
              className="text-sm sm:text-lg text-black"
              onClick={toggleMobileMenu}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
