import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
