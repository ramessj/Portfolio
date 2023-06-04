/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const Parallax = ({ sections }) => {
	const { scrollYProgress } = useScroll({
		offset: ['0.1', 'end end'],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 300,
		restDelta: 0.5,
	});

	const backgroundColor = useTransform(
		scrollYProgress,
		[0.1, 1],
		['#fffbda', '#ffe600']
	);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{sections.map((section) => (
				<section key={sections.indexOf(section) + 1}>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}>
						{section}
					</motion.div>
				</section>
			))}

			{sections.length > 1 && (
				<motion.div
					className="progress"
					style={{ scaleX, backgroundColor }}
				/>
			)}
		</motion.div>
	);
};
