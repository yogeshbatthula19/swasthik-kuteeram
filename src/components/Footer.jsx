import React from 'react';
import { Link } from 'react-router-dom';
import DirectionsCard from './DirectionsCard';
import './Footer.css';

const Footer = () => {
  const links = [
    { label: 'HOME', path: '/' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'FACILITIES', path: '#' }
  ];

  return (
    <footer className="footer-section" id="footer-contact">
      <div className="container footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src="/assets/hero-logo.svg" alt="Swastik Kuteeram Logo" className="footer-logo" />
            <h2 className="footer-brand">Swastik Kuteeram</h2>
          </div>
          
          <div className="footer-contact">
            <p>12-140/A, Kanaka Mamidi, Village, Moinabad, Telangana 501504</p>
            <p>+91 76708 73921</p>
            <p>swastik.kuteeram@gmail.com</p>
            <p className="footer-location">HYDERABAD, TELANGANA</p>
          </div>
          
          <p className="footer-copyright">
            &copy;{new Date().getFullYear()} &middot; All rights reserved.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-middle">
          <DirectionsCard />
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <div className="footer-nav">
            {links.map((link) => (
              <Link to={link.path} className="footer-nav-pill" key={link.label}>
                <span>{link.label}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          
          <div className="footer-legal">
            <a href="#">Term of use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Rangoli Pattern */}
      <div className="footer-bottom-pattern">
        <div className="footer-pattern-inner">
          <img src="/assets/c22edecb888ac3eac92a50a283cf1532ad6f5bbf.svg" alt="" />
          <img src="/assets/c22edecb888ac3eac92a50a283cf1532ad6f5bbf.svg" alt="" />
          <img src="/assets/c22edecb888ac3eac92a50a283cf1532ad6f5bbf.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
