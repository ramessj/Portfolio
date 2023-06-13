import { motion } from 'framer-motion';

import './lines.css'

export const Lines = () => {
	return (
		<>
			<div className="lines">
				<motion.span
					initial={{ opacity: 0, x: '-10rem' }}
					whileInView={{
						opacity: 1,
						x: '0rem',
						transition: { type: 'spring', duration: 2.3 },
					}}
					className="topLine"></motion.span>
				<motion.span
					initial={{ opacity: 0, x: '-10rem' }}
					whileInView={{
						opacity: 1,
						x: '0rem',
						transition: { type: 'spring', delay: 0.2, duration: 2 },
					}}
					className="bottomLine"></motion.span>
			</div>
		</>
	);
};
