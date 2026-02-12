import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/WhatsApp Image 2026-02-08 at 2.20.34 PM.jpeg',
      alt: 'Fairplay Banner 1'
    },
    {
      id: 2,
      image: '/images/WhatsApp Image 2026-02-08 at 4.24.42 PM.jpeg',
      alt: 'Fairplay Banner 2'
    },
    {
      id: 3,
      image: '/images/WhatsApp Image 2026-02-08 at 4.45.42 PM.jpeg',
      alt: 'Fairplay Banner 3'
    },
    {
      id: 4,
      image: '/images/WhatsApp Image 2026-02-08 at 4.52.41 PM.jpeg',
      alt: 'Fairplay Banner 4'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="carousel-slide">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <button 
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
