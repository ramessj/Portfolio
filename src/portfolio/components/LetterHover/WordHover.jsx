/* eslint-disable react/prop-types */
import { LetterHover } from './LetterHover';

import './WordHover.css'

export const WordHover = ({ words }) => {
	const wordsLetters = words.map((word) => word.split(''));

	return (
		<>
			{wordsLetters.map((word) => (
				<div className='home1Ramiro' key={wordsLetters.indexOf(word)}>
					{word.map((letter) => (
						<LetterHover letter={letter} key={letter} />
					))}
				</div>
			))}
		</>
	);
};
