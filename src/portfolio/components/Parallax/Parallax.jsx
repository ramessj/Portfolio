/* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';

import './parallax.css';
import ReactFullpage from '@fullpage/react-fullpage';
export const Parallax = ({ sections }) => {
	return (
		<>
			{/* {sections.map((section) => (
				<div
					className='sectionWrapper container'
					key={sections.indexOf(section) + 1}
					id={section.props.id}>
					<section>{section}</section>
				</div>
			))} */}

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
