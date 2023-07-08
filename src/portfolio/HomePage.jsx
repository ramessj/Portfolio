import { Parallax } from './components';

import {
	Home1,
	AboutPage,
	SkillsPage,
	ProjectsPage,
	ContactPage,
} from './pages';

const homeSections = [
	<Home1 key={0} id='home' />,
	<AboutPage key={1} id='about' />,
	<SkillsPage key={2} id='skills' />,
	<ProjectsPage key={3} id='projects' />,
	<ContactPage key={4} id='contact' />,
];

export const HomePage = () => {
	return (
		<>
			<Parallax sections={homeSections} />
		</>
	);
};
