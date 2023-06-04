/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ section, id }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref
	});
	const y = useParallax(scrollYProgress, 300);

	return (
		<section>
			<div ref={ref} >
				<img className='imgFnd' src='/01.webp'></img>
				<div>
				{section.text2}, {section.text}
			</div>
			</div>
			<motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
			
		</section>
	);
}

export const Parallax = ( {sections} ) => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 300,
		damping: 30,
		restDelta: 0,
	});

	// const array = [1, 2, 3, 4, 5];

	return (
		<>
			
			{sections.map((section) => (
				<Image key={sections.indexOf(section) + 1} id={sections.indexOf(section) + 1} section={section}/>
			))}
			<motion.div className="progress" style={{ scaleX }} />
		</>
	);
};
