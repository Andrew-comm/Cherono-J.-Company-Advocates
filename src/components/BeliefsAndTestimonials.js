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

const testimonials = [
  { 
    name: "Mary Chebet", 
    role: "Land Dispute Client",
    text: "Professional, responsive, and highly effective. They won my land case after years of struggle!",
    rating: 5
  },
  { 
    name: "Dr. Kiprop", 
    role: "Business Owner",
    text: "Handled our company registration and contracts flawlessly. Highly recommend their commercial services.",
    rating: 5
  },
  { 
    name: "Jane Cheruiyot", 
    role: "Family Law Client",
    text: "Compassionate and strong in family matters. They gave me peace of mind during a difficult divorce.",
    rating: 5
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

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="section-label">
            <span className="label-text">Client Testimonials</span>
            <div className="label-line"></div>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i} 
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Rating Stars */}
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="star">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                
                {/* Client Info */}
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                  <div className="quote-icon">❝</div>
                </div>
                
                {/* Decorative Element */}
                <div className="testimonial-decoration">
                  <div className="decoration-line"></div>
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