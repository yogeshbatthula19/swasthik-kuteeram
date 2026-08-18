import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './GalleryPage.css';

const galleryImages = [
  "/assets/resort-exterior.jpg",
  "/assets/resort-night.jpg",
  "/assets/haldi-ceremony.jpg",
  "/assets/gallery-1.jpg",
  "/assets/gallery-2.jpg",
  "/assets/gallery-3.jpg",
  "/assets/gallery-4.jpg",
  "/assets/gallery-5.jpg",
  "/assets/swastik-1.png",
  "/assets/swastik-2.png",
  "/assets/swastik-3.png",
  "/assets/swastik-4.png",
  "/assets/swastik-5.png",
  "/assets/swastik-6.png",
  "/assets/swastik-7.png",
  "/assets/swastik-8.png",
  "/assets/swastik-9.png",
  "/assets/swastik-10.png",
  "/assets/gallery-11.jpg",
  "/assets/gallery-12.jpg",
  "/assets/gallery-13.jpg",
  "/assets/gallery-14.jpg"
];

const GalleryPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page-container">
      <div className="gallery-page-header">
        <h1 className="gallery-page-title">Gallery</h1>
        <p className="gallery-page-subtitle">A glimpse into Swastik Kuteeram</p>
      </div>
      
      <div className="gallery-page-grid">
        {galleryImages.map((src, index) => (
          <motion.div 
            key={index} 
            className="gallery-page-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <img src={src} alt={`Swastik Kuteeram ${index + 1}`} className="gallery-page-img" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
