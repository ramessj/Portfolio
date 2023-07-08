import { Lines, WebSkills } from '../../components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import './skillspage.css';

export const SkillsPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className='home3container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.15, duration: 0.75 },
					}}
					className='home3left'>
					<div className='skillsHead'>
						<div className='skillsHeadText'>
							<h2>{t('Skills')}</h2>
						</div>
						<Lines />
					</div>
					<div className='skillsBody'>
						<p>{t('SkillsBody')}</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.25, duration: 1 },
					}}
					className='home3right'>
					<WebSkills />
				</motion.div>
			</div>
		</>
	);
};
