import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const featuresData = [
  {
    title: "Authentic\nManduva Architecture",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00350d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path><path d="M5 21v-4"></path><path d="M19 21v-4"></path><path d="M3 7l9-4 9 4"></path><path d="M5 7v10"></path><path d="M19 7v10"></path><path d="M12 21v-4"></path><path d="M9 21v-4"></path><path d="M15 21v-4"></path>
      </svg>
    )
  },
  {
    title: "Peaceful\nNature Retreat",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00350d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    )
  },
  {
    title: "Weddings\n& Celebrations",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00350d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="6"></circle><circle cx="15" cy="15" r="6"></circle>
      </svg>
    )
  },
  {
    title: "Private\nPool Stay",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00350d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
    )
  },
  {
    title: "Traditional\nHospitality",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00350d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container features-container">
        <motion.div 
          className="features-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="why-title">Why Manduva?</h2>
          <p className="why-subtitle">
            Swastik Kuteeram is a private Manduva & Kerala-style resort just 20 minutes from<br/>
            Neopolis, Hyderabad. 4 luxury AC bedrooms, a private swimming pool, and a<br/>
            sprawling lawn for unforgettable moments.
          </p>
        </motion.div>
        
        <motion.div 
          className="features-pill-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="feature-pill-item">
                <h3 className="feature-pill-title">
                  {feature.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <div className="feature-pill-icon">
                  {feature.icon}
                </div>
              </div>
              {index < featuresData.length - 1 && (
                <div className="feature-pill-divider"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        
        <motion.div 
          className="why-manduva-images"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="manduva-img-wrapper left-img">
            <img src="/assets/gallery-1.jpg" alt="Manduva Architecture" />
          </div>
          <div className="manduva-img-wrapper center-img">
            <img src="/assets/resort-exterior.jpg" alt="Resort View" />
          </div>
          <div className="manduva-img-wrapper right-img">
            <img src="/assets/resort-night.jpg" alt="Manduva Stay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
