import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Effects from './pages/Effects';
import Method from './pages/Method';
import Contacts from './pages/Contacts';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="pt-36 extrasmall:pt-52 header-sm:pt-36 sm:pt-40 md:pt-40 header-special:pt-24 lg:pt-40 xl:pt-20" style={{ minHeight: '100vh' }}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/method" element={<Method />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}