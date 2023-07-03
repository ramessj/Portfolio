/* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';

import './parallax.css';

export const Parallax = ({ sections }) => {
	// const variants = {
	// 	visible: { opacity: 1 },
	// 	hidden: { opacity: 0.1 },
	// };

	return (
		<>
			{sections.map((section) => (
				<div
					className='sectionWrapper'
					key={sections.indexOf(section) + 1}>
					<section id={section.props.id} className='container'>
						{section}
					</section>
				</div>
			))}
		</>
	);
};
