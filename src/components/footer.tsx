import {useTranslations} from 'next-intl';
 
export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-10">
          &copy; 2025 Sunday Software Solutions. { t('rigthsReserved')}
        </footer>
  );
}