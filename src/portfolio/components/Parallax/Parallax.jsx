/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import './parallax.css';

export const Parallax = ({ sections }) => {
	const { scrollYProgress } = useScroll({
		offset: ['0.1', 'end end'],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 50,
	});

	const backgroundColor = useTransform(
		scrollYProgress,
		[0.1, 1],
		['#fffbda', '#ffe600']
	);

	const variants = {
		visible: { opacity: 1, scale: 0.9},
		hidden: { opacity: 0, scale: 0 },
	};

	return (
		<>
			{sections.map((section) => (
				<section
					id={section.props.id}
					key={sections.indexOf(section) + 1}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{  duration: 1 }}
						variants={variants}>
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
		</>
	);
};
