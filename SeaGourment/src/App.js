import React from 'react';
import Home from './Components/Home';
import Products from './Components/Products';
import Apropos from './Components/Apropos';
import Contact from './Components/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import ListAdmin from './pages/admin/ListAdmin';
import Sidbar from './pages/SideBar/Sidbar';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Theme/Navbar';
import Footer from './Components/Theme/Footer';

const App = () => {
	return (
		<div>
		<Navbar/>
	
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/Apropos" element={<Apropos />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>

			{/* Utilisez l'élément Outlet pour afficher les routes imbriquées */}
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/ListAdmin" element={<ListAdmin />} />
				<Route path="/menu" element={<Sidbar />} />
			</Routes>
			<Footer/>
		</div>
	);
};

export default App;
