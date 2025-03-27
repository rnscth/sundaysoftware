// // src/components/languageSwitcher.tsx
// 'use client';

// import { useState } from 'react';
// // import { useIntl } from 'next-intl';

// export default function LanguageSwitcher() {
//   const { locale, setLocale } = useIntl();  // Usamos el contexto de next-intl
//   const [currentLocale, setCurrentLocale] = useState(locale);

//   const handleLanguageChange = () => {
//     const newLocale = currentLocale === 'en' ? 'es' : 'en';  // Cambiamos entre inglés y español
//     setLocale(newLocale);  // Cambiamos el idioma a través de next-intl
//     setCurrentLocale(newLocale);  // Actualizamos el estado local para el botón
//   };

//   return (
//     <button
//       onClick={handleLanguageChange}
//       className="p-2 border rounded-md bg-blue-500 text-white"
//     >
//       {currentLocale === 'en' ? 'Español' : 'English'}
//     </button>
//   );
// }
