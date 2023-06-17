/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useDragControls } from 'framer-motion';
import { Lines } from '../../components/Lines/Lines';

import profile from '/profilepicture.png';
import cv from '/RamiroQuesadaCV.pdf';

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
			<div className="home2container" ref={myRef}>
				<div className="home2left">
					<div className="aboutHead">
						<div className="aboutHeadText">
							<h2>About Me</h2>
						</div>
						<Lines />
					</div>
					<div className="aboutBody">
						<p>
							I&apos;m Ramiro Quesada, a passionate Front-End
							Developer based in Uruguay with 1 year of
							experience. Currently expanding my knowledge to
							become a Full-Stack Developer through project-based
							learning. I enjoy exploring all aspects of Computer
							Science and constantly learning new technologies.
							<br />
							<br /> Let&apos;s connect and bring your ideas to
							life!
						</p>
						<div className="aboutLinks">
							<a
								className="aboutLink"
								href="https://github.com/ramessj"
								target="_blank"
								rel="noreferrer">
								<div>GitHub</div>
							</a>
							<a
								className="aboutLink"
								href="https://www.linkedin.com/in/ramiro-quesada-p%C3%A9rez-5796a3126"
								target="_blank"
								rel="noreferrer">
								<div>LinkedIn</div>
							</a>
						</div>
						<a
							className="aboutLink"
							href={cv}
							download="Ramiro Quesada CV"
							target="_blank"
							rel="noreferrer">
							<button className="aboutCurriculum">
								Download CV
							</button>
						</a>
					</div>
				</div>
				<div className="home2right">
					<motion.div
						className="imgDragContainer"
						initial={{ y: 0, dragListener: false }}
						drag={true}
						dragControls={controls}
						whileDrag={{ scale: 1.2 }}
						dragSnapToOrigin
						animate={{
							y: [0, 25, 0],
							dragListener: true,
							transition: { duration: 6, repeat: Infinity },
						}}
						style={{ touchAction: 'none' }}>
						<motion.img
							className="profileImg"
							src={profile}
							alt="Programmer"
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};
