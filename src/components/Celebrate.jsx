import React from 'react';
import { motion } from 'framer-motion';
import './Celebrate.css';

const Celebrate = () => {
  return (
    <section className="celebrate-section">
      <div className="container celebrate-container">
        <div className="celebrate-content">
          <motion.div 
            className="celebrate-text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="celebrate-subtitle">CELEBRATE EVERY OCCASION</p>
            <h2 className="celebrate-title">Your Special Moments Deserve a Beautiful Setting</h2>
            <p className="celebrate-description">
              Host weddings, engagements, birthdays, family reunions, corporate retreats, or festive gatherings in a venue where heritage and nature create the perfect backdrop. Because every celebration deserves a story worth remembering.
            </p>
          </motion.div>
          <motion.div 
            className="celebrate-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="celebrate-image-placeholder">
              <img 
                src="/assets/haldi-ceremony.jpg" 
                alt="Celebrate at Swastik" 
                className="celebrate-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Balustrade Divider */}
      <motion.div 
        className="celebrate-divider"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="celebrate-divider-inner">
          <img src="/assets/balustrade-divider.png" alt="" className="divider-img" />
          <img src="/assets/balustrade-divider.png" alt="" className="divider-img" />
        </div>
      </motion.div>
    </section>
  );
};

export default Celebrate;
