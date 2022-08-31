import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AddStudent from './pages/AddStudent';
import AllStudents from './pages/AllStudents';
import Home from './pages/Home';
import OneStudent from './pages/OneStudent';
import Navbar from './ui/Navbar';

export default function App({ allStudents, studentById }) {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<AllStudents students={allStudents} />} />
        <Route path="/students/:id" element={<OneStudent student={studentById} />} />
        <Route path="/students/add" element={<AddStudent />} />
      </Routes>
    </div>
  );
}
