import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './typewriter.css';

export const Typewriter = () => {
	const [text] = useTypewriter({
		words: [
			'Web Developer',
			'Programmer',
			'Tech Enthusiast',
			'Gamer',
			'Hardworker',
		],
		loop: 0,
		typeSpeed: 75,
		deleteSpeed: 50,
		delaySpeed: 1200,
	});

	return (
		<h3 className='iamtypewriter'>
			<span className='writer'>a&nbsp; {text}</span>
			<Cursor cursorColor='#FFF' />
		</h3>
	);
};
