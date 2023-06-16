/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lines, WebSkills } from '../../components';

import './skillspage.css'


export const SkillsPage = () => {

	const myRef = useRef()
	const navigate = useNavigate()

useEffect(() => {
	const observer = new IntersectionObserver((entries) => {
		const entry = entries[0]
		if(entry.isIntersecting){
			navigate('#skills')
			
		}
	})

	observer.observe(myRef.current)
}, []);

	return (
		<>

			<div className="home3container" ref={myRef}>
				<div className="home3left">
					<div className="skillsHead">
						<div className="skillsHeadText">
							<h2>Skills</h2>
						</div>
						<Lines />
					</div>
					<div className="skillsBody">
						<p>
							An individual eager to learn and explore new fields
							of life and technology, with good listening skills
							and fast learning abilities.
						</p>
						<div className="interests">
							<p>I&apos;m also interested in learning
							TypeScript, .NET and more JS Frameworks!</p>
						</div>
					</div>
				</div>
				<div className="home3right">
					<WebSkills />
				</div>
			</div>
		</>
	);
};
