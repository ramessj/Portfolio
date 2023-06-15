import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';
import AnimatedCursor from 'react-animated-cursor';
import { isMobile } from 'react-device-detect';
import './index.css';

export const App = () => {
	return (
		<HashRouter>
			<AppRouter />

			{!isMobile && (
				<AnimatedCursor
					innerSize={20}
					color="250, 255, 100"
					innerScale={0.5}
					trailingSpeed={0}
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
						'.imgDragContainer'
					]}
				/>
			)}
		</HashRouter>
	);
};
