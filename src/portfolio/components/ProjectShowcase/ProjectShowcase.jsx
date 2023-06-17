import { useEffect, useMemo, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { isMobile } from 'react-device-detect';
import './projectshowcase.css';

const projects = [
	{
		title: 'Memory Game',
		img: 'http://img.png',
		description: 'a description for the game with a valorant theme',
		links: {
			repo: 'https://github.com/ramessj/Memory-Game',
			live: 'https://ramessj.github.io/Memory-Game/',
		},
	},
	{
		title: 'Journal ',
		img: 'http://imgjournal.png',
		description: 'a description for journal',
		links: {
			repo: 'https://github.com/ramessj/Journal-App-React',
			live: 'https://ramessj.github.io/Journal-App-React/',
		},
	},
	{
		title: 'TO-DO App',
		img: 'https://raw.githubusercontent.com/ramessj/To-Do-List/main/todo-full.png',
		description: 'todo app description',
		links: {
			repo: 'https://github.com/ramessj/To-Do-List',
			live: 'https://ramessj.github.io/To-Do-List/',
		},
	},
	{
		title: 'Heroes App',
		img: 'https://raw.githubusercontent.com/ramessj/Heroes-SPA-React/main/screenshot.png',
		description: 'a description for heroes app',
		links: {
			repo: 'https://github.com/ramessj/Heroes-SPA-React',
			live: 'https://ramessj.github.io/Heroes-SPA-React/',
		},
	},
	{
		title: 'Weather App',
		img: 'https://raw.githubusercontent.com/ramessj/Weather-App/main/desktop.png',
		description: 'a weather app',
		links: {
			repo: 'https://github.com/ramessj/Weather-App',
			live: 'https://ramessj.github.io/Weather-App/',
		},
	},
	{
		title: 'Gif Expert',
		img: 'http://imgjournal.png',
		description: 'search gifs',
		links: {
			repo: 'https://github.com/ramessj/Gif-Expert',
			live: 'https://ramessj.github.io/Gif-Expert/',
		},
	},
	{
		title: 'Calendar App',
		img: 'http://imgjournal.png',
		description: 'colaborative calendar app',
		links: {
			repo: 'https://github.com/ramessj/Calendar-React',
			live: 'https://ramessj.github.io/Calendar-React/',
		},
	},
	{
		title: 'Rock Paper Scissors',
		img: 'http://imgjournal.png',
		description: 'a description for the game',
		links: {
			repo: 'https://github.com/ramessj/Rock-Paper-Scissors',
			live: 'https://ramessj.github.io/Rock-Paper-Scissors/',
		},
	},
	{
		title: 'Etch-A-Sketch',
		img: 'http://imgjournal.png',
		description: 'draw and be japi',
		links: {
			repo: 'https://github.com/ramessj/Etch-A-Sketch',
			live: 'https://ramessj.github.io/Etch-A-Sketch/',
		},
	},
];

register();

export const ProjectShowcase = () => {
	const swiperRef = useRef(null);

	const shuffledArray = useMemo(() => {
		function shuffleArray(array) {
			// Recorre el array de atrás hacia adelante
			for (let i = array.length - 1; i > 0; i--) {
				// Genera un índice aleatorio entre 0 y i
				const j = Math.floor(Math.random() * (i + 1));

				// Intercambia el elemento actual con el elemento aleatorio
				[array[i], array[j]] = [array[j], array[i]];
			}

			return array;
		}

		return shuffleArray(projects);
	}, [projects]);

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
