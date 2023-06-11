import { motion } from 'framer-motion';

export const BouncingBall = () => {
	return (
		<motion.span
			className="hellodot"
			style={{
				background: '#FFF',
				borderRadius: '50%',
				marginLeft: '1rem',
				marginRight: '1rem',
				alignSelf: 'end',
			}}
			animate={{
				y: ['-180%', '-260%', '-270%', '-260%', '-180%'],
				scaleY: [1, 1.1, 1.1, 1.1, 1],
				scaleX: [1.25, 1.05, 1, 1.05, 1.25],
			}}
			transition={{
				repeat: Infinity,
				duration: 1,
			}}></motion.span>
	);
};
