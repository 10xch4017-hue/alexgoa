import React, { useState, useEffect, useRef } from 'react';
import { Users, Trophy, DollarSign, Handshake } from 'lucide-react';

const StatsCounter = () => {
  const [counts, setCounts] = useState({ users: 0, games: 0, revenue: 0, partners: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      label: 'Active Users', 
      value: 50000, 
      key: 'users', 
      suffix: '+',
      Icon: Users,
      color: '#3498DB'
    },
    { 
      label: 'Games Played', 
      value: 2500000, 
      key: 'games', 
      suffix: '+',
      Icon: Trophy,
      color: '#F1C40F'
    },
    { 
      label: 'Revenue Generated', 
      value: 5000000, 
      key: 'revenue', 
      prefix: '$', 
      suffix: '+',
      Icon: DollarSign,
      color: '#2ECC71'
    },
    { 
      label: 'Partners', 
      value: 1000, 
      key: 'partners', 
      suffix: '+',
      Icon: Handshake,
      color: '#9B59B6'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounts(prev => {
        const newCounts = {};
        let allComplete = true;

        stats.forEach(stat => {
          const increment = stat.value / steps;
          const newValue = Math.min(prev[stat.key] + increment, stat.value);
          newCounts[stat.key] = Math.floor(newValue);
          
          if (newValue < stat.value) {
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(interval);
          // Set final exact values
          stats.forEach(stat => {
            newCounts[stat.key] = stat.value;
          });
        }

        return newCounts;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div style={{ 
                marginBottom: '1rem',
                color: stat.color,
                display: 'flex',
                justifyContent: 'center'
              }}>
                <stat.Icon size={48} strokeWidth={1.5} />
              </div>
              <div className="stat-number">
                {stat.prefix || ''}{formatNumber(counts[stat.key])}<span className="stat-suffix">{stat.suffix || ''}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
