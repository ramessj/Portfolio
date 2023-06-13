import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './typewriter.css'

export const Typewriter = () => {
	const [text] = useTypewriter({
		words: ['Programmer.', 'Web Developer.', 'Tech Enthusiast.'],
		loop: 0,
		typeSpeed: 100,
	});

	return (
		<h3 className="iamtypewriter">
			a {''}
			<span className='writer'>{text}</span>
			<Cursor cursorColor="#FFF" />
		</h3>
	);
};
