import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Effects from './pages/Effects';
import Method from './pages/Method';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Benefits />} />
        <Route path="/learn-more" element={<Effects />} />
        <Route path="/contacts" element={<Method />} />
      </Routes>
    </BrowserRouter>
  )
}