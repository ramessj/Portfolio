/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BouncingBall } from './components/BouncingBall';
import { Typewriter } from './components/Typewriter';
import { motion } from 'framer-motion';

import arrow from '../../../assets/icons/arrow.png';

export const Home1 = () => {
	const myRef = useRef();

	
	const navigate = useNavigate()

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if(entry.isIntersecting){
				navigate('')
				
			}
		})
	
		observer.observe(myRef.current)
	}, []);
	return (
		<>
			<div className="home1container" ref={myRef}>
				<div className="home1left"></div>
				<div className="home1right">
					<div>
						<div className="helloh2">
							<h2 className='helloh2text'>Hello</h2>
							<BouncingBall />
						</div>
					</div>

					<div className="iamdiv">
						<h2 className="iamh2white">I am </h2>
						<Typewriter />
					</div>
					<div>
						<h2 className='home1Ramiro'>RAMIRO</h2>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 3, duration: 5 },
					}}
					className="home1rrr">
					<motion.img
						initial={{ y: 0 }}
						animate={{
							y: [0, 25, 0],
							transition: { duration: 2, repeat: Infinity },
						}}
						className="arrowdown"
						src={arrow}
						alt="scroll down"
					/>
				</motion.div>
			</div>
		</>
	);
};
