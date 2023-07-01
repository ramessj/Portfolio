import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// import en from './assets/locales/en.json'
import es from './assets/locales/es.json';
import en from './assets/locales/en.json';

i18next.use(initReactI18next).init({
	lng: 'en',
	fallback: 'es',
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
