import React from 'react';
import { motion } from 'framer-motion';
import '../styles/BeliefsAndTestimonials.css';

const values = [
  { 
    title: "Integrity", 
    description: "Upholding the highest ethical standards in every case we handle.",
    icon: "⚖️"
  },
  { 
    title: "Excellence", 
    description: "Delivering exceptional legal services with attention to detail.",
    icon: "⭐"
  },
  { 
    title: "Client-First", 
    description: "Your needs and interests always come first in our practice.",
    icon: "❤️"
  },
  { 
    title: "Justice for All", 
    description: "Committed to making justice accessible to everyone in our community.",
    icon: "🤝"
  }
];



function BeliefsAndTestimonials() {
  return (
    <section className="beliefs-testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Values & Client Voices</h2>
          <p className="section-subtitle">
            Core principles that guide our practice, and real stories from those we've served
          </p>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="section-label">
            <span className="label-text">Our Core Values</span>
            <div className="label-line"></div>
          </div>
          
          <div className="values-grid">
            {values.map((value, i) => (
              <motion.div 
                key={i} 
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-decoration">
                  <div className="decoration-dot"></div>
                  <div className="decoration-dot"></div>
                  <div className="decoration-dot"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default BeliefsAndTestimonials;