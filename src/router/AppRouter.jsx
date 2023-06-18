import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '../portfolio/components';
import { HomePage } from '../portfolio/HomePage';

export const AppRouter = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/home" element={<HomePage />} />

				<Route path="/*" element={<Navigate to={'/home'} />} />
			</Routes>
		</>
	);
};
