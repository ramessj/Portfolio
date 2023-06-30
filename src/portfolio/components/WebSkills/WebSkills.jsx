import { useState } from 'react';
import { motion } from 'framer-motion';

import techs from '../../../assets/webSkills';
import './webskills.css';

export const WebSkills = () => {
	const [techType, setTechType] = useState('front');

	let techsData = techs[techType];

	const setTech = (e) => {
		const data = e.target.getAttribute('data');
		if (techType != data) {
			setTechType(data);
			techsData = techs[techType];
		}
	};

	return (
		<>
			<div className='webSkillsContainer'>
				<div className='techTypeButtons'>
					<button
						className={`techTypeButton  ${
							techType == 'front' ? 'activeTech' : ''
						}`}
						onClick={setTech}
						data='front'>
						Front-End
					</button>
					<button
						className={`techTypeButton  ${
							techType == 'back' ? 'activeTech' : ''
						}`}
						onClick={setTech}
						data='back'>
						Back-End
					</button>
					<button
						className={`techTypeButton  ${
							techType == 'tools' ? 'activeTech' : ''
						}`}
						onClick={setTech}
						data='tools'>
						Tools
					</button>
				</div>

				<div className='technologies'>
					{techsData.map((tech) => (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='techContainer'
							key={tech.name}>
							{/* <div className='tech'> */}
							<img
								src={tech.color}
								alt={tech.name}
								className='tech techLogo'
							/>
							{/* </div> */}
							<div className='techName'>{tech.name}</div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};
