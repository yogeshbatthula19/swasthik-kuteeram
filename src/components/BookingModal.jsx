import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('http://127.0.0.1:3001/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', phone: '', email: '', date: '', guests: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage('Network error. Ensure the local server is running.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Book Your Stay</h2>
        <p className="modal-subtitle">Fill in the details and we'll send you a confirmation email.</p>
        
        {status === 'success' ? (
          <div className="success-message">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Enquiry Sent Successfully!</h3>
            <p>Please check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
              </div>
              <div className="form-group half">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
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

            {status === 'error' && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
            
            <button type="submit" className="btn-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'} 
              {status !== 'loading' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
