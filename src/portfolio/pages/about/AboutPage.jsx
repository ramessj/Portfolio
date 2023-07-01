/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines, ProfilePictureDrag, AboutButtons } from '../../components';
import { useTranslation } from 'react-i18next';

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
				<div className='home2left'>
					<div className='aboutHead'>
						<div className='aboutHeadText'>
							<h2>{t('About Me')}</h2>
						</div>
						<Lines />
					</div>
					<div className='aboutBody'>
						{/* <p>
							Full Stack Developer based in Uruguay with more than
							1 year of experience in the field of Computer
							Sciences. Constantly learning and expanding my
							knowledge through the development of new projects
							<br />
							<br /> Let&apos;s connect and bring your ideas to
							life!
						</p> */}
						<p>{t('aboutP')}</p>
						<div className='aboutButtons'>
							<AboutButtons />
						</div>
					</div>
				</div>
				<div className='home2right'>
					<ProfilePictureDrag />
				</div>
			</div>
		</>
	);
};
