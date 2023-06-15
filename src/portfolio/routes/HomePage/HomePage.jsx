import { Parallax } from '../../components/Parallax/Parallax';
import { Home1 } from './Home1';
import { AboutPage} from './about/AboutPage';
import { SkillsPage } from './skills/SkillsPage';
import { ProjectsPage } from './projects/ProjectsPage';
import { ContactPage } from './contact/ContactPage';

import './homePage.css';

const homeSections = [
	<Home1 key={0} id="home" />,
	<AboutPage key={1} id="about" />,
	<SkillsPage key={2} id="skills" />,
	<ProjectsPage key={3} id="projects" />,
	<ContactPage key={4} id="contact" />
];

export const HomePage = () => {
	return (
		<>
			<Parallax sections={homeSections} />
		</>
	);
};
