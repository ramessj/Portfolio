/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import esFlag from '../../../assets/icons/es.png';
import enFlag from '../../../assets/icons/en.png';

import './header.css';

export const Header = () => {
	const { t, i18n } = useTranslation();

	const [lsLang, setLsLang] = useState(localStorage.getItem('lsLang'));
	const toggler = document.getElementById('menuToggler');

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('lsLang', language);
		setLsLang(language);
	};

	const handleCloseMenu = () => {
		toggler.checked = false;
	};

	useEffect(() => {
		changeLanguage(lsLang);
	}, []);

	return (
		<header className='container-fluid'>
			<div className='headerNav container d-flex justify-content-between align-items-center'>
				<div className='brandLogo'>
					<span className='rq'>{`<`}</span>
					<a href='#home'>RQ</a>
					<span className='rq'>{`/>`}</span>
				</div>
				<div className='languageSelector'>
					{lsLang == 'en' ? (
						<button onClick={() => changeLanguage('es')}>
							<img className='langFlag' src={esFlag}></img>
						</button>
					) : (
						<button onClick={() => changeLanguage('en')}>
							<img className='langFlag' src={enFlag}></img>
						</button>
					)}
				</div>
				<div className='menu-wrap'>
					<input
						type='checkbox'
						className='toggler'
						id='menuToggler'
						placeholder='toggleMenu'></input>
					<div id='hamburger' className='hamburger'>
						<div id='hamburger-lines'></div>
					</div>
					<div className='menu'>
						<div id='menusub1'>
							<div id='menusub2'>
								<ul id='menu-links'>
									<li>
										<a
											data-menuanchor='home'
											href='#home'
											data-text={t('Home')}
											onClick={handleCloseMenu}>
											{t('Home')}
										</a>
									</li>
									<li>
										<a
											data-menuanchor='about'
											href='#about'
											data-text={t('About')}
											onClick={handleCloseMenu}>
											{t('About')}
										</a>
									</li>
									<li>
										<a
											data-menuanchor='skills'
											href='#skills'
											data-text={t('Skills')}
											onClick={handleCloseMenu}>
											{t('Skills')}
										</a>
									</li>
									<li>
										<a
											data-menuanchor='projects'
											href='#projects'
											data-text={t('Projects')}
											onClick={handleCloseMenu}>
											{t('Projects')}
										</a>
									</li>
									<li>
										<a
											data-menuanchor='contact'
											href='#contact'
											data-text={t('Contact')}
											onClick={handleCloseMenu}>
											{t('Contact')}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
