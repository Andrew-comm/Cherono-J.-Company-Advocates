import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AnimatedIntro.css';

const slides = [
{
    "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=90",
    "title": "Justice. Delivered with Integrity.",
    "text": "For over 15 years, we have stood beside individuals, families, and businesses in Eldoret and across Kenya turning complex legal challenges into clear victories."
  },
  {
    "image": "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2850&h=1900&q=90",
    "title": "Your Rights. Our Fight.",
    "text": "From land disputes to family law, commercial litigation to criminal defense we protect what matters most to you."
  },
  {
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=90',
    title: 'Trusted Legal Partner in Eldoret',
    text: 'Local expertise. National impact. Serving Rift Valley and beyond with unwavering commitment and proven results.'
  },
  {
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=90',
    title: 'Winning Cases. Changing Lives.',
    text: 'We don\'t just represent you in court we fight for your future, your family, and your peace of mind.'
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=90',
    title: 'Get Justice Today',
    text: 'Free consultation. No upfront fees in select cases. Start your journey to justice with a team that truly cares.'
  }
];

function AnimatedIntro() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="animated-intro">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`intro-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
        </div>
      ))}

      {/* Content */}
      <div className="intro-content-container">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="slide-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              y: index === currentSlide ? 0 : 50,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <h1 className="intro-title">{slide.title}</h1>
            <p className="intro-text">{slide.text}</p>

            <div className="cta-container">
              <motion.a
                href="#contact"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 30,
                }}
                transition={{ delay: 0.4 }}
              >
                Start Your Case Today
              </motion.a>
              
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slide-nav prev" 
        onClick={handlePrevSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        className="slide-nav next" 
        onClick={handleNextSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Floating Justice Scales */}
      <div className="floating-element scale-left">⚖</div>
      <div className="floating-element scale-right">⚖</div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation Dots */}
      <div className="mobile-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default AnimatedIntro;