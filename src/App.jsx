import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router basename="/IBM_CAD0210EN_FINAL">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



