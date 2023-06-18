/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines } from '../../components';
import { motion } from 'framer-motion';

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
			<div className='home2container' ref={myRef}>
			<div className='home2right'>
					<motion.div
						className='imgDragContainer'
						initial={{ y: 0, dragListener: false }}
						drag={true}
						whileDrag={{ scale: 1.2 }}
						dragSnapToOrigin
						animate={{
							y: [0, 5, 10, -10, -5, 0],
							dragListener: true,
							transition: { duration: 6, repeat: Infinity },
						}}
						style={{ touchAction: 'none' }}>
						<motion.img className='profileImg' alt='Programmer' />
					</motion.div>
				</div>
			
				<div className='home2left'>
					<div className='aboutHead'>
						<div className='aboutHeadText'>
							<h2>Contact Me</h2>
						</div>
						<Lines />
					</div>
					<div className='aboutBody'>
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
						
					</div>
				</div>
				</div>
		</>
	);
};
