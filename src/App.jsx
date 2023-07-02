import { Navigate, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import AnimatedCursor from 'react-animated-cursor';
import { Header, HomePage } from './portfolio';

import './index.css';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />

					<Route path='*' element={<Navigate to={'/'} />} />
				</Routes>
			</main>

			{!isMobile && (
				<AnimatedCursor
					innerSize={16}
					outerSize={3}
					outerStyle={{ backgroundColor: 'red' }}
					innerScale={0.9}
					outerScale={6}
					innerStyle={{
						backgroundColor: 'yellow',
						boxShadow: '0px 0px 0.5rem white',
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
					<div className='bgLighterEffect'></div>
		</>
	);
};
