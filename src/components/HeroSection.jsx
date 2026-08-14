import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = ({ onOpenBooking }) => {
  return (
    <section className="hero">
      <div className="hero-top-border">
        <img src="/assets/hero-border-top.svg" alt="" className="hero-border-image" />
      </div>
      <div className="hero-bg-container">
        <video 
          src="/assets/hero-video.mp4" 
          className="hero-video-main" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="hero-overlay-darken"></div>
      </div>
      
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-logo-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/assets/hero-logo.png" alt="Swastik Kuteeram Logo" className="hero-logo" />
        </motion.div>
        
        <div className="hero-text-container">
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            A Heritage Staycation Near Hyderabad
          </motion.p>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Experience the Charm of Manduva Living
          </motion.h1>
          <motion.button 
            className="btn-book-now"
            onClick={onOpenBooking}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
        
        <motion.div 
          className="hero-bottom-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="scroll-down-container">
            <span className="scroll-text">Scroll down</span>
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L12 4M12 4L5 11M12 4L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
