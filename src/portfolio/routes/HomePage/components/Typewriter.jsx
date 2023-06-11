import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Typewriter = () => {
	const [text] = useTypewriter({
		words: ['Programmer', 'Web Developer', 'Tech Enthusiast'],
		loop: 0,
		typeSpeed: 200,
	});

	return (
		<h3 className="iamtypewriter">
			a {''}
			<span>{text}</span>
			<span>
				<Cursor />
			</span>
		</h3>
	);
};
