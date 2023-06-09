import { Lines, ProfilePictureDrag, AboutButtons } from '../../components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import './aboutpage.css';

const tooltipStyle = {
	marginTop: '0.5rem',
	fontWeight: 600,
	fontSize: '1rem',
	background: 'black',
	
}

export const AboutPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.15 } }}
				className='home2container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.15, duration: 0.75 },
					}}
					className='home2left'>
					<div className='aboutHead'>
						<div className='aboutHeadText'>
							<h2>{t('About Me')}</h2>
						</div>
						<Lines />
					</div>
					<div className='aboutBody'>
						<p>{t('aboutP')}</p>
						<div className='aboutButtons'>
							<AboutButtons />
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.25, duration: 1 },
					}}
					className='home2right'>
					<ProfilePictureDrag />

					<div className='softSkillHex'>
						<div className='containerHex'>
							<div
								className='hex'
								data-tooltip-id='autodidact'
								data-tooltip-content={t('Autodidact')}
								>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-book-open-reader'></i>
								</div>
							</div>

							<div
								className='hex'
								data-tooltip-id='comms'
								data-tooltip-content={t('Good Communication')}>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-comment-dots'></i>
								</div>
							</div>
							<div
								className='hex'
								data-tooltip-id='problem'
								data-tooltip-content={t('Problem Solver')}>
								<div className='hexTextContainer'>
									<i className="fas fa-puzzle-piece"></i>
								</div>
							</div>
							<div
								className='hex'
								data-tooltip-id='teamwork'
								data-tooltip-content={t('Team Player')}>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-people-group'></i>
								</div>
							</div>
						</div>
						<Tooltip
							id='autodidact'
							place='bottom'
							style={tooltipStyle}
						/>
						<Tooltip
							id='comms'
							place='bottom'
							style={tooltipStyle}
						/>
						<Tooltip
							id='problem'
							place='bottom'
							style={tooltipStyle}
						/>
						<Tooltip
							id='teamwork'
							place='bottom'
							style={tooltipStyle}
						/>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};
