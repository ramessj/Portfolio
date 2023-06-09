/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useLocation } from 'react-router-dom';
import { useUiStore } from '../../../hooks/useUiStore';
import { useEffect } from 'react';

const selected = 'selected';

const notSelected = 'notSelected';

export const Header = () => {

	const {onSetLang} = useUiStore()

	const location = useLocation();

	const handleClickLang = (lang) => {
		const newLang = lang.target.getAttribute('data-lang');
		onSetLang(newLang)
	}

	useEffect(() => {
		onSetLang()
	}, [])
	

	return (
		<header>
			<NavLink
				to={'/'}
				className={location.pathname == `/` ? selected : notSelected}>
				HOME
			</NavLink>

			<div style={{position: 'fixed', top: 5, left: '50%'}}>
				<button onClick={handleClickLang} data-lang={'ES'}>es</button>
				<button onClick={handleClickLang} data-lang={'EN'}>en</button>
				<button onClick={handleClickLang} data-lang={'PT'}>pt</button>

			</div>

			<div className="menu-wrap">
				<input type="checkbox" className="toggler" />
				<div id="hamburger" className="hamburger">
					<div id="hamburger-lines"></div>
				</div>

				<div className="menu">
					<div id="menusub1">
						<div id="menusub2">
							<ul id="menu-links">
								<li>
									<NavLink
										to={'/'}
										data-text="Home"
										className={
											location.pathname == `/`
												? selected
												: notSelected
										}>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to={'/about'}
										data-text="About"
										className={
											location.pathname == `/about`
												? selected
												: notSelected
										}>
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to={'/projects'}
										data-text="Projects"
										className={
											location.pathname == `/projects`
												? selected
												: notSelected
										}>
										Projects
									</NavLink>
								</li>
								<li>
									<NavLink
										to={'/contact'}
										data-text="Contact"
										className={
											location.pathname == `/contact`
												? selected
												: notSelected
										}>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
