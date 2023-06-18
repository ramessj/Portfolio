/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines } from '../../components/';
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
			<div ref={myRef} className="projectsContainer">
				<div className='projectTitle'>  
				<h2>My Latests Projects</h2>
				<Lines />

				</div>
				<div className="cardsContainer">
					{/* <ProjectShowcase /> */}
				</div>
			</div>
		</>
	);
};
