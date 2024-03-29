import React from 'react';
import Home from './components/Home';
import Projects from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <Router>
    <div>
    <Navbar title="MY PORTFOLIO"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <ScrollToTopButton/>
    <Footer/>
     
  
    </div>
    </Router>
  );
}

export default App;
