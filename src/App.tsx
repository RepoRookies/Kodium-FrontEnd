import React from 'react';
import './App.css';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Problem from './pages/Problem/Problem.tsx';

import Learn from './pages/Learn/Learn.tsx';
import LinkedListGuide from './pages/Learn/Topics/LinkedListGuide.tsx';
import BinarySearchGuide from './pages/Learn/Topics/BinarySearchGuide.tsx';
import MergeSortGuide from './pages/Learn/Topics/MergeSortGuide.tsx';
import ArraysGuide from './pages/Learn/Topics/ArraysGuide.tsx';
import BitManipulationGuide from './pages/Learn/Topics/BitManipulationGuide.tsx';
import RecursionGuide from './pages/Learn/Topics/RecursionGuide.tsx';

import Problems from './pages/Problems/Problems.tsx';
import Contest from './pages/Contest/Contest.tsx';

import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';

const App: React.FC = () => {
  return (
      <div className='min-h-screen bg-primary/85'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/arrays" element={<ArraysGuide/>} />
          <Route path="/learn/bit-manipulation" element={<BitManipulationGuide/>} />
          <Route path="/learn/recursion" element={<RecursionGuide/>} />
          <Route path="/learn/linked-list" element={<LinkedListGuide/>} />
          <Route path="/learn/binary-search" element={<BinarySearchGuide/>} />
          <Route path="/learn/merge-sort" element={<MergeSortGuide/>} />

          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:id" element={<Problem />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Toaster/>
      </div>
  );
};

export default App;
