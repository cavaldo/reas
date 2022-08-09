import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/homePage';
import SentPage from './pages/sentPage';
import Nav from './components/nav';
import '../src/assets/styles/app.scss';

function App() {
  return (
    <main className="app">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sent" element={<SentPage />} />
        </Routes>
    </main>
  );
}

export default App;
