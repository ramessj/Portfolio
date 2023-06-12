import { motion } from 'framer-motion';

export const BouncingBall = () => {
	return (
		<motion.span
			className="hellodot"
			style={{
				background: '#FFF',
				borderRadius: '50%',
				marginLeft: '0.5rem',
				marginRight: '1rem',
				alignSelf: 'end',
			}}
			animate={{
				y: ['-50%', '-140%', '-150%', '-140%', '-50%'],
				scaleY: [1, 1.1, 1.1, 1.1, 1],
				scaleX: [1.3, 1.05, 1, 1.05, 1.3],
			}}
			transition={{
				repeat: Infinity,
				duration: 1,
			}}></motion.span>
	);
};
