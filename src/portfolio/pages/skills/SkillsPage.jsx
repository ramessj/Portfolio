/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines, WebSkills } from '../../components';
import { motion } from 'framer-motion';

import './skillspage.css';

export const SkillsPage = () => {
	const myRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				navigate('#skills');
			}
		});

		observer.observe(myRef.current);
	}, []);

	return (
		<>
			<div className='home3container' ref={myRef}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}}
					className='home3left'>
					<div className='skillsHead'>
						<div className='skillsHeadText'>
							<h2>Skills </h2>
						</div>
						<Lines />
					</div>
					<div className='skillsBody'>
						<p>
							An individual eager to learn and explore new fields
							of life and technology, with good listening skills
							and fast learning abilities.
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}}
					className='home3right'>
					<WebSkills />
				</motion.div>
			</div>
		</>
	);
};
