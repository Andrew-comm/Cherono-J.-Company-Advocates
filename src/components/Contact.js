import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Visit Us in Eldoret</h2>
          <p className="section-subtitle">
            Schedule a free consultation with our experienced legal team
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            

           
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Tarita Centre, 4th Floor, Room 8, Ronald Ngala Street, Eldoret</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>0701 067 110 | 0720 108 239</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉</div>
                <div>
                  <h4>Email</h4>
                  <p>cheronojadvocates08@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="map-header">
              <h3>Our Location</h3>
              <p>Find us easily in Eldoret Town</p>
            </div>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.759704920309!2d35.287099614753!3d0.516447499823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781c8b6e8b6e8b7%3A0x9b9e9e9e9e9e9e9e!2sTarita%20Centre!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Cherono J. & Company Advocates Location"
              >
              </iframe>
            </div>

            <div className="map-info">
              <div className="hours-info">
                <h4>Office Hours</h4>
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="emergency-info">
                <h4>Emergency Contact</h4>
                <p>Available 24/7 for urgent legal matters</p>
                <p className="emergency-phone">0701 067 110</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;