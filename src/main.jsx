import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.js';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
