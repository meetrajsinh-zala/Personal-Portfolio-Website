import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Experience from './components/Experience';
import './index.css';

function App () {
  return (
    <React.Fragment>
      <div className="w-[100%] h-[100%] bg-[#CCD3DA] dark:bg-[#081517] relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </React.Fragment>
  );
}

export default App;
