import { motion } from 'framer-motion';

export const BouncingBall = () => {
	return (
		<motion.span
			className="hellodot"
			style={{
				background: '#FFF',
				borderRadius: '50%',
				marginLeft: '1.5rem',
				marginRight: '1rem',
				alignSelf: 'end',
			}}
			animate={{
				y: ['10%', '-160%', '-170%', '-160%', '10%'],
				scaleY: [1, 1.1, 1.1, 1.1, 1],
				scaleX: [1.5, 1.2, 1, 1.2, 1.5],
			}}
			transition={{
				repeat: Infinity,
				duration: 1,
			}}></motion.span>
	);
};
