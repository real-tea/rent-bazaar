import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BubblyContainer } from "react-bubbly-transitions";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path="*" element={<><h1>Err. 404</h1>NoPageFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
