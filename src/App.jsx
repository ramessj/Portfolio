import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';


export const App = () => {
	return (
		<HashRouter>
			<AppRouter />

			<AnimatedCursor
			innerSize={14}
			outerSize={900}
			color="193, 11, 111"
			innerScale={1.3}
			trailingSpeed={18}
			showSystemCursor={false}
			outerStyle={{
				pointerEvents: 'none',
				inset: '-1px',
				background: `radial-gradient(800px circle,rgba(255,255,255,.06), transparent 40%)`,
			}}
			clickables={[
				'a',
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				'label[for]',
				'select',
				'textarea',
				'button',
				'.link',
			]}
		/>
		</HashRouter>
	);
};
