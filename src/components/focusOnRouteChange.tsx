'use client';

import {useEffect, useRef} from 'react';
import {usePathname} from '@/i18n/navigation';

export default function FocusOnRouteChange() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('main')?.focus();
  }, [pathname]);

  return null;
}