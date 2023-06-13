import { Lines } from '../../components/Lines/Lines';

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
					<div className="skillsBody"></div>
				</div>
				<div className="home3right">
					<div className="technologies"></div>
				</div>
			</div>
		</>
	);
};
