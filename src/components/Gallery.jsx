import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const galleryImages = [
  "/assets/swastik-5.png",
  "/assets/swastik-6.png",
  "/assets/swastik-7.png",
  "/assets/swastik-8.png",
  "/assets/swastik-9.png",
  "/assets/swastik-10.png"
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">EVERY PICTURE TELLS A STORY</h2>
        
        <Link to="/gallery" className="gallery-view-all-btn">
          View All Photos
        </Link>
        
        {/* Decorative Border */}
        <div className="gallery-border">
          <div className="gallery-border-inner">
            {/* Repeated for seamless pattern spanning large screens */}
            <img src="/assets/306e024d4fff0c66e55052ae3973673d8ee67bfe.svg" alt="Pattern Border" className="border-pattern-img" />
            <img src="/assets/306e024d4fff0c66e55052ae3973673d8ee67bfe.svg" alt="Pattern Border" className="border-pattern-img" />
            <img src="/assets/306e024d4fff0c66e55052ae3973673d8ee67bfe.svg" alt="Pattern Border" className="border-pattern-img" />
            <img src="/assets/306e024d4fff0c66e55052ae3973673d8ee67bfe.svg" alt="Pattern Border" className="border-pattern-img" />
          </div>
        </div>
      </div>

      <div className="gallery-marquee-container">
        <div className="gallery-marquee">
          {/* First set of images */}
          {galleryImages.map((src, idx) => (
            <div className="gallery-card" key={`group1-${idx}`}>
              <img src={src} alt="Gallery moment" className="gallery-img" />
            </div>
          ))}
          {/* Second set of images for seamless infinite scroll */}
          {galleryImages.map((src, idx) => (
            <div className="gallery-card" key={`group2-${idx}`}>
              <img src={src} alt="Gallery moment" className="gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
