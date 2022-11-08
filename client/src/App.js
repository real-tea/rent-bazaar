import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BubblyContainer } from "react-bubbly-transitions";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Buy from './components/Buy/Buy';
import Sell from './components/Sell/Sell';
function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='buy' element={<Buy />} />
        <Route path='sell' element={<Sell />} />
        <Route path="*" element={<><h1>Err. 404</h1>NoPageFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
