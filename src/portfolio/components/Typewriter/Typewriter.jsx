import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

import './typewriter.css';

export const Typewriter = () => {
	const { t } = useTranslation();

	const [text] = useTypewriter({
		words: [
			t('typewriter1'),
			t('typewriter2'),
			t('typewriter3'),
			t('typewriter4'),
			t('typewriter5'),
		],
		loop: 0,
		typeSpeed: 75,
		deleteSpeed: 50,
		delaySpeed: 1200,
	});

	return (
		<h3 className='iamtypewriter'>
			<span className='writer'>{text}</span>
			<Cursor cursorColor='#FFF' />
		</h3>
	);
};
