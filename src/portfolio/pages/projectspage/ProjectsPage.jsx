import { Lines, ProjectShowcase } from '../../components/';
import { motion } from 'framer-motion';

import './projectspage.css';

export const ProjectsPage = () => {
	return (
		<>
			<div className='projectsContainer'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.15, duration: 0.75 },
					}}
					className='projectTitle'>
					<h2 className='myLatestProjects'>My Latests Projects</h2>
					<Lines />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: 0.25, duration: 1 },
					}}
					className='showCaseContainer'>
					<ProjectShowcase />
				</motion.div>
			</div>
		</>
	);
};
