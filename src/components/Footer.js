import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "Practice Areas", path: "#services" },
    { name: "About Us", path: "#about" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "in", url: "#" },
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "Facebook", icon: "f", url: "#" },
    { name: "Email", icon: "✉", url: "mailto:cheronojadvocates08@gmail.com" }
  ];

  return (
    <footer className="main-footer">
      {/* Decorative Elements */}
      <div className="footer-waves">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 150">
          <path 
            fill="var(--turquoise-pale)" 
            d="M0,0 C320,150 1120,0 1440,100 L1440,150 L0,150 Z" 
            opacity="0.3" 
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <motion.div 
            className="footer-column brand-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-brand">
              Cherono J. & Company Advocates
            </h3>
            <p className="brand-tagline">
              Your trusted legal partner in Eldoret since 2016.
            </p>
            
            <div className="footer-slogan">
              <div className="slogan-icon">⚖</div>
              <p>Delivering Justice with Integrity & Excellence</p>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <p className="social-title">Follow Us</p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            className="footer-column contact-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="column-title">Contact Info</h4>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-content">
                <h5>Office Address</h5>
                <p>Tarita Centre, 4th Floor, Room 8</p>
                <p>Ronald Ngala Street, Eldoret</p>
                <p>P.O. Box 778-30100, Eldoret</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-content">
                <h5>Phone Numbers</h5>
                <p className="phone-number">0701 067 110</p>
                <p className="phone-number">0720 108 239</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-content">
                <h5>Email Address</h5>
                <a href="mailto:cheronojadvocates08@gmail.com" className="email-link">
                  cheronojadvocates08@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div 
            className="footer-column links-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="column-title">Quick Links</h4>
            
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a href={link.path} className="footer-link">
                    <span className="link-icon">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            
          </motion.div>
        </div>

        {/* Divider */}
        

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="copyright">
            © {currentYear} Cherono J. & Company Advocates. All Rights Reserved.
          </div>
          
          <div className="crafted-by">
            Crafted with excellence in Kenya 🇰🇪
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;