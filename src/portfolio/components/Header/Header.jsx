/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { genericHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

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

	const MyHashLink = genericHashLink(Link);

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
					<MyHashLink to={'#'}> RQ </MyHashLink>
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
										<MyHashLink
											smooth
											to='#'
											data-text={t('Home')}
											onClick={handleCloseMenu}
											className={
												location.hash == ``
													? selected
													: notSelected
											}>
											{t('Home')}
										</MyHashLink>
									</li>
									<li>
										<MyHashLink
											smooth
											className={
												location.hash == `#about`
													? selected
													: notSelected
											}
											to='#about'
											data-text={t('About')}
											onClick={handleCloseMenu}>
											{t('About')}
										</MyHashLink>
									</li>
									<li>
										<MyHashLink
											smooth
											className={
												location.hash == `#skills`
													? selected
													: notSelected
											}
											to='#skills'
											data-text={t('Skills')}
											onClick={handleCloseMenu}>
											{t('Skills')}
										</MyHashLink>
									</li>
									<li>
										<MyHashLink
											smooth
											className={
												location.hash == `#projects`
													? selected
													: notSelected
											}
											to='#projects'
											data-text={t('Projects')}
											onClick={handleCloseMenu}>
											{t('Projects')}
										</MyHashLink>
									</li>
									<li>
										<MyHashLink
											smooth
											className={
												location.hash == `#contact`
													? selected
													: notSelected
											}
											to='#contact'
											data-text={t('Contact')}
											onClick={handleCloseMenu}>
											{t('Contact')}
										</MyHashLink>
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
