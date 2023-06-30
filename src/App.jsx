import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import AnimatedCursor from 'react-animated-cursor';
import { Header, HomePage } from './portfolio';
import './index.css';

export const App = () => {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path='/home' element={<HomePage />} />

				<Route path='/*' element={<Navigate to={'/home'} />} />
			</Routes>

			{!isMobile && (
				<AnimatedCursor
					innerSize={18}
					outerSize={6}
					color='255, 195, 120'
					outerScale={2}
					innerScale={0.85}
					innerStyle={{
						backgroundColor: '#FFaa',
						boxShadow: '0px 0px 0.2rem white',
					}}
					outerStyle={{
						backgroundColor: '#ffaa55',
						boxShadow: '0px 0px 0.8rem white',
					}}
					trailingSpeed={1}
					showSystemCursor={false}
					clickables={[
						'a',
						'input[type="text"]',
						'input[type="email"]',
						'input[type="number"]',
						'input[type="submit"]',
						'input[type="image"]',
						'input[type="checkbox"]',
						'label[for]',
						'select',
						'textarea',
						'button',
						'.link',
						'.imgDragContainer',
						'.techContainer',
						'.swiper-button-next',
						'.swiper-button-prev',
					]}
				/>
			)}
		</HashRouter>
	);
};
