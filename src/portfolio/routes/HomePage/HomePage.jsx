import { Parallax } from "../../components/Parallax/Parallax";

const homeSections = [{
	text: 'home1',
	text2: 'test1'
},
{
	text: 'home2',
	text2: 'test2'
},
{
	text: 'home3',
	text2: 'test3'
}]



export const HomePage = () => {
	return (
		<>
			<Parallax sections={homeSections}/>
		</>
	);
};
