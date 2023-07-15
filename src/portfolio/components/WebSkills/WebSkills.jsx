import { useState } from 'react';

import techs from '../../../assets/webSkills';
import './webskills.css';
import { useTranslation } from 'react-i18next';

export const WebSkills = () => {
	const { t } = useTranslation();

	const [techType, setTechType] = useState('front');

	const setTech = (e) => {
		const data = e.target.getAttribute('data');
		if (techType != data) {
			setTechType(data);
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
						{t('Tools')}
					</button>
				</div>

				<div
					className={`technologies ${
						techType != 'front' ? 'd-none' : ''
					}`}>
					{techs['front'].map((tech) => (
						<div className='techContainer' key={tech.name}>
							<img
								src={tech.color}
								alt={tech.name}
								className='tech techLogo'
							/>
							<div className='techName'>{tech.name}</div>
						</div>
					))}
				</div>

				<div
					className={`technologies ${
						techType != 'back' ? 'd-none' : ''
					}`}>
					{techs['back'].map((tech) => (
						<div className='techContainer' key={tech.name}>
							<img
								src={tech.color}
								alt={tech.name}
								className='tech techLogo'
							/>

							<div className='techName'>{tech.name}</div>
						</div>
					))}
				</div>

				<div
					className={`technologies ${
						techType != 'tools' ? 'd-none' : ''
					}`}>
					{techs['tools'].map((tech) => (
						<div className='techContainer' key={tech.name}>
							<img
								src={tech.color}
								alt={tech.name}
								className='tech techLogo'
							/>

							<div className='techName'>{tech.name}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
