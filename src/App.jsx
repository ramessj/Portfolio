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
					outerSize={15}
					color="255, 255, 165"
					innerScale={0}
					trailingSpeed={1}
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
					]}
				/>
			)}
		</HashRouter>
	);
};
