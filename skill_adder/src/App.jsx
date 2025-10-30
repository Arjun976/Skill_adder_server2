import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';
import Preview from './components/Preview.jsx';
import Home from './pages/Home.jsx';
import Progress from './pages/Progress.jsx';
import Search from './pages/Search.jsx';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
