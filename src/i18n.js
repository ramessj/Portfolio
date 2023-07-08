import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './assets/locales/es.json';
import en from './assets/locales/en.json';

const lsLang = localStorage.getItem('lsLang');

i18n.use(initReactI18next).init({
	lng: lsLang ? lsLang : 'en',
	resources: {
		es: {
			translation: es,
		},
		en: {
			translation: en,
		},
	},
});

export default i18n;
