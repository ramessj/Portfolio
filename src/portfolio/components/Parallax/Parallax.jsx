/* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';

import './parallax.css';

export const Parallax = ({ sections }) => {

	return (
		<>
			{sections.map((section) => (
				<div
					className='sectionWrapper container'
					key={sections.indexOf(section) + 1}
					id={section.props.id}>
					<section >
						{section}
					</section>
				</div>
			))}
		</>
	);
};
