import { motion } from 'framer-motion';

import './lines.css';

export const Lines = () => {
	const variants = {
		visible: { opacity: 1, x: '0px' },
		hidden: { opacity: 0, x: '-50px' },
	};
	return (
		<div className='lines'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={variants}
				transition={{ type: 'spring', delay: 0.2, duration: 1.2 }}
				className='topLine'></motion.div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={variants}
				transition={{ type: 'spring', duration: 1.4 }}
				className='bottomLine'></motion.div>
		</div>
	);
};
