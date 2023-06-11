import { BouncingBall } from './components/BouncingBall';
import { Typewriter } from './components/Typewriter';

export const Home1 = () => {
	return (
		<>
			<div className="home1container">
				<div className="home1left"></div>
				<div className="home1right">
					<div>
						<div className="helloh2">
							<h2>Hello</h2>
							<BouncingBall />
						</div>
					</div>

					<div className="iamdiv">
						<h2 className="iamh2white">I am </h2>
						<Typewriter />
					</div>
					<div>
						<h2>RAMIRO</h2>
					</div>
				</div>
			</div>
		</>
	);
};
