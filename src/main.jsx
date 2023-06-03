import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import AnimatedCursor from 'react-animated-cursor';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<App />

		<AnimatedCursor
			innerSize={14}
			outerSize={900}
			color="193, 11, 111"
			innerScale={1.3}
			trailingSpeed={18}
			showSystemCursor={false}
			outerStyle={{
				pointerEvents: 'none',
				position: 'absolute',
				inset: '-1px',
				background: `radial-gradient(1000px circle,rgba(255,255,255,.06), transparent 40%)`,
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
	</>
);
