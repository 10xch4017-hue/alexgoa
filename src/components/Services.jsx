import React from 'react';
import { 
  Dices, 
  CreditCard, 
  Wrench, 
  Settings, 
  Gamepad2, 
  FileText, 
  Boxes, 
  Monitor, 
  DollarSign, 
  Wallet 
} from 'lucide-react';

const Services = () => {
  const services = [
    { Icon: Dices, title: 'Digital Casino Games', color: '#E74C3C' },
    { Icon: CreditCard, title: 'Easy Payment Solution', color: '#3498DB' },
    { Icon: Wrench, title: 'Best APIs Services', color: '#1ABC9C' },
    { Icon: Settings, title: 'Integration API & Sportsbook Solutions', color: '#9B59B6' },
    { Icon: Gamepad2, title: 'Live Casino Bundle', color: '#E67E22' },
    { Icon: FileText, title: 'Licensing', color: '#F1C40F' },
    { Icon: Boxes, title: 'Casino Games Grouping', color: '#16A085' },
    { Icon: Monitor, title: 'Turnkey Casino Software', color: '#2980B9' },
    { Icon: DollarSign, title: 'Standalone Bonus System', color: '#27AE60' },
    { Icon: Wallet, title: 'Online Casino Payment Solutions', color: '#8E44AD' }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-heading">Our Services</h3>
          <div className="divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                <service.Icon size={48} strokeWidth={1.5} />
              </div>
              <h4 className="service-title">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
