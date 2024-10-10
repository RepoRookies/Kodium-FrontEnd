import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Problems from './pages/Problems/Problems.tsx';

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
