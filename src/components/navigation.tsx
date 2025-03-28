import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './locateSwitcher';
import { useLocale } from 'next-intl';

export default function Nav() {
  const locale = useLocale();
  const t = useTranslations('Nav');
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-2">
      
      {/* Logo and Company Name */}
      <h2 className="text-center sm:text-left">
        <p className='text-xl sm:text-2xl font-semibold p-1'>Sunday Software Solutions</p>
      </h2>

      {/* Navigation Links */}
      <nav className="flex justify-between items-center sm:justify-center space-x-4 sm:space-x-8">
        <div className="hidden sm:flex space-x-4">
          <Link href="/" locale={locale} className="text-sm sm:text-lg">{t('home')}</Link>
          <Link href="/Services" className="text-sm sm:text-lg">{t('services')}</Link>
          <Link href="/About" className="text-sm sm:text-lg">{t('about')}</Link>
          <Link href="/Contact" className="text-sm sm:text-lg">{t('contact')}</Link>
        </div>

        {/* Locale Switcher */}
        <LocaleSwitcher />
        
        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button className="p-2">
            {/* Add an icon here for a mobile menu */}
            <span className="text-xl">☰</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
