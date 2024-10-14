import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Learn from './pages/Learn/Learn.tsx';
import Problems from './pages/Problems/Problems.tsx';
import Contest from './pages/Contest/Contest.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';

const App: React.FC = () => {
  return (
      <div className='h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  );
};

export default App;
