import { Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './route/home/home';
import Kr from './route/kr/kr';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/kr" element={<Kr></Kr>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
