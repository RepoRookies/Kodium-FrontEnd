import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Problem from './pages/Problem/Problem.tsx';

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:id" element={<Problem />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
