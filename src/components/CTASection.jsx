import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            marginBottom: 'var(--spacing-lg)',
            animation: 'pulse 2s infinite'
          }}>
            <Rocket size={40} color="white" strokeWidth={2} />
          </div>
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description" style={{ 
            fontSize: '1.125rem', 
            color: 'white', 
            opacity: 0.9,
            marginBottom: 'var(--spacing-lg)'
          }}>
            Join thousands of satisfied customers and experience the best services today.
          </p>
          <button className="cta-button">
            <span>Get Started Now</span>
            <ArrowRight size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
