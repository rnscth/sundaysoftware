import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BrandMark from './brandMark';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="text-center">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded p-1 min-h-11 text-ivory focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
          >
            <BrandMark className="h-9 w-9 shrink-0" />
            <span className="leading-tight text-left">
              <span className="block text-base font-semibold">Sunday Software Solutions</span>
            </span>
          </Link>

          <p className="max-w-md text-sm text-ivory-muted">{t('tagline')}</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
            <a
              href="mailto:Sunday.Software.Solutions@gmail.com"
              className="text-ivory-muted hover:text-sunburst transition-colors duration-200 ease-smooth rounded focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none break-all"
            >
              Sunday.Software.Solutions@gmail.com
            </a>
            <span className="hidden sm:inline text-line-dark" aria-hidden="true">
              ·
            </span>
            <a
              href="https://wa.me/+526865254888"
              className="text-ivory-muted hover:text-sunburst transition-colors duration-200 ease-smooth rounded focus-visible:ring-2 focus-visible:ring-sunburst focus-visible:outline-none"
            >
              +52 686 525 4888
            </a>
          </div>

          <p className="text-xs text-ivory-muted">
            &copy; {new Date().getFullYear()} Sunday Software Solutions. {t('rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}