import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Typewriter, WordHover, DownArrow } from '../../components';

import './home1.css';

export const Home1 = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className='home1container'>
				<motion.div
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { duration: 0.7 },
					}}
					className='home1main'>
					<div className='helloh2'>
						<h2 className='helloh2text'>
							{t('Hello')}
							<span className='hellocoma'>,</span>
						</h2>
					</div>

					<div className='iamdiv'>
						<div className='iamh3container'>
							<h3 className='iamh2white'>{t('I am')}</h3>
						</div>
						<div className='iamh3container'>
							<Typewriter />
						</div>
					</div>

					<div className='RamiroQuesada'>
						<WordHover words={['RAMIRO', 'QUESADA']} />
					</div>
				</motion.div>

				<DownArrow />
			</div>
		</>
	);
};
