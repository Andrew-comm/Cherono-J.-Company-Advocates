import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/PracticeAreas.css';

const areas = [
  { 
    name: "Land & Conveyancing", 
    icon: "🏞️",
    description: "Property disputes, title deeds, transfers, and land succession matters.",
    color: "#48c9b0"
  },
  { 
    name: "Family & Succession Law", 
    icon: "👨‍👩‍👧‍👦",
    description: "Divorce, child custody, adoption, wills, and estate planning.",
    color: "#1abc9c"
  },
  { 
    name: "Civil & Commercial Litigation", 
    icon: "⚖️",
    description: "Contract disputes, business litigation, and commercial arbitration.",
    color: "#48c9b0"
  },
  { 
    name: "Criminal Defense", 
    icon: "🛡️",
    description: "Bail applications, trial representation, and appeal proceedings.",
    color: "#1abc9c"
  },
  { 
    name: "Corporate & Business Law", 
    icon: "🏢",
    description: "Company registration, compliance, mergers, and acquisitions.",
    color: "#48c9b0"
  },
  { 
    name: "Debt Recovery & Insolvency", 
    icon: "💰",
    description: "Debt collection, bankruptcy proceedings, and financial disputes.",
    color: "#1abc9c"
  },
  { 
    name: "Employment & Labor Law", 
    icon: "👷",
    description: "Employment contracts, unfair dismissal, and labor disputes.",
    color: "#48c9b0"
  },
  { 
    name: "Constitutional & Judicial Review", 
    icon: "📜",
    description: "Constitutional matters and judicial review proceedings.",
    color: "#1abc9c"
  },
];

function PracticeAreas() {
  return (
    <section className="practice-areas">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Practice Areas</h2>
          <p className="section-subtitle">
            Comprehensive legal services tailored to meet your unique needs with expertise and dedication
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="areas-grid">
          {areas.map((area, i) => (
            <Link 
              key={i} 
              to={`/practice/${area.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
              className="area-link"
            >
              <motion.div
                className="area-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(72, 201, 176, 0.2)"
                }}
              >
                {/* Icon with Background */}
                <div 
                  className="area-icon-container"
                  style={{ background: area.color === "#48c9b0" 
                    ? "linear-gradient(135deg, var(--turquoise-light), var(--turquoise-green))" 
                    : "linear-gradient(135deg, var(--turquoise-green), var(--turquoise-dark))"
                  }}
                >
                  <div className="area-icon">{area.icon}</div>
                </div>

                {/* Content */}
                <div className="area-content">
                  <h3 className="area-title">{area.name}</h3>
                  <p className="area-description">{area.description}</p>
                  
                  {/* Tags */}
                  <div className="area-tags">
                    <span className="tag">Expert Guidance</span>
                    <span className="tag">Proven Results</span>
                    <span className="tag">Client Focused</span>
                  </div>
                </div>

                {/* CTA Arrow */}
                <div className="area-cta">
                  <span className="cta-text">Learn More</span>
                  <span className="cta-arrow">→</span>
                </div>

                {/* Hover Effect Border */}
                <div className="area-hover-border"></div>
              </motion.div>
            </Link>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default PracticeAreas;