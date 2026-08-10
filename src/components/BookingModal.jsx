import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `Hi Swastik Kuteeram! I'd like to make an enquiry:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Guests:* ${formData.guests}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    // Hardcoded WhatsApp number as +91 7670873921
    const waUrl = `https://wa.me/917670873921?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Book Your Stay</h2>
        <p className="modal-subtitle">Fill in the details and we'll connect with you on WhatsApp.</p>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
          </div>
          
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="date">Check-in Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group half">
              <label htmlFor="guests">No. of Guests</label>
              <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} placeholder="4" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Special Requests / Message</label>
            <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Any specific requirements?"></textarea>
          </div>
          
          <button type="submit" className="btn-submit">
            Send Enquiry 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
