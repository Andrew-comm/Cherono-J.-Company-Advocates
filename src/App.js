import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import all components
import Header from './components/Header';
import ContactTicker from './components/ContactTicker';
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
      {/* Fixed Header - always at top */}
      <Header />

      {/* Fixed Contact Ticker - directly below header, always visible */}
      <ContactTicker />

      {/* Main content wrapper with top padding to prevent overlap */}
      <main style={{ paddingTop: '140px' }}>  {/* Adjust if needed: Header (~80px) + Ticker (~60px) */}

        {/* Hero Section - acts as visual home/landing */}
        <section id="home">  {/* For smooth scroll link to top */}
          <AnimatedIntro />
        </section>

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
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice/:area" element={<PracticeAreaDetail />} />
          <Route path="*" element={<Home />} />  {/* Fallback to home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;