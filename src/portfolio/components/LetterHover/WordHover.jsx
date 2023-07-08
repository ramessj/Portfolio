/* eslint-disable react/prop-types */
import { LetterHover } from './LetterHover';
import { v4 as uuidv4 } from 'uuid';

import './WordHover.css';

export const WordHover = ({ words }) => {
	const wordsLetters = words.map((word) => word.split(''));

	return (
		<>
			{wordsLetters.map((word) => (
				<div className='home1Ramiro' key={uuidv4()}>
					{word.map((letter) => (
						<LetterHover letter={letter} key={uuidv4()} />
					))}
				</div>
			))}
		</>
	);
};
