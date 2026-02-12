import React from 'react';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Target, 
  BarChart3, 
  Headphones 
} from 'lucide-react';

const OptimizedServices = () => {
  const services = [
    {
      Icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized infrastructure.',
      color: '#F1C40F'
    },
    {
      Icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is protected with enterprise-grade security measures.',
      color: '#3498DB'
    },
    {
      Icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Seamlessly works across all devices and screen sizes.',
      color: '#9B59B6'
    },
    {
      Icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your audience with accurate and effective targeting.',
      color: '#E74C3C'
    },
    {
      Icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Get detailed analytics and insights to make informed decisions.',
      color: '#1ABC9C'
    },
    {
      Icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock.',
      color: '#E67E22'
    }
  ];

  return (
    <section className="optimized-services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Optimized Services</h2>
          <p>Experience the best in class services designed for performance and reliability.</p>
          <div className="divider"></div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card optimized-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                <service.Icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="panel-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedServices;
