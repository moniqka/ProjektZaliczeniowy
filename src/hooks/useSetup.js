// import i18n from 'i18next';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { use } from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import translationPL from '../utils/languages/pl/translation.json';
// import translationEN from '../utils/languages/en/translation.json';
// import translationDE from '../utils/languages/de/translation.json';

// const useSetup = () => {

//   const activeLanguage = useSelector(
//     ({ LanguageReducer }) => LanguageReducer.lang,
//   );
//   const [isLoading, setIsLoading] = useState(true)
//   const resources = {
//     pl: {
//       translation: translationPL
//     },
//     en: {
//       translation: translationEN
//     },
//     de: {
//       translation: translationDE
//     }
//   };

//   useEffect(() => {
//     try {
//       use(initReactI18next) // passes i18n down to react-i18next
//       .init({
//         resources,
//         lng: activeLanguage,
//         keySeparator: false, // we do not use keys in form messages.welcome
//         interpolation: {
//           escapeValue: false, // react already safes from xss
//         },
//       });
//       setIsLoading(false);
//     } catch {
//       console.log('ERROR')
//     }
//   }, [activeLanguage]);


//   return { isLoading };
// };

// export default useSetup;
