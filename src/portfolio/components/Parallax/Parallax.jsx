/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

import './parallax.css'

export const Parallax = ({ sections }) => {
	const { scrollYProgress } = useScroll({
		offset: ['0.1', 'end end'],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 15,
	});

	const backgroundColor = useTransform(
		scrollYProgress,
		[0.1, 1],
		['#fffbda', '#ffe600']
	);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{sections.map((section) => (
				<section key={sections.indexOf(section) + 1}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						transition={{ type: 'spring', duration: 1.3 }}
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
			<div className="bgLighterEffect"></div>
		</motion.div>
	);
};
