/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
				<h2>My Latests Projects</h2>
				<div className="cardsContainer">
					<ul className="cardsGallery">
						<li className="projectCard"></li>
						<li className="projectCard"></li>
						<li className="projectCard"></li>
						<li className="projectCard"></li>
						<li className="projectCard"></li>
						<li className="projectCard"></li>
					</ul>
				</div>
			</div>
		</>
	);
};
