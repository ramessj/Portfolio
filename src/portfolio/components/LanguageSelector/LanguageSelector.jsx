import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import esFlag from '../../../assets/icons/es.png';
import enFlag from '../../../assets/icons/en.png';

import './LanguageSelector.css';

export const LanguageSelector = () => {
	const [lsLang, setLsLang] = useState(localStorage.getItem('lsLang'));

	const { i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(lsLang == 'en' ? 'es' : 'en');
		localStorage.setItem('lsLang', i18n.language);
		setLsLang(i18n.language);
	};

	useEffect(() => {
		lsLang ? setLsLang(lsLang) : setLsLang('en');
	}, [lsLang]);

	return (
		<div className='circleA' onClick={changeLanguage}>
			<img
				className={`langFlagHalfCircle ${lsLang == 'es' && 'active'}`}
				src={esFlag}
				alt='Spanish / Español'></img>
			<img
				className={`langFlagHalfCircle ${lsLang == 'en' && 'active'}`}
				src={enFlag}
				alt='English / Inglés'></img>
		</div>
	);
};
