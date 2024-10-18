import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Learn from './pages/Learn/Learn.tsx';
import LinkedListGuide from './pages/Learn/Sections/Topics/LinkedListGuide.tsx';
import BinarySearchGuide from './pages/Learn/Sections/Topics/BinarySearchGuide.tsx';
import MergeSortGuide from './pages/Learn/Sections/Topics/MergeSortGuide.tsx';
import Problems from './pages/Problems/Problems.tsx';
import Contest from './pages/Contest/Contest.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import ArraysGuide from './pages/Learn/Sections/Topics/ArraysGuide.tsx';
import BitManipulationGuide from './pages/Learn/Sections/Topics/BitManipulationGuide.tsx';
import RecursionGuide from './pages/Learn/Sections/Topics/RecurrsionGuide.tsx';

const App: React.FC = () => {
  return (
      <div className='h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/arrays" element={<ArraysGuide/>} />
          <Route path="/learn/bit-manipulation" element={<BitManipulationGuide/>} />
          <Route path="/learn/recurssion" element={<RecursionGuide/>} />
          <Route path="/learn/linked-list" element={<LinkedListGuide/>} />
          <Route path="/learn/binary-search" element={<BinarySearchGuide/>} />
          <Route path="/learn/merge-sort" element={<MergeSortGuide/>} />

          <Route path="/problems" element={<Problems />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  );
};

export default App;
