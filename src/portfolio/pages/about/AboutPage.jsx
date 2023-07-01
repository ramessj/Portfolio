/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines, ProfilePictureDrag, AboutButtons } from '../../components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './aboutpage.css';

export const AboutPage = () => {
	const myRef = useRef();
	const { t } = useTranslation();

	const navigate = useNavigate();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				navigate('#about');
			}
		});

		observer.observe(myRef.current);
	}, []);

	return (
		<>
			<div className='home2container' ref={myRef}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}}
					className='home2left'>
					<div className='aboutHead'>
						<div className='aboutHeadText'>
							<h2>{t('About Me')}</h2>
						</div>
						<Lines />
					</div>
					<div className='aboutBody'>
						<p>{t('aboutP')}</p>
						<div className='aboutButtons'>
							<AboutButtons />
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.1, duration: 0.75 },
					}}
					className='home2right'>
					<ProfilePictureDrag />
				</motion.div>
			</div>
		</>
	);
};
