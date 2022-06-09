import { Routes, Route } from 'react-router-dom';
import { Home, Catalog } from './../pages';
export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/catalog' element={<Catalog />} />
		</Routes>
	);
};
