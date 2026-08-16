import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "sudeer anugu",
    location: "Google Review",
    avatar: "https://ui-avatars.com/api/?name=sudeer+anugu&background=8d6e63&color=fff&size=100",
    text: '"Great place to enjoy with friends & family. Well maintained, very clean rooms, and staff was very helpful.nice garden area & peaceful location. Will definitely recommend the place."'
  },
  {
    id: 2,
    name: "Katipally Bhargav Reddy",
    location: "Google Review",
    avatar: "https://ui-avatars.com/api/?name=Katipally+Bhargav+Reddy&background=546e7a&color=fff&size=100",
    text: '"We thoroughly enjoyed our visit with family; the place is very well maintained and feels like a dream home anyone would love to own. It\'s especially beautiful during the monsoon season and perfect for summer night gatherings and parties."'
  },
  {
    id: 3,
    name: "Ananya Reddy",
    location: "Google Review",
    avatar: "https://ui-avatars.com/api/?name=Ananya+Reddy&background=0277bd&color=fff&size=100",
    text: '"Great place to enjoy with friends and family.Maintenance is great and room and pool are very clean.will definitely recommend the place."'
  }
];

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        <motion.h2 
          className="testimonials-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          HEAR IT FROM OUR GUESTS
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonialsData.map((review, index) => (
            <motion.div 
              className="testimonial-card" 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-profile">
                  <img src={review.avatar} alt={review.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{review.name}</h3>
                    <p className="testimonial-location">{review.location}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <p className="testimonial-text">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="testimonials-controls"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="control-btn" aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#115020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="control-btn" aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#115020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
