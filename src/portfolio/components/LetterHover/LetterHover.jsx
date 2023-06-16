/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export const LetterHover = ({ letter }) => {
	return (
		<motion.h2
			whileHover={{
				scaleY: [1, 1.2, 1.35, 1.2, 1.1, 1,  0.9, 1],
				scaleX: [1, 0.8, 1],
				transition: { duration: 0.7, repeat: 'Infinity' },
			}}>
			{letter}
		</motion.h2>
	);
};
