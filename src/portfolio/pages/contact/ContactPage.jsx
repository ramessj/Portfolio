/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines } from '../../components';

import './contactpage.css';

export const ContactPage = () => {
	const myRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				navigate('#contact');
			}
		});

		observer.observe(myRef.current);
	}, []);

	return (
		<>
			<div className='contactContainer'>
				<div className='contactTitle'>
					<h2 className='text-primary' ref={myRef}>
						Contact Me!
					</h2>
					<Lines />
				</div>

				<div className='contactBody'>
					<p>
						My inbox is always open. Whether you have a question or
						project, or just want to say hi, i&apos;ll try my best
						to get back to you!
					</p>
					<button className='btn btn-primary'>Get in touch</button>
				</div>
			</div>
		</>
	);
};
