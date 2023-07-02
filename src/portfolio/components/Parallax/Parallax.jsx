/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

import './parallax.css';

export const Parallax = ({ sections }) => {
	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0.1 },
	};

	return (
		<>
			{sections.map((section) => (
				<section
					id={section.props.id}
					key={sections.indexOf(section) + 1}>
					<motion.div
						className='container'
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 0.5 }}
						variants={variants}>
						{section}
					</motion.div>
				</section>
			))}
		</>
	);
};
