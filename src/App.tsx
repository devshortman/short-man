import { Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './route/home/home';
import Kr from './route/kr/kr';
import Search from './route/search/search';
import MyPage from './route/my-page/my-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/kr" element={<Kr></Kr>} />
        <Route path="/glob" element={<Kr></Kr>} />
        <Route path="/ch" element={<Kr></Kr>} />
        <Route path="/com" element={<Kr></Kr>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/my" element={<MyPage></MyPage>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
