import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';
import logo from '../Images/Logo.jpg'; // ← your logo path

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Practice Areas', to: 'practice' },
    { name: 'Values & Testimonials', to: 'values' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="home">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => scroll.scrollToTop()} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Cherono J. & Company Advocates" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="active"
              className="nav-link"
              offset={-90}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop + Tablet) */}
        <Link to="contact" smooth={true} duration={800} offset={-90} className="header-cta desktop-cta">
          Free Consultation
        </Link>

        {/* Hamburger Icon (Mobile only) */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                className="mobile-nav-link"
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;