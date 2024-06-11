import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import Home from './components/HomePage/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;