import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../portfolio/HomePage';
import { Header } from '../portfolio/components';

export const AppRouter = () => {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/home" element={<HomePage />} />

				<Route path="/*" element={<Navigate to={'/home'} />} />
			</Routes>
		</>
	);
};
