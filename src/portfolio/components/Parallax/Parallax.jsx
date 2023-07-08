/* eslint-disable react/prop-types */
import './parallax.css';
import ReactFullpage from '@fullpage/react-fullpage';
export const Parallax = ({ sections }) => {
	return (
		<>
			<ReactFullpage
				debug
				menu={'#menu-links'}
				licenseKey={''}
				anchors={['home', 'about', 'skills', 'projects', 'contact']}
				scrollingSpeed={750}
				recordHistory
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							{sections.map((section) => (
								<section
									className='section container'
									key={sections.indexOf(section) + 1}
									id={sections.indexOf(section) + 1000}>
									{section}
								</section>
							))}
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</>
	);
};
