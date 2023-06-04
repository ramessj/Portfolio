import { Parallax } from '../../components/Parallax/Parallax';


const aboutSections = [{
	text: 'about1',
	text2: 'test1'
},
{
	text: 'about2',
	text2: 'test2'
}
]


export const AboutPage = () => {
	return (
		<>
			<Parallax sections={aboutSections}/>
		</>
	);
};
