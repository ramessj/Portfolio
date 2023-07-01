import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import { App } from './App.jsx';

import './i18n'


ReactDOM.createRoot(document.getElementById('root')).render(
	<Suspense fallback={<div>Loading...</div>}>
		<App />
	</Suspense>
);
