import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../portfolio/routes/HomePage/HomePage';
import { Header } from '../portfolio/components/Header/Header';

export const AppRouter = () => {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/home" element={<HomePage />} />
			
				<Route path="/*" element={<Navigate to={'/home'}  />} />
			</Routes>
		</>
	);
};
