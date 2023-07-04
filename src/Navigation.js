import React from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Login from './Login';
import Home from './Pages/Login/Home/Home';
import { Card } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Cart from './Pages/Login/Home/Cart';
import SignupForm from './Pages/Login/Home/SignUp';
import Signup from './Pages/Login/Home/SignUp';
import Portfolio from './Services/Portfolio';
function Navigation() {

   // const navigate = useNavigate();
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Login' element={<Login />} />
         <Route path='/Cart' element={<Cart />} />
         <Route path='/SignUp' element={<Signup />} />
         <Route path='/Portfolio' element={<Portfolio />} />
      </Routes>


   )
}

export default Navigation