import React from 'react';
import Navbar from './Components/Theme/Navbar';
import Footer from './Components/Theme/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Apropos from './Components/Apropos';
import Contact from './Components/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import ListAdmin from './pages/admin/ListAdmin';

import { Routes, Route, Outlet } from 'react-router-dom';
const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/Apropos" element={<Apropos />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />

			{/* Utilisez l'élément Outlet pour afficher les routes imbriquées */}
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/ListAdmin" element={<ListAdmin />} />
			</Routes>
		</div>
	);
};

export default App;
