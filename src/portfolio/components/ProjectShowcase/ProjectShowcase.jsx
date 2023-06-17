import { useEffect, useMemo, useRef } from 'react';
import { isMobile } from 'react-device-detect';

import { projects } from '../../../assets/projectsData';

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

		const params = {
			navigation: !isMobile,
			pagination: true,
			loop: true,
			injectStyles: [
				`
          .swiper-button-next,
          .swiper-button-prev {
            color: yellow;
						transition: transform 0.2s linear;
						cursor: none;
          }

					.swiper-button-next:hover,
          .swiper-button-prev:hover {
						transform: scale(1.15);
					}

          .swiper-pagination-bullet{
            width: 20px;
            height: 20px;
            background-color: yellow;
          }

					.swiper-button-next::after,
          .swiper-button-prev::after {
						font-weight: 800;
						pointer-events: none;
					}

					.swiper-initialized{
						height: 99%;
					}

					swiper-slide{
						opacity: 1;
						transition: opacity 0.5s linear;
					}

					swiper-slide:not(.swiper-slide-active){
						opacity: 0;
						transition: opacity 0.5s linear;
					}
      `,
			],
		};

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
