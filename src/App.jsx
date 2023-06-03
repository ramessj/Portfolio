import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';

export const App = () => {
	return (
		<HashRouter>
			<AppRouter />
		</HashRouter>
	);
};
