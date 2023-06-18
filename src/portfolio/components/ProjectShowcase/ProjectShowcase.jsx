import { useEffect, useMemo, useRef } from 'react';

import { projects } from './projectsData';

import { params } from './params';

import './projectshowcase.css';

export const ProjectShowcase = () => {
	const swiperRef = useRef(null);

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

	useEffect(() => {
		const swiperContainer = swiperRef.current;

		Object.assign(swiperContainer, params);

		swiperContainer.initialize();
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
			<swiper-container ref={swiperRef} init="false">
				{shuffledArray.map(({ img, title, description, links }) => (
					<swiper-slide
						key={title}
						style={{ display: 'flex', justifyContent: 'center' }}>
						<div className="projectShown">
							<div className="projectImg" onClick={onToggleImg}>
								<div className="imgContainer">
									<img
										src={img}
										alt={title}
										className="projectImgItem"
									/>
								</div>
							</div>
							<div className="projectInfo">
								<div>
									{title}, {description}, {links.repo}
								</div>
							</div>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
		</>
	);
};
