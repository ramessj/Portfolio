/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const ContactPage = () => {

	const myRef = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if(entry.isIntersecting){
				navigate('#contact')
				
			}
		})
	
		observer.observe(myRef.current)
	}, []);
	

	return (
		<>
			<div ref={myRef}>
				<h4>CONTACT</h4>
			</div>
		</>
	);
};
