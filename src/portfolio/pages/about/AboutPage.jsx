import { Lines, ProfilePictureDrag, AboutButtons } from '../../components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

					{/* <div className='aboutSoftSkills'> */}
					<div className='softSkillHex'>
						<div className='containerHex'>
							<div className='hex'>
								<div className='hexTextContainer'>hola</div>
							</div>
							<div className='hex'>
								<div className='hexTextContainer'>hola</div>
							</div>
							<div className='hex'>
								<div className='hexTextContainer'>hola</div>
							</div>
							<div className='hex'>
								<div className='hexTextContainer'>hola</div>
							</div>
						</div>
					</div>
					{/* </div> */}
				</motion.div>
			</motion.div>
		</>
	);
};
