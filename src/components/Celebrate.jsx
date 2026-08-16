import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Celebrate.css';

const images = [
  '/assets/celebration-main.jpg',
  '/assets/celebration-birthday.jpg',
  '/assets/celebration-mehendi.jpg',
  '/assets/celebration-poolparty.jpg',
  '/assets/celebration-corporate-new.jpg',
  '/assets/celebration-kittyparty.jpg'
];

const Celebrate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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
            <div className="celebrate-description">
              <ul className="celebration-list">
                <li>🌿 Family Getaways & Staycations</li>
                <li>💍 Intimate Weddings & Haldi / Mehendi Functions</li>
                <li>🎂 Private Milestone Celebrations</li>
                <li>💼 Executive & Leadership Team Retreats</li>
                <li>🥂 Kitty Parties</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="celebrate-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="celebrate-carousel-container">
              <AnimatePresence>
                <motion.img 
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Celebrate at Swastik ${currentIndex + 1}`} 
                  className="celebrate-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </AnimatePresence>
              
              <button className="carousel-control prev" onClick={goToPrev} aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="carousel-control next" onClick={goToNext} aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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
