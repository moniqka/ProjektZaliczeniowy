import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
      translation: {
          about: "ABOUT",
          licences: "LICENCES",
          contact: "contact",
          sendMessage: "Send Message",
          name: "Name",
          surname: "Surname",
          message: "Message...",
          needInspiration: "Need inspirtion?",
          findMovie: "Find movie",
          searchTitle: "Search title...",
          comingSoonQuotes: "Coming soon: inspiration quotes",
          comingSoonImages: "Coming soon: inspiration images",
          comingSoonCats: "Coming soon: funny and cute cat images",
          comingSoonTravel: "Coming soon: travel recomendations",
          images: "Images",
          cats: "Cats",
          quotes: "Quotes",
          travel: "Travel",
          movies: "Movies",
          errorAll: "All fields must be filled",
          errorEmai: "Incorrect email",
          search: "Search...",
          close: "Close",
          send: "Send"
      }
  },
  pl: {
      translation: {
        about: "O projekcie",
        licences: "licencje",
        contact: "kontakt",
        sendMessage: "Wyślij wiadomość",
        name: "Imię",
        surname: "Nazwisko",
        message: "Wiadomość...",
        needInspiration: "Potrzebujesz inspiracji?",
        findMovie: "Znajdź film :D",
        searchTitle: "Wpisz tytuł...",
        comingSoonQuotes: "Wkrótce: inspirujące cytaty",
        comingSoonImages: "Wkrótce: inspirujące zdjęcia",
        comingSoonCats: "Wkrótce: zdjęcia słodkich kotków",
        comingSoonTravel: "Wkrótce: inspirujące miejsca",
        images: "Zdjęcia",
        cats: "Koty",
        quotes: "Cytaty",
        travel: "Podróże",
        movies: "Filmy",
        errorAll: "Wszystkie pola muszą być uzupełnione",
        errorEmai: "Email jest nieprawidłowy",
        search: "Szukaj...",
        close: "Zamknij",
        send: "Wyślij"
      }
  },
  de: {
    translation: {
      about: "DE",
      licences: "licencje",
      contact: "contact",
      sendMessage: "DE",
      name: "Name",
      surname: "Surname",
      message: "Message...",
      needInspiration: "Need inspirtion?",
      findMovie: "DE",
      searchTitle: "Suche...",
      comingSoonQuotes: "DE: inspirujące cytaty",
      comingSoonImages: "DE: inspirujące zdjęcia",
      comingSoonCats: "DE: zdjęcia słodkich kotków",
      comingSoonTravel: "DE: inspirujące miejsca",
      images: "DE:Zdjęcia",
      cats: "DE:Koty",
      quotes: "DE:Cytaty",
      travel: "DE:Podróże",
      movies: "DE:Filmy",
      errorAll: "DE: Wszystkie pola muszą być uzupełnione",
      errorEmai: "DE:Email jest nieprawidłowy",
      search: "Suche...",
      close: "Close",
      send: "Send"
    }
}
};

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'pl',
    keySeparator: false, // we do not use keys in form messages.welcome
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;