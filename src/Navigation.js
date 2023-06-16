import React from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Login from './Login';
import Home from './Pages/Login/Home/Home';
import { Card } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
function Navigation() {

   // const navigate = useNavigate();
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Login' element={<Login />} />
      </Routes>


   )
}

export default Navigation