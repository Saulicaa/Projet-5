import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import LogementPage from './components/LogementPage/LogementPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<LogementPage />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default AppRouter;