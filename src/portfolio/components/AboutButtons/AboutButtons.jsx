import cv from '/RamiroQuesadaCV.pdf';

import linkedin from '../../../assets/icons/linkedinSmall.png';
import github from '../../../assets/icons/githubSmall.png';

import './AboutButtons.css';
import { useTranslation } from 'react-i18next';

export const AboutButtons = () => {
	const { t } = useTranslation();

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
					<button type='button' className='aboutCurriculum'>
						{t('Download CV')}
					</button>
				</a>
			</div>
		</>
	);
};
