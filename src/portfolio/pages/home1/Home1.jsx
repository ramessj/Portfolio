/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter, WordHover, DownArrow } from '../../components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './home1.css';

export const Home1 = () => {

	const { t } = useTranslation();

	const myRef = useRef();

	const navigate = useNavigate();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				navigate('');
			}
		});

		observer.observe(myRef.current);
	}, []);
	return (
		<>
			<div className='home1container' ref={myRef}>
				<motion.div
				initial={{opacity: 0, scale: 0.7}}
				whileInView={{opacity: 1, scale: 1, transition: {delay: 0.27, duration: 0.7} }}
				className='home1main'>
					<div className='helloh2'>
						<h2 className='helloh2text'>
							{t("Hello")}<span className='hellocoma'>,</span>
						</h2>
					</div>

					<div className='iamdiv'>
						<div className='iamh3container'>
							<h3 className='iamh2white'>{t("I am")}</h3>
						</div>
						<div className='iamh3container'>
							<Typewriter />
						</div>
					</div>

					<div className='RamiroQuesada'>
						<WordHover words={['RAMIRO', 'QUESADA']} />
					</div>
				</motion.div>

				<DownArrow />
			</div>
		</>
	);
};
