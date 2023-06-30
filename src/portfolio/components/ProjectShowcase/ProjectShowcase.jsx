import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { isMobile } from 'react-device-detect';

import { projects } from '../../../assets/projectsImgs/projectsData';

import './projectshowcase.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination]}
				loop
				spaceBetween={1000}
				pagination={isMobile}
				navigation={!isMobile}>
				{shuffledArray.map(({ img, title, description, links }) => (
					<SwiperSlide key={title}>
						<div className='projectShown'>
							<div className='imgContainer'>
								<img
									className='projectImgItem'
									src={img}
									alt={title}
								/>
							</div>

							<div className='projectInfoContainer'>
								<div className='projectInfo'>
									<div className='projectTitleDescriptionContainer'>
										<h3>{title}</h3>
										<h4>{description}</h4>
									</div>
									<div className='projectTechsContainer'>
										<div className='projectTechPill'>
											Tech1
										</div>
										<div className='projectTechPill'>
											Tech2
										</div>
										<div className='projectTechPill'>
											Tech3
										</div>
										<div className='projectTechPill'>
											Tech4
										</div>
									</div>

									<div className='projectLinks'>
										<a href={links.live}>Live</a>
										<a href={links.repo}>Code</a>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
