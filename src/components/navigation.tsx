import {useTranslations} from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './locateSwitcher';
 
export default function Nav() {
  const t = useTranslations('Nav');
  return (
  <div className="grid  grid-cols-2 gap-4">

    <h2><p className='text-xl p-1'>Sunday Software Solutions</p></h2>

    <nav className="flex justify-center space-x-4">
      <Link href="/">{t('home')}</Link>
      <Link href="/Services">{t('services')}</Link>
      <Link href="/About">{t('about')}</Link>
      <Link href="/Contact">{t('contact')}</Link>
      {/* <LanguageSwitcher /> Colocamos el LanguageSwitcher */}
      <LocaleSwitcher />
    </nav>
    
  </div>
  )
}
