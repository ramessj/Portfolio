/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring } from 'framer-motion';

export const Parallax = ({ sections }) => {
	const { scrollYProgress } = useScroll({
		offset: ['0.1', 'end end'],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 3,
		damping: 12,
		restDelta: 31,
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			animate={{ x: [-300, 100, -25, 0] }}
			transition={{ duration: 0.8 }}>
			{sections.map((section) => (
				<section key={sections.indexOf(section) + 1}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.25, duration: 1.25 }}>
						{section}
					</motion.div>
				</section>
			))}

			{sections.length > 1 && (
				<motion.div className="progress" style={{ scaleX }} />
			)}
		</motion.div>
	);
};
