import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Experience from '../components/Experience';
import Celebrate from '../components/Celebrate';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home = ({ onOpenBooking }) => {
  return (
    <main>
      <HeroSection onOpenBooking={onOpenBooking} />
      <Features />
      <Experience />
      <Celebrate />
      <Gallery />
      <Testimonials />
    </main>
  );
};

export default Home;
