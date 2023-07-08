import { Lines, ProfilePictureDrag, AboutButtons } from '../../components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import './aboutpage.css';

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
								data-tooltip-content='Autodidact'>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-book-open-reader'></i>
								</div>
							</div>

							<div
								className='hex'
								data-tooltip-id='comms'
								data-tooltip-content='Communication Skills'>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-comment-dots'></i>
								</div>
							</div>
							<div
								className='hex'
								data-tooltip-id='problem'
								data-tooltip-content='Problem solver'>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-lightbulb'></i>
								</div>
							</div>
							<div
								className='hex'
								data-tooltip-id='teamwork'
								data-tooltip-content='Team Player'>
								<div className='hexTextContainer'>
									<i className='fa-solid fa-people-group'></i>
								</div>
							</div>
						</div>
						<Tooltip
							id='autodidact'
							place='bottom'
							style={{
								marginTop: '0.5rem',
								fontWeight: 600,
								fontSize: '1rem',
								background: 'black',
								
							}}
						/>
						<Tooltip
							id='comms'
							place='bottom'
							style={{
								marginTop: '0.5rem',
								fontWeight: 600,
								fontSize: '1rem',
								background: 'black',
							}}
						/>
						<Tooltip
							id='problem'
							place='bottom'
							style={{
								marginTop: '0.5rem',
								fontWeight: 600,
								fontSize: '1rem',
								background: 'black',
							}}
						/>
						<Tooltip
							id='teamwork'
							place='bottom'
							style={{
								marginTop: '0.5rem',
								fontWeight: 600,
								fontSize: '1rem',
								background: 'black',
							}}
						/>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};
