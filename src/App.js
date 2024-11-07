import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/home';
import Project from './components/Projects';
import About from './components/about';
import Contact from './components/contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/projects" element={<Project />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
