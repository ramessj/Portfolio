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
					outerSize={900}
					color="925, 211, 111"
					innerScale={0.7}
					trailingSpeed={18}
					showSystemCursor={false}
					outerStyle={{
						pointerEvents: 'none',
						inset: '-1px',
						background: `radial-gradient(800px circle,rgba(255,255,255,.1), transparent 40%)`,
					}}
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
