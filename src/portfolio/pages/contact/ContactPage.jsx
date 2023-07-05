/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines } from '../../components';
import { motion } from 'framer-motion';

import { useForm, ValidationError } from '@formspree/react';
import './contactpage.css';

export const ContactPage = () => {
	const [state, handleSubmit] = useForm('xvojopwy');

	const [msgSent, setmsgSent] = useState(false);

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

	useEffect(() => {
		if (state.succeeded) {
			setmsgSent(true);
		}
	}, [state]);

	return (
		<>
			<motion.div
				ref={myRef}
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { delay: 0.15, duration: 0.75 },
				}}
				className='contactContainer'>
				<div className='contactLeft'>
					<div className='contactTitle'>
						<h2 className='text-primary'>Contact Me!</h2>
						<Lines />
					</div>

					<div className='contactBody'>
						<p>
							My inbox is always open. Whether you have a question
							or project, or just want to say hi, i&apos;ll try my
							best to get back to you!
						</p>
					</div>
				</div>
				{msgSent == true ? (
					<p>Mensaje enviado, gracias por comunicarte</p>
				) : (
					<form onSubmit={handleSubmit} className='contactForm'>
						<div className='formField'>
							<label htmlFor='email'>Email Address</label>
							<input id='email' type='email' name='email' />
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>

						<div className='formField'>
							<textarea id='message' name='message' required />
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
						</div>
						<button type='submit' disabled={state.submitting}>
							Enviar
						</button>
					</form>
				)}
			</motion.div>
		</>
	);
};
