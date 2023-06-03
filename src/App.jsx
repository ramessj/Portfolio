import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';
import './App.css';

export const App = () => {
	return (
		<HashRouter>
			<AppRouter />
		</HashRouter>
	);
};
