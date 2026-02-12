import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide trusted Cricket IDs for individual players and premium White Label Exchange Panels (Master/Super Master) for business agents.'
    },
    {
      question: 'How fast are withdrawals and deposits?',
      answer: 'We guarantee instant deposits and lightning-fast withdrawals. Your winnings are transferred to your account within 15-30 minutes, 24/7.'
    },
    {
      question: 'How can I start my own betting business (B2B)?',
      answer: 'You can buy a Master or Admin Panel from us. We provide full technical support, risk management tools, and the best rates to help you start your bookie business.'
    },
    {
      question: 'Is my personal data and money safe?',
      answer: 'Yes, security is our top priority. We use advanced encryption to ensure your personal details remain anonymous and your funds are 100% secure.'
    },
    {
      question: 'What is the minimum amount to start?',
      answer: 'Players can start with a minimum deposit of just ₹500. For B2B Panel pricing and wholesale rates, please contact our support team on WhatsApp.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h3 className="section-heading">Frequently Asked Questions</h3>
          <div className="divider"></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  <ChevronDown 
                    size={20} 
                    strokeWidth={2.5}
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
