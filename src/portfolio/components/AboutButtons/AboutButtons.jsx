import cv from '/RamiroQuesadaCV.pdf';

import linkedin from '../../../assets/icons/linkedinSmall.png'
import github from '../../../assets/icons/githubSmall.png'

import './AboutButtons.css'

export const AboutButtons = () => {
	return (
		<>
			<div className='aboutLinks'>
				<a
					className='aboutLink'
					href='https://github.com/ramiroquesada'
					target='_blank'
					rel='noreferrer'>
					<img src={github} alt='github' className='networkLogo' />
				</a>
				<a
					className='aboutLink'
					href='https://www.linkedin.com/in/ramiro-quesada'
					target='_blank'
					rel='noreferrer'>
					<img
						src={linkedin}
						alt='LinkedIn'
						className='networkLogo'
					/>
				</a>
			</div>
			<div className='btnDownloadCurriculum'>
				<a
					href={cv}
					download='Ramiro Quesada CV'
					target='_blank'
					rel='noreferrer'>
					<button type='button' className='aboutCurriculum'>Download CV</button>
				</a>
			</div>
		</>
	);
};
