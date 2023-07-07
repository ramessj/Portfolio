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
				//fullpage options
				licenseKey={'YOUR_KEY_HERE'}
				scrollingSpeed={750} /* Options here */
				render={() => {
					return (
						<ReactFullpage.Wrapper>
							{sections.map((section) => (
								// <div
								// 	className='section sectionWrapper container'
								// 	key={sections.indexOf(section) + 1}
								// 	id={section.props.id}>

								// </div>
								<section className='section container' key={sections.indexOf(section) + 1} id={section.props.id}>
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
