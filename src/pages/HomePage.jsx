import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import ChoosePanel from '../components/ChoosePanel';
import Services from '../components/Services';
import CTASection from '../components/CTASection';
import OptimizedServices from '../components/OptimizedServices';
import StatsCounter from '../components/StatsCounter';
import BrandCarousel from '../components/BrandCarousel';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <>
      <ImageCarousel />

      {/* Animated Background Wrapper */}
      <section className="animated-bg">
        <ChoosePanel />
      </section>

      <Services />
      <CTASection />
      <OptimizedServices />
      <StatsCounter />
      <BrandCarousel />
      <ContactSection />
      <FAQ />
    </>
  );
};

export default HomePage;
