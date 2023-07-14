import { useEffect, useState } from 'react';
import { Lines } from '../../components';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

import './contactpage.css';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
	const { t } = useTranslation();

	const [state, handleSubmit] = useForm('xvojopwy');

	const [msgSent, setmsgSent] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setmsgSent(true);
		}
	}, [state]);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { delay: 0.15, duration: 0.75 },
				}}
				className='contactContainer'>
				<div className='contactLeft'>
					<div className='contactTitle'>
						<h2>{t('Contact Me')}!</h2>
						<Lines />
					</div>

					<div className='contactBody'>
						<p>
						{t('Inbox')}
						</p>
					</div>
				</div>
				{msgSent == true ? (
					<p className='text-warning'>
						Mensaje enviado, gracias por comunicarte!
					</p>
				) : (
					<form onSubmit={handleSubmit} className='contactForm'>
						<div className='formField'>
							<label htmlFor='email'>{t("Email")}</label>
							<input
								id='email'
								type='email'
								name='email'
								required
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>

						<div className='formField'>
							<label htmlFor='message'>{t("Message")}</label>

							<textarea id='message' name='message' required />
							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
						</div>

						<button
							className='mt-2'
							type='submit'
							disabled={state.submitting}>
							{t("Send")}
						</button>
					</form>
				)}
			</motion.div>
		</>
	);
};
