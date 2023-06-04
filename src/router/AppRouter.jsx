import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../portfolio/routes/about/AboutPage';
import { ProjectsPage } from '../portfolio/routes/projects/ProjectsPage';
import { ContactPage } from '../portfolio/routes/contact/ContactPage';
import { HomePage } from '../portfolio/routes/HomePage/HomePage';
import { Header } from '../portfolio/components/Header/Header';

export const AppRouter = () => {
	return (
		<>
			<Header></Header>
			{/* <main className="main"> */}
				<Routes>
					<Route path="about" element={<AboutPage />} />
					<Route path="projects" element={<ProjectsPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="/" element={<HomePage />} />

					<Route path="/*" element={<Navigate to={'/'} />} />
				</Routes>
			{/* </main> */}
		</>
	);
};
