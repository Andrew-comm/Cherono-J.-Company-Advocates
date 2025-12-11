import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import all components
import Header from './components/Header';
import AnimatedIntro from './components/AnimatedIntro';
import AboutSlider from './components/AboutSlider';
import PracticeAreas from './components/PracticeAreas';
import BeliefsAndTestimonials from './components/BeliefsAndTestimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bottom from './components/Bottom';
import PracticeAreaDetail from './components/PracticeAreaDetail';

function Home() {
  return (
    <>
      {/* Fixed Header with smooth scroll nav */}
      <Header />

      {/* Hero / Intro */}
      <AnimatedIntro />

      {/* All sections with correct IDs for smooth scroll */}
      <section id="about">
        <AboutSlider />
      </section>

      <section id="practice">
        <PracticeAreas />
      </section>

      <section id="values">
        <BeliefsAndTestimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <Bottom />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page - Smooth Scroll Navigation */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Practice Area Detail Pages */}
          <Route path="/practice/:area" element={<PracticeAreaDetail />} />

          {/* Optional: Catch-all for unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;