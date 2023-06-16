import { register } from 'swiper/element/bundle';
import { isMobile } from 'react-device-detect';
import './projectshowcase.css';

const projects = [
	{
		title: 'Memory Game',
		img: 'http://img.png',
		description: 'a description',
		links: { repo: 'http://1.com', live: 'http://2.com' },
	},
	{
		title: 'Journal ',
		img: 'http://imgjournal.png',
		description: 'a description for journal',
		links: { repo: 'http://11.com', live: 'http://22.com' },
	},
];

register();
export const ProjectShowcase = () => {
	

	return (
		<>
			<swiper-container
				loop={true}
				pagination={true}
				navigation={!isMobile}
				paginationClickable={true}
				style={{height: '100%'}}>
				{projects.map(({ img, title, description, links }) => (
					<swiper-slide
						key={title}
						style={{ display: 'flex', justifyContent: 'center' }}>
						<div className="projectShown">
							<div className="projectImg">{img}</div>
							<div className="projectInfo">
								{title}, {description}, {links.repo}
							</div>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
		</>
	);
};
