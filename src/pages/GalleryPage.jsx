import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './GalleryPage.css';

const galleryImages = [
  "/assets/resort-exterior.webp",
  "/assets/resort-night.webp",
  "/assets/haldi-ceremony.webp",
  "/assets/gallery-1.webp",
  "/assets/gallery-2.webp",
  "/assets/gallery-3.webp",
  "/assets/gallery-4.webp",
  "/assets/gallery-5.webp",
  "/assets/swastik-1.webp",
  "/assets/swastik-2.webp",
  "/assets/swastik-3.webp",
  "/assets/swastik-4.webp",
  "/assets/swastik-5.webp",
  "/assets/swastik-6.webp",
  "/assets/swastik-7.webp",
  "/assets/swastik-8.webp",
  "/assets/swastik-9.webp",
  "/assets/swastik-10.webp",
  "/assets/gallery-11.webp",
  "/assets/gallery-12.webp",
  "/assets/gallery-13.webp",
  "/assets/gallery-14.webp"
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
            <img src={src} alt={`Swastik Kuteeram ${index + 1}`} className="gallery-page-img" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
