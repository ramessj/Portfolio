import { Navigate, Route, Routes } from 'react-router-dom';

import { Header, HomePage } from './portfolio';

import './index.css';

export const App = () => {
	return (
		<>
			<Header />
			<main className='container-fluid mainfh'>
				<Routes>
					<Route path='/' element={<HomePage />} />

					<Route path='*' element={<Navigate to={'/'} />} />
				</Routes>
			</main>
		</>
	);
};
