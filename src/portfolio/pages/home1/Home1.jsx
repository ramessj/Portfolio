/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LetterHover, Typewriter } from '../../components';

import arrow from '../../../assets/icons/arrow.png';

import './home1.css';

export const Home1 = () => {
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
				<div className='home1main'>
					<div>
						<div className='helloh2'>
							<h2 className='helloh2text'>
								Hello<span className='hellocoma'>,</span>
							</h2>
						</div>
					</div>

					<div className='iamdiv'>
						<div className='iamh3container'>
							<h3 className='iamh2white'>I am </h3>
						</div>
						<div className='iamh3container'>
							<Typewriter />
						</div>
					</div>
					<div>
						<div className='home1Ramiro'>
							<LetterHover letter={'R'} />
							<LetterHover letter={'A'} />
							<LetterHover letter={'M'} />
							<LetterHover letter={'I'} />
							<LetterHover letter={'R'} />
							<LetterHover letter={'O'} />
						</div>
						<div className='home1Ramiro'>
							<LetterHover letter={'Q'} />
							<LetterHover letter={'U'} />
							<LetterHover letter={'E'} />
							<LetterHover letter={'S'} />
							<LetterHover letter={'A'} />
							<LetterHover letter={'D'} />
							<LetterHover letter={'A'} />
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 2, duration: 5 },
					}}
					className='home1rrr'>
					<motion.img
						initial={{ y: 0 }}
						animate={{
							y: [0, 25, 0],
							transition: { duration: 2, repeat: Infinity },
						}}
						className='arrowdown'
						src={arrow}
						alt='scroll down'
					/>
				</motion.div>
			</div>
		</>
	);
};
