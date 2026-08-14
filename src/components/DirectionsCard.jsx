import React from 'react';
import './DirectionsCard.css';

const DirectionsCard = () => {
  return (
    <div className="directions-card">
      <div className="directions-map-wrapper">
        <iframe 
          src="https://maps.google.com/maps?q=Swastik%20Kuteeram,%20Road%20No.%2012,%20Laxmi%20Nagar,%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Swastik Kuteeram Map"
        ></iframe>
      </div>
      
      <div className="directions-info">
        <h3 className="directions-title">Swastik Kuteeram</h3>
        <p className="directions-address">
          C644+F6, Proddutur, Telangana 501203
        </p>
        
        <div className="directions-actions">
          <a href="tel:+917670873921" className="directions-btn btn-call">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call
          </a>
          <a href="https://maps.app.goo.gl/H7jciQEC5za7xmyd8" target="_blank" rel="noopener noreferrer" className="directions-btn btn-nav">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            Directions
          </a>
        </div>
      </div>
      
      <div className="directions-footer">
        <div style={{ flex: 1 }}></div>
        <a href="https://maps.app.goo.gl/H7jciQEC5za7xmyd8" target="_blank" rel="noopener noreferrer" className="open-maps-link">
          Open in Maps
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DirectionsCard;
