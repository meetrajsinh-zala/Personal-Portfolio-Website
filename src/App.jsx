import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App () {
  return (
    <React.Fragment>
      <div className="w-[100%] h-[100%] bg-[#081517] relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </React.Fragment>
  );
}

export default App;
