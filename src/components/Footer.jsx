import React from 'react';
import { MessageCircle, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'B2B', href: '/b2b' },
    { label: 'B2C', href: '/b2c' }
  ];

  const legalLinks = [
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Term of service', href: '/terms-condition' },
    { label: 'Responsible Gaming', href: '/responsible-gaming' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <a href="/" className="footer-logo">
                <img src="/images/logo.png" alt="Alex Goa" />
              </a>
              <p className="footer-text">
                <strong>Alex Goa</strong> offers trusted cricket betting IDs with seamless access 
                to top-tier platforms. Experience secure transactions, dedicated support, and 
                unmatched reliability. Start your winning journey with us today.
              </p>
              <div className="footer-social">
                <a href="https://api.whatsapp.com/send/?phone=7777339208&text&type=phone_number&app_absent=0" className="social-link" aria-label="WhatsApp">
                  <MessageCircle size={24} strokeWidth={2} />
                </a>
                <a href="https://www.instagram.com/1_sports_9" className="social-link" aria-label="Instagram">
                  <Instagram size={24} strokeWidth={2} />
                </a>
                <a href="#" className="social-link" aria-label="Telegram">
                  <Send size={24} strokeWidth={2} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>− {link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Legal Terms</h4>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>− {link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="disclaimer">
              This Website Is Only For 18+, If you are under 18 year. Please Leave This Website Immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
