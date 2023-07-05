/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import esFlag from '../../../assets/icons/es.png';
import enFlag from '../../../assets/icons/en.png';

import './header.css';

const selected = 'active';
const notSelected = 'notSelected';

export const Header = () => {
	const [lsLang, setLsLang] = useState(localStorage.getItem('lsLang'));

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('lsLang', language);
		setLsLang(language);
	};

	const toggler = document.getElementById('menuToggler');

	const location = useLocation();

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
					<HashLink smooth to='#home'>
						{' '}
						RQ{' '}
					</HashLink>
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
										<HashLink
											smooth
											to='#'
											data-text={t('Home')}
											onClick={handleCloseMenu}
											className={
												location.hash === `` ||
												location.hash === '#home'
													? selected
													: notSelected
											}>
											{t('Home')}
										</HashLink>
									</li>
									<li>
										<HashLink
											smooth
											to='#about'
											className={
												location.hash == '#about'
													? selected
													: notSelected
											}
											data-text={t('About')}
											onClick={handleCloseMenu}>
											{t('About')}
										</HashLink>
									</li>
									<li>
										<HashLink
											smooth
											to='#skills'
											className={
												location.hash == `#skills`
													? selected
													: notSelected
											}
											data-text={t('Skills')}
											onClick={handleCloseMenu}>
											{t('Skills')}
										</HashLink>
									</li>
									<li>
										<HashLink
											smooth
											to='#projects'
											className={
												location.hash == `#projects`
													? selected
													: notSelected
											}
											data-text={t('Projects')}
											onClick={handleCloseMenu}>
											{t('Projects')}
										</HashLink>
									</li>
									<li>
										<HashLink
											smooth
											to='#contact'
											className={
												location.hash == `#contact`
													? selected
													: notSelected
											}
											data-text={t('Contact')}
											onClick={handleCloseMenu}>
											{t('Contact')}
										</HashLink>
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
