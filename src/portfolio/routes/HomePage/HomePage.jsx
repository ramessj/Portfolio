import { Parallax } from '../../components/Parallax/Parallax';
import { Home1 } from './Home1';
import { Home2 } from './Home2';
import { Home3 } from './Home3';
import { Home4 } from './Home4';

import './homePage.css'

const homeSections = [
	<Home1 key={0} />,
	<Home2 key={1} />,
	<Home3 key={2} />,
	<Home4 key={3} />,
];

export const HomePage = () => {
	return (
		<>
			<Parallax sections={homeSections} />
		</>
	);
};
