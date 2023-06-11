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
				// height: '0.5rem'
			}}
			animate={{
				y: ['-50%', '-140%', '-150%', '-140%', '-50%'],
				// y: ['-0.8rem', '-1.36rem', '-1.5rem', '-1.36rem',  '-0.8rem'],
				scaleY: [1, 1.1, 1.1, 1.1, 1],
				scaleX: [1.3, 1.05, 1, 1.05, 1.3],
			}}
			transition={{
				repeat: Infinity,
				duration: 1,
			}}></motion.span>
	);
};
