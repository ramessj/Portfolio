/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);

	return (
		<section>
			<div ref={ref}>
				<h4>Rama</h4>
			</div>
			<motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
		</section>
	);
}

export const Parallax = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const array = [1, 2, 3, 4, 5];

	return (
		<>
			{array.map((image) => (
				<Image key={array.indexOf(image)} id={image} />
			))}
			<motion.div className="progress" style={{ scaleX }} />
		</>
	);
};
