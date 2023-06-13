/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useLocation } from 'react-router-dom';
import { useUiStore } from '../../../hooks/useUiStore';
import { useEffect } from 'react';

const selected = 'activePage';

const notSelected = 'notSelected';

export const Header = () => {
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
		<header>
			<NavLink to={'/'}>
				<span className="rq">{`< `}</span> RQ{' '}
				<span className="rq">{` />`}</span>
			</NavLink>

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

			<div className="menu-wrap">
				<input
					type="checkbox"
					className="toggler"
					id="menuToggler"
					placeholder="toggleMenu"></input>
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
										onClick={handleCloseMenu}
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
										to={'/projects'}
										data-text="Projects"
										onClick={handleCloseMenu}
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
										onClick={handleCloseMenu}
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
