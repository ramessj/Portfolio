import { Parallax } from '../../components/Parallax/Parallax';
import { Home1 } from './Home1';
import { Home2 } from './Home2';
import { Home3 } from './Home3';
import { Home4 } from './Home4';

import './homePage.css';

const homeSections = [
	<Home1 key={0} id="home" />,
	<Home2 key={1} id="about" />,
	<Home3 key={2} id="skills" />,
	<Home4 key={3} id="extra" />,
];

export const HomePage = () => {
	return (
		<>
			<Parallax sections={homeSections} />
		</>
	);
};
