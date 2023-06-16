/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './projectspage.css';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

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
				<h2>My Latests Projects</h2>
				<div className="cardsContainer">

					<ProjectShowcase />



				</div>
			</div>
		</>
	);
};
