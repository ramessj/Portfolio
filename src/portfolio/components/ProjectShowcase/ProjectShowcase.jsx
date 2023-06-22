import { useMemo } from 'react';
import Carousel from 'nuka-carousel';

import { projects } from './projectsData';

import './projectshowcase.css';

export const ProjectShowcase = () => {
	const shuffledArray = useMemo(() => {
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}

			return array;
		}

		return shuffleArray(projects);
	}, []);

	const onToggleImg = (e) => {
		if (e.target.style.height >= '88%') {
			e.target.style = 'height: 33%';
		} else {
			e.target.style = 'height: 88%';
		}
	};

	return (
		<>
			<Carousel wrapAround  style={{maxWidth: '80vw', padding: '2rem'}}>
				{shuffledArray.map(({ img, title, description, links }) => (
					<div className='projectShown' key={title}>
						<div className='projectImg' onClick={onToggleImg}>
							<div className='imgContainer'>
								<img
									src={img}
									alt={title}
									className='projectImgItem'
								/>
							</div>
						</div>
						<div className='projectInfo'>
							<div>
								{title}, {description}, {links.repo}
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
};
