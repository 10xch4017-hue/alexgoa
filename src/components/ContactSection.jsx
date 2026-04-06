import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp link format: https://wa.me/<number>?text=<message>
    const whatsappNumber = '447777339208'; // Your number without +
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section className="contact-section" id="contact-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p>Have questions? We'd love to hear from you.</p>
          <div className="divider"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="info-title">Send Us A Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                className="form-input full-width"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-input full-width"
                placeholder="Your Message"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-text">
              Feel free to reach out to us through any of the following channels. 
              We're here to help you with any questions or concerns.
            </p>

            {/* Email */}
            <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="info-icon" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'rgba(13, 115, 119, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)'
              }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</p>
                <p style={{ color: 'var(--text-muted)' }}>
                  <a href="mailto:1sportspanel@gmail.com">Alexgoa9560@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div className="info-icon" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'rgba(13, 115, 119, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                cursor: 'pointer'
              }} onClick={() => window.open('https://wa.me/919784782981', '_blank')}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Phone / WhatsApp</p>
                <p style={{ color: 'var(--text-muted)' }}>
                  <a href="https://wa.me/919784782981" target="_blank" rel="noopener noreferrer">+91 97847 82981</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
