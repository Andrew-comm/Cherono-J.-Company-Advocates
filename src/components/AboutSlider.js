import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutSlider.css';

const aboutCards = [
  { 
    title: "Our Legacy", 
    text: "Established in 2008, we have served thousands of clients across Kenya with distinction." 
  },
  { 
    title: "Our Mission", 
    text: "To deliver justice with integrity, professionalism, and unwavering commitment to our clients." 
  },
  { 
    title: "What Sets Us Apart", 
    text: "Personalized service, deep local knowledge, and a proven track record of success." 
  },
  { 
    title: "Community First", 
    text: "Active in pro bono work and legal education in Uasin Gishu County." 
  },
];

function AboutSlider() {
  return (
    <section className="about-slider-section">
      <div className="about-slider-container">
        <h2 className="about-section-title">About Cherono J. & Company Advocates</h2>
        <p className="about-section-subtitle">Leading legal excellence with integrity since 2008</p>
        
        <div className="about-cards-grid">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(72, 201, 176, 0.2)"
              }}
            >
              <div className="about-card-icon">
                <div className="icon-circle">
                  {i + 1}
                </div>
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-text">{card.text}</p>
              <div className="about-card-decoration">
                <div className="decoration-line"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSlider;