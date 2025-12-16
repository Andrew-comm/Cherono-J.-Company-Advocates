import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/PracticeAreaDetail.css';

// Import icons (you can use emoji icons instead of lucide-react)
const Icon = {
  Scale: () => <span className="icon-emoji">⚖️</span>,
  Users: () => <span className="icon-emoji">👨‍👩‍👧‍👦</span>,
  Gavel: () => <span className="icon-emoji">⚖️</span>,
  FileText: () => <span className="icon-emoji">📄</span>,
  CheckCircle: () => <span className="icon-emoji">✓</span>,
  ArrowLeft: () => <span className="icon-emoji">←</span>
};

const practiceAreas = {  
  
  'family-succession-law': {
    title: 'Family & Succession Law',
    icon: <Icon.Users />,
    description: 'Compassionate and effective representation in all family and inheritance matters with sensitivity and expertise.',
    services: [
      'Divorce & separation proceedings',
      'Child custody & maintenance agreements',
      'Distribution of estates & probate',
      'Guardianship applications',
      'Adoption processes',
      'Pre-nuptial agreements'
    ],
    experience: 'Successfully resolved 500+ family and succession cases with sensitivity and fairness, achieving favorable outcomes for families.',
    process: ['Case Assessment & Consultation', 'Mediation & Alternative Dispute Resolution', 'Court Representation & Advocacy', 'Enforcement of Court Orders', 'Post-Settlement Support'],
    testimonials: [
      "They guided me through a difficult divorce with compassion and professionalism.",
      "Efficient handling of my father's estate distribution."
    ]
  },
  'civil-commercial-litigation': {
    title: 'Civil & Commercial Litigation',
    icon: <Icon.Gavel />,
    description: 'Aggressive and strategic advocacy in commercial disputes and civil claims with proven track record.',
    services: [
      'Contract disputes & breach of contract',
      'Debt recovery & collection',
      'Employment & labor disputes',
      'Partnership & shareholder conflicts',
      'Injunctions & recovery of premises',
      'Professional negligence claims'
    ],
    experience: 'Achieved 95%+ success rate in civil and commercial litigation across Kenyan courts, recovering millions for our clients.',
    process: ['Case Evaluation & Strategy Planning', 'Demand Letters & Negotiations', 'Pleadings & Discovery Process', 'Pre-trial Settlement Conferences', 'Trial Representation & Judgment Enforcement'],
    testimonials: [
      "Recovered our substantial debt that other lawyers said was impossible.",
      "Excellent strategic approach to our commercial dispute."
    ]
  },
  
   'corporate-business-law': {
    title: 'Corporate & Business Law',
    icon: <Icon.CheckCircle />,
    description: 'Comprehensive legal support for businesses — from startup to expansion across Kenya.',
    services: [
      'Company registration & incorporation',
      'Contracts & commercial agreements',
      'Corporate compliance & governance',
      'Mergers & acquisitions',
      'Business restructuring & dissolution',
      'Intellectual property protection'
    ],
    experience: 'Registered and advised 300+ companies in Rift Valley and Nairobi, helping them achieve regulatory compliance and business growth.',
    process: ['Business Consultation & Needs Analysis', 'Legal Structure Recommendation', 'Registration & Compliance Setup', 'Contract Drafting & Review', 'Ongoing Advisory & Support'],
    testimonials: [
      "Helped us navigate complex regulations for our new business.",
      "Excellent corporate advisory services for our growing company."
    ]
  },
  'debt-recovery-insolvency': {
    title: 'Debt Recovery & Insolvency',
    icon: <Icon.CheckCircle />,
    description: 'Fast and effective recovery of debts for individuals and businesses with proven results.',
    services: [
      'Demand letters & negotiations',
      'Court attachment & sale of assets',
      'Insolvency petitions',
      'Receivership & liquidation',
      'Credit management advice',
      'Statutory demands'
    ],
    experience: 'Successfully recovered over KSh 800 million for clients since 2015 through strategic debt recovery methods.',
    process: ['Debt Assessment & Documentation Review', 'Formal Demand & Negotiation', 'Legal Action Initiation', 'Enforcement Proceedings', 'Recovery & Settlement'],
    testimonials: [
      "Recovered our long-standing debt within weeks of engagement.",
      "Professional and persistent approach to debt collection."
    ]
  }
};

function PracticeAreaDetail() {
  const { area } = useParams();
  const key = area?.toLowerCase().replace(/ /g, '-');
  const data = practiceAreas[key] || {
    title: 'Practice Area',
    description: 'Comprehensive legal services tailored to your specific needs with expertise and dedication.',
    services: ['Expert consultation & assessment', 'Strategic legal representation', 'Favorable outcomes & resolutions'],
    experience: 'Years of dedicated service and proven results for our valued clients.',
    process: ['Initial Consultation', 'Strategy Development', 'Implementation & Representation', 'Resolution & Follow-up'],
    testimonials: ["Highly recommended for their professionalism.", "Exceptional service and results."]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="practice-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-icon">
              {data.icon}
            </div>
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-description">{data.description}</p>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Cases Handled</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="practice-content">
        <div className="container">
          {/* Services Section */}
          <motion.div
            className="services-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">Comprehensive legal solutions tailored to your specific needs</p>
            </div>
            
            <div className="services-grid">
              {data.services.map((service, i) => (
                <motion.div
                  key={i}
                  className="service-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">✓</div>
                  <h3 className="service-name">{service}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="experience-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="experience-card">
              <div className="experience-icon">🏆</div>
              <h3 className="experience-title">Our Track Record</h3>
              <p className="experience-text">{data.experience}</p>
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="process-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">A structured approach to achieving your legal objectives</p>
            </div>
            
            <div className="process-steps">
              {data.process.map((step, i) => (
                <motion.div
                  key={i}
                  className="process-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="step-number">
                    <span>{i + 1}</span>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step}</h3>
                    <p className="step-description">
                      Detailed execution and professional handling at every stage
                    </p>
                  </div>
                  {i < data.process.length - 1 && (
                    <div className="step-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          {data.testimonials && (
            <motion.div
              className="testimonials-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="section-header">
                <h2 className="section-title">Client Experiences</h2>
                <p className="section-subtitle">What our clients say about our services</p>
              </div>
              
              <div className="testimonials-grid">
                {data.testimonials.map((testimonial, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="testimonial-quote">❝</div>
                    <p className="testimonial-text">{testimonial}</p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, starIndex) => (
                        <span key={starIndex} className="star">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className="cta-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to Protect Your Rights?</h3>
              <p className="cta-description">
                Schedule a free consultation with our experienced legal team. 
                Let us help you navigate your legal challenges with confidence.
              </p>
              <div className="cta-buttons">
                <Link to="/#contact" className="cta-button primary">
                  Book a Consultation Today
                  <span className="button-icon">→</span>
                </Link>
                <Link to="tel:+254701067110" className="cta-button secondary">
                  Call Now: 0701 067 110
                  <span className="button-icon">📞</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            className="back-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="back-button">
              <Icon.ArrowLeft />
              Back to All Practice Areas
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default PracticeAreaDetail;