import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const selected = styles.selected;

const notSelected = styles.notSelected;

export const Header = () => {
	const location = useLocation();

	return (
		<header className={styles.container}>
			<ul className={styles.list}>
				<li>
					<NavLink to={'/'}>
						<span
							className={
								location.pathname == `/`
									? selected
									: notSelected
							}>
							HOME
						</span>
					</NavLink>
				</li>

				<div className={styles.listLinks}>
					<li>
						<NavLink to={'/about'}>
							<span
								className={
									location.pathname == `/about`
										? selected
										: notSelected
								}>
								About
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={'/projects'}>
							<span
								className={
									location.pathname == `/projects`
										? selected
										: notSelected
								}>
								Projects
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to={'/contact'}>
							<span
								className={
									location.pathname == `/contact`
										? selected
										: notSelected
								}>
								Contact
							</span>
						</NavLink>
					</li>
				</div>
			</ul>
		</header>
	);
};
