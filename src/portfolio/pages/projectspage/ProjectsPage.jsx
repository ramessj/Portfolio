/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './projectspage.css'

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
				<h2>Latests Projects</h2>
				<div className="cardsContainer">
					<div className="cardScenario">SS</div>
					<div className="projectCard">1</div>
					<div className="projectCard">2</div>
					
				</div>
			</div>
		</>
	);
};
