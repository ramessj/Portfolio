/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export const LetterHover = ({ letter }) => {
	return (
		<motion.h2
			initial={{ scaleY: 1, scaleX: 1 }}
			whileHover={{
				scaleY: [1,  1.2, 1.25, 1.2, 1.1, 1, 1],
				scaleX: [1,  0.9, 0.8, 0.75, 0.8, 0.9, 1, 1],
				transition: { duration: 0.7 },
			}}
				transition={{ type: 'just' }}
			>
			{letter}
		</motion.h2>
	);
};
