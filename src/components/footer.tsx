import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="text-white text-center p-4">
      &copy; {new Date().getFullYear()} Sunday Software Solutions. {t('rightsReserved')}
    </footer>
  );
}