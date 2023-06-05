import { Parallax } from '../../components/Parallax/Parallax';
import { About1 } from './About1';
import { About2 } from './About2';


const aboutSections = [<About1 key={0} />, <About2 key={1} />]


export const AboutPage = () => {
	return (
		<>
			<Parallax sections={aboutSections}/>
		</>
	);
};
