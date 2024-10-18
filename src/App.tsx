import React from 'react';
import './App.css';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Learn from './pages/Learn/Learn.tsx';
import Problems from './pages/Problems/Problems.tsx';
import Contest from './pages/Contest/Contest.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import Problem from './pages/Problem/Problem.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary/85">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problem/:id" element={<Problem />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
