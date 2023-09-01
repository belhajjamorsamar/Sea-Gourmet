import React from 'react'
import Navbar from './Components/Theme/Navbar'
import Footer from './Components/Theme/Footer'
import Home from './Components/Home'
import Products from './Components/Products'
import Apropos from './Components/Apropos'
import Contact from './Components/Contact'


import {Routes ,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"  exact element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Apropos" element={<Apropos/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
