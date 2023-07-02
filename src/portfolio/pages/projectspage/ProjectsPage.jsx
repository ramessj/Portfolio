/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines, ProjectShowcase } from '../../components/';
import { motion } from 'framer-motion';

import './projectspage.css';

export const ProjectsPage = () => {
	const myRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				navigate('#projects');
			}
		});

		observer.observe(myRef.current);
	}, []);

	return (
		<>
			<div ref={myRef} className='projectsContainer'>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}}
					className='projectTitle'>
					<h2 className='myLatestProjects'>My Latests Projects</h2>
					<Lines />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}} className='showCaseContainer'>
					<ProjectShowcase />
				</motion.div>
			</div>
		</>
	);
};
