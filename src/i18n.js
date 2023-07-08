import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './assets/locales/es.json';
import en from './assets/locales/en.json';

const lsLang = localStorage.getItem('lsLang');

const fallback = lsLang == 'en' ? 'es' : 'en';

i18next.use(initReactI18next).init({
	lng: lsLang,
	fallback: fallback,
	resources: {
		es: {
			translation: es,
		},
		en: {
			translation: en,
		},
	},

	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
