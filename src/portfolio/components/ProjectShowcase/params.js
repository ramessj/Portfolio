import { isMobile } from 'react-device-detect';


export const params = {
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
				height: 20%;
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
}