import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './App.css';

const ScrollToContact = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer-contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href="#footer-contact" onClick={handleScroll} className="nav-link">
      Contact Us
    </a>
  );
};

function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      // Show header if scrolled past 80% of viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    // Always check scroll position on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header should be visible if we scrolled enough OR if we are not on the home page
  const showHeader = !isHomePage || isHeaderVisible;

  return (
    <div className="app-container">
      <header className={`header ${showHeader ? 'header-visible' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="header-logo-link">
            <img src="/assets/hero-logo.png" alt="Swastik Kuteeram Logo" className="header-logo" />
          </Link>
          <nav className="header-nav">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
            <ScrollToContact />
            <button className="header-book-btn" onClick={() => setIsBookingOpen(true)}>Book Now</button>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home onOpenBooking={() => setIsBookingOpen(true)} />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
      
      <a 
        href="https://wa.me/917670873921?text=Hi%20Swastik%20Kuteeram,%20I%20would%20like%20to%20know%20more%20about%20your%20staycation."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" />
      </a>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
