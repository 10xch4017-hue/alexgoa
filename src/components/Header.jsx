import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'B2B', href: '/b2b' },
    { label: 'B2C', href: '/b2c' },
    { label: 'FAQS', href: '/faq' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-inner">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img 
              src="/images/logo.png" 
              alt="Alex Goa" 
              className="logo-img"
            />
          </Link>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link 
                  to={item.href} 
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#Choose-panel" className="btn-choose-panel">
            <Layers size={18} strokeWidth={2} />
            <span>Choose-panel</span>
          </a>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} strokeWidth={2} color="var(--text-primary)" />
          ) : (
            <Menu size={28} strokeWidth={2} color="var(--text-primary)" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
