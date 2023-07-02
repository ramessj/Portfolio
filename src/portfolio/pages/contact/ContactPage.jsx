/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines } from '../../components';
import { motion } from 'framer-motion';

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
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: {delay: 0.15, duration: 0.75 } }}
				className='contactContainer'>
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
			</motion.div>
		</>
	);
};
