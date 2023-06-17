import techs from '../../../assets/webSkills';
import './webskills.css';

export const WebSkills = () => {
	return (
		<div className="technologies">
			{techs.map((tech) => (
				<div className="techContainer" key={tech.name}>
					<div className="tech">
						<img
							src={tech.color}
							alt={tech.name}
							className="techLogo"
						/>
					</div>
					<div className="techName">{tech.name}</div>
				</div>
			))}
		</div>
	);
};
