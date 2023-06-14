import { Lines } from '../../components/Lines/Lines';
import { WebSkills } from './components/WebSkills';

export const Home3 = () => {
	return (
		<>
			<div className="home3container">
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
