import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { isMobile } from 'react-device-detect';

import { projects } from '../../../assets/projectsImgs/projectsData';

import gh from '../../../assets/icons/githubMini.png';
import globe from '../../../assets/icons/globeMini.png';

import { useTranslation } from 'react-i18next';

import './projectshowcase.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ProjectShowcase = () => {
	const { i18n } = useTranslation();

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
				{shuffledArray.map(
					({
						img,
						title,
						description,
						descriptionEs,
						links,
						techs,
					}) => (
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
											<hr
												style={{
													marginRight: '20%',
													marginLeft: '20%',
												}}
											/>
											<br />
											{i18n.language == 'en' ? (
												<h4>{description}</h4>
											) : (
												<h4>{descriptionEs}</h4>
											)}

											<hr />
										</div>
										<div className='projectTechsContainer'>
											{techs.map((tech) => (
												<div
													key={tech}
													className='projectTechPill'>
													{tech}
												</div>
											))}
										</div>
										<hr />

										<div className='projectLinks'>
											<a
												href={links.live}
												target='_blank'
												rel='noreferrer'>
												<img
													src={globe}
													alt='live app'
													className='miniLogo'
												/>{' '}
												Live App
											</a>
											<a
												href={links.repo}
												target='_blank'
												rel='noreferrer'>
												<img
													src={gh}
													alt='source code'
													className='miniLogo'
												/>{' '}
												Source Code
											</a>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</>
	);
};
