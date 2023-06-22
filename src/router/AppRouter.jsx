import { Navigate, Route, Routes } from 'react-router-dom';

import { Header, HomePage } from '../portfolio';

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
