/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useDragControls } from 'framer-motion';
import { Lines } from '../../components';

import profile from '/profilepicture.png';
import cv from '/RamiroQuesadaCV.pdf';

import linkedin from '../../../assets/icons/linkedinSmall.png'
import github from '../../../assets/icons/githubSmall.png'

import './aboutpage.css';

export const AboutPage = () => {
	const myRef = useRef();

	const controls = useDragControls();

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
							<h2>About Me</h2>
						</div>
						<Lines />
					</div>
					<div className='aboutBody'>
						<p>
							Full Stack Developer based in Uruguay with more than
							1 year of experience in the field of Computer
							Sciences. Constantly learning and expanding my
							knowledge through the development of new projects
							<br />
							<br /> Let&apos;s connect and bring your ideas to
							life!
						</p>
						<div className='aboutButtons'>
							<div className='aboutLinks'>
								<a
									className='aboutLink'
									href='https://github.com/ramiroquesada'
									target='_blank'
									rel='noreferrer'>
									<img
										src={github}
										alt='github'
										className='networkLogo'

									/>
								</a>
								<a
									className='aboutLink'
									href='https://www.linkedin.com/in/ramiro-quesada'
									target='_blank'
									rel='noreferrer'>
									<img
										src={linkedin}
										alt='LinkedIn'
										className='networkLogo'
									/>
								</a>
							</div>
							<a
								className='aboutLink'
								href={cv}
								download='Ramiro Quesada CV'
								target='_blank'
								rel='noreferrer'>
								<button className='aboutCurriculum'>
									Download CV
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='home2right'>
					<motion.div
						className='imgDragContainer'
						initial={{ dragListener: false }}
						drag={true}
						dragControls={controls}
						whileDrag={{ scale: 1.2 }}
						dragSnapToOrigin
						animate={{
							dragListener: true,
						}}
						style={{ touchAction: 'none' }}>
						<motion.img
							className='profileImg'
							src={profile}
							alt='Programmer'
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};
