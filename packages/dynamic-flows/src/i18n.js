/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./i18n/messages_en.json'),
  },
  jp: {
    translation: require('./i18n/messages_jp.json'),
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
