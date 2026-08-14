import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    text: "Wake up to birdsong",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8ffec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7h.01"></path>
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
        <path d="m20 7 2 .5-2 .5"></path>
        <path d="M10 18v3"></path>
        <path d="M14 17.75V21"></path>
        <path d="M7 18a6 6 0 0 0 3.84-10.61"></path>
      </svg>
    )
  },
  {
    text: "Walk through\ngreen landscapes.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8ffec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    )
  },
  {
    text: "Relax under\nopen skies.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8ffec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h8"></path>
        <path d="M12 2v2"></path>
        <path d="m19 12-1 4-1 4"></path>
        <path d="m5 12 1 4 1 4"></path>
        <path d="M2 12h20"></path>
        <path d="M22 12a10 10 0 0 0-20 0"></path>
        <path d="M6 16h12"></path>
      </svg>
    )
  },
  {
    text: "Celebrate with your\nloved ones.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8ffec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    text: "Reconnect with traditions\nthat feel timeless.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f8ffec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    )
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="pattern-border pattern-top"></div>
      
      <div className="container experience-container">
        <motion.div 
          className="experience-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="experience-subtitle-top">Experience the Manduva Lifestyle</p>
          <h2 className="experience-title">More Than a Stay—A Cultural Experience</h2>
        </motion.div>
        
        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className="experience-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience-icon">
                  {item.icon}
                </div>
                <p className="experience-text">
                  {item.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              {index < experienceData.length - 1 && (
                <div className="experience-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div 
          className="experience-footer text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="experience-footer-text">
            Every corner is designed to help you slow down, breathe, and experience the charm of authentic Telugu living.
          </p>
        </motion.div>
      </div>

      <div className="pattern-border pattern-bottom"></div>
    </section>
  );
};

export default Experience;
