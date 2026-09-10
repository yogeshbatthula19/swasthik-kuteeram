import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

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
              <img src={src} alt="Gallery moment" className="gallery-img" loading="lazy" />
            </div>
          ))}
          {/* Second set of images for seamless infinite scroll */}
          {galleryImages.map((src, idx) => (
            <div className="gallery-card" key={`group2-${idx}`}>
              <img src={src} alt="Gallery moment" className="gallery-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
