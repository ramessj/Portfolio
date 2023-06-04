/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring } from 'framer-motion';

export const Parallax = ({ sections }) => {
	const { scrollYProgress } = useScroll({
		offset: ["0.1", "end end"]
	});
	const scaleX = useSpring(scrollYProgress , {
		stiffness: 3,
		damping: 12,
		restDelta: 31,

	});

	return (
		<>
			{sections.map((section) => (
				<section key={sections.indexOf(section) + 1}>{section}</section>
			))}
			<motion.div className="progress" style={{ scaleX }} />
		</>
	);
};
