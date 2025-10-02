import { Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './route/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
