/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { genericHashLink } from 'react-router-hash-link';
import { useUiStore } from '../../../hooks/useUiStore';

import './header.css';

const selected = 'active';

const notSelected = 'notSelected';

export const Header = () => {
	const MyHashLink = genericHashLink(Link);

	const toggler = document.getElementById('menuToggler');

	const { onSetLang } = useUiStore();

	const location = useLocation();

	// const handleClickLang = (lang) => {
	// 	const newLang = lang.target.getAttribute('data-lang');
	// 	onSetLang(newLang);
	// };

	const handleCloseMenu = () => {
		toggler.checked = false;
	};

	useEffect(() => {
		onSetLang();
	}, []);

	return (
		<header className='container-fluid'>
			<div className='headerNav container'>
				<div className='brandLogo'>
					<span className='rq'>{`<`}</span>
					<MyHashLink to={'#'}> RQ </MyHashLink>
					<span className='rq'>{`/>`}</span>
				</div>
				{/* <div style={{ position: 'fixed', top: 5, left: '50%' }}>
					<button onClick={handleClickLang} data-lang={'ES'}>
						es
					</button>
					<button onClick={handleClickLang} data-lang={'EN'}>
						en
					</button>
					<button onClick={handleClickLang} data-lang={'PT'}>
						pt
					</button>
				</div> */}
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
											data-text='Home'
											onClick={handleCloseMenu}
											className={
												location.hash == ``
													? selected
													: notSelected
											}>
											Home
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
											data-text='About'
											onClick={handleCloseMenu}>
											About
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
											data-text='Skills'
											onClick={handleCloseMenu}>
											Skills
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
											data-text='Projects'
											onClick={handleCloseMenu}>
											Projects
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
											data-text='Contact'
											onClick={handleCloseMenu}>
											Contact
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
