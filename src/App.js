import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './routes/home/Home';

const Navigation = () => {
	return (
		<>
			<div>
				<h1>I am the navigation bar</h1>
			</div>
			<Outlet />
		</>
	);
};

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
