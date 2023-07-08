import { motion } from 'framer-motion';
import arrow from '../../../assets/icons/arrow.png';

export const DownArrow = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: { delay: 2, duration: 5 },
			}}
			className='home1rrr'>
			<motion.img
				initial={{ y: 0 }}
				animate={{
					y: [0, 25, 0],
					transition: { duration: 2, repeat: Infinity },
				}}
				className='arrowdown'
				src={arrow}
				alt='scroll down'
			/>
		</motion.div>
	);
};
