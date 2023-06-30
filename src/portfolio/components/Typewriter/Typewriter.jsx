import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './typewriter.css';

export const Typewriter = () => {
	const [text] = useTypewriter({
		words: ['Programmer', 'Web Developer', 'Tech Enthusiast'],
		loop: 0,
		typeSpeed: 75,
		deleteSpeed: 50,
		delaySpeed: 1000,
	});

	return (
		<h3 className="iamtypewriter">
			<span className="writer">a&nbsp; {text}</span>
			<Cursor cursorColor="#FFF" />
		</h3>
	);
};
