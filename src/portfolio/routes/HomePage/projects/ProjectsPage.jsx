/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectsPage = () => {
	const myRef = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if(entry.isIntersecting){
				navigate('#projects')
				
			}
		})
	
		observer.observe(myRef.current)
	}, []);
	


	return (
		<>
		<div ref={myRef}>

			<h1>Projects</h1>
		</div>
		</>
	);
};
