import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';



// Pages
import HomePage from './pages/HomePage';
import B2BPage from './pages/B2BPage';
import B2CPage from './pages/B2CPage';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';

// Styles
import './styles.css';
import './B2BPanelCards.css';
import './B2CPage.css';
import './WhatsAppButton.css';
import './ScrollToTop.css';

// Scroll to top when route changes
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  console.log('App rendering');
  
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="app">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/b2b" element={<B2BPage />} />
            <Route path="/b2c" element={<B2CPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Buttons */}
        <WhatsAppButton 
          phoneNumber="447777339208"
          message="Hi! I'm interested in your services."
        />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;