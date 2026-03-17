import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { 
  MdSwapHoriz, 
  MdCasino, 
  MdLocalFlorist, 
  MdStars,
  MdTrendingUp,
  MdVerified
} from 'react-icons/md';
import { 
  FaExchangeAlt, 
  FaDice, 
  FaCrown, 
  FaRocket,
  FaBolt,
  FaGem,
  FaLeaf,
  FaBook,
  FaSnowflake,
  FaOm,
  FaCloud,
  FaGlobe,
  FaStar
} from 'react-icons/fa';
import { 
  GiPokerHand, 
  GiDiamondTrophy, 
  GiLotus,
  GiTwoCoins
} from 'react-icons/gi';
import { 
  IoMdTrophy 
} from 'react-icons/io';
import {
  RiVipCrownFill, 
  RiExchangeDollarFill
} from 'react-icons/ri';
import {
  BiSolidCrown,
  BiTrophy
} from 'react-icons/bi';
import {
  HiSparkles
} from 'react-icons/hi';

const B2CPage = () => {

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (panelId) => {
    setImageErrors(prev => ({
      ...prev,
      [panelId]: true
    }));
  };

  const categories = [
  
      {
    id: 'premium',
    name: '🔰  Premium Sites',
    icon: <FaStar />,
    color: '#d4a310ff',
    colorDark: '#1e2728',
    panels: [
      { id: 1, name: 'alexb2c.com', logo: 'AlexB2C', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 2, name: 'd247.1sports.in', logo: '1sports', logoUrl: '/images/panels/public (1).avif', icon: <GiTwoCoins /> },
      { id: 3, name: 'mahakal77.com', logo: 'Mahakal77', logoUrl: '/images/panels/public (2).svg', icon: <GiTwoCoins /> },
      { id: 4, name: 'xchangeon.live', logo: 'XChangeOnLive', logoUrl: '/images/panels/public2222.png', icon: <GiTwoCoins /> },
      { id: 5, name: 'radheexch9.club', logo: 'RadheExch9', logoUrl: '/images/panels/radhe-exchange.png', icon: <GiTwoCoins /> },
      { id: 6, name: 'countyexch.in', logo: 'CountyExchIn', logoUrl: '/images/panels/my99exch.black.png', icon: <GiTwoCoins /> },
      { id: 7, name: 'mamaexch99.com', logo: 'MamaExch99', logoUrl: '/images/panels/public3333333.svg', icon: <GiTwoCoins /> },
      { id: 8, name: '9wicket.alexb2c.com', logo: 'JaiGovinda7', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 9, name: 'aura.alexb2c.com', logo: 'The100Exch', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 10, name: 'cap.alexb2c.com', logo: 'CricketsBuz', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 11, name: 'd247.alexb2c.com', logo: 'BSF2020', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 12, name: 'radhe.alexb2c.com', logo: 'WinbuzzExch', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 13, name: 'world.alexb2c.com', logo: 'Reddy222', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> },
      { id: 14, name: 'unicorn.alexb2c.com', logo: 'Reddy444', logoUrl: '/images/panels/public.avif', icon: <GiTwoCoins /> }
    ]
  },
    {
    id: 'exchange',
    name: '𝐀𝐋𝐋 𝐒𝐈𝐓𝐄',
    icon: <FaExchangeAlt />,
    color: '#667eea',
    colorDark: '#5568d3',
    panels: [
      { id: 1, name: 'winbuzz399.com', logo: 'Winbuzz399', logoUrl: '/images/panels/winbuzz399.png', icon: <GiTwoCoins /> },
      { id: 2, name: 'Laserbook399.com', logo: 'Laserbook399', logoUrl: '/images/panels/laserbook399.png', icon: <GiTwoCoins /> },
      { id: 3, name: 'Fairplays365.com', logo: 'Fairplays365', logoUrl: '/images/panels/fairplays365.png', icon: <GiTwoCoins /> },
      { id: 4, name: 'diamond399.com', logo: 'Diamond399', logoUrl: '/images/panels/diamond399.png', icon: <GiTwoCoins /> },
      { id: 5, name: 'tiger399.com', logo: 'Tiger399', logoUrl: '/images/panels/tiger399.png', icon: <GiTwoCoins /> },
      { id: 6, name: '11exch399.com', logo: '11exch399', logoUrl: '/images/panels/11exch399.png', icon: <GiTwoCoins /> },
      { id: 7, name: 'Lotus399.co', logo: 'Lotus399', logoUrl: '/images/panels/lotus399.png', icon: <GiTwoCoins /> },
      { id: 8, name: 'Reddybook399.com', logo: 'Reddybook399', logoUrl: '/images/panels/reddybook399.png', icon: <GiTwoCoins /> },
      { id: 9, name: 'reddybook09.com', logo: 'Reddybook09', logoUrl: '/images/panels/reddybook09.png', icon: <GiTwoCoins /> },
      { id: 10, name: 'Lotus365official.ai', logo: 'Lotus365official', logoUrl: '/images/panels/otus365official.png', icon: <GiTwoCoins /> },
      { id: 11, name: 'Maharaja111.com', logo: 'Maharaja111', logoUrl: '/images/panels/maharaja111.png', icon: <GiTwoCoins /> },
      { id: 12, name: 'Gamerzone.club', logo: 'Gamerzone', logoUrl: '/images/panels/gamerzone.png', icon: <GiTwoCoins /> },
      { id: 13, name: 'victoryexch.club', logo: 'VictoryExch', logoUrl: '/images/panels/victoryexch.png', icon: <GiTwoCoins /> },
      { id: 14, name: '11exch399.online', logo: '11exch399Online', logoUrl: '/images/panels/11exch399.png', icon: <GiTwoCoins /> },
      { id: 15, name: 'sattaexch399.online', logo: 'SattaExch399', logoUrl: '/images/panels/sattaexch399.png', icon: <GiTwoCoins /> },
      { id: 16, name: 'gold399.online', logo: 'Gold399', logoUrl: '/images/panels/gold399.png', icon: <GiTwoCoins /> },
      { id: 17, name: 'Yolo399.online', logo: 'Yolo399', logoUrl: '/images/panels/yolo399.png', icon: <GiTwoCoins /> },
      { id: 18, name: 'unicon360.com', logo: 'Unicon360', logoUrl: '/images/panels/unicon360.png', icon: <GiTwoCoins /> },
      { id: 19, name: 'world399.com', logo: 'World399', logoUrl: '/images/panels/world399.png', icon: <GiTwoCoins /> },
      { id: 20, name: 'ultrawin399.com', logo: 'UltraWin399', logoUrl: '/images/panels/ltrawin399.png', icon: <GiTwoCoins /> },
      { id: 21, name: 'bharatbook399.com', logo: 'Bharatbook399', logoUrl: '/images/panels/bharatbook399.png', icon: <GiTwoCoins /> },
      { id: 22, name: 'betpro399.online', logo: 'Betpro399', logoUrl: '/images/panels/betpro399.png', icon: <GiTwoCoins /> },
    ]
  }
  

  


];


  const FloatingPanel = ({ panel, color, colorDark, categoryId, index }) => {
    const hasError = imageErrors[`${categoryId}-${panel.id}`];

    return (
      <div
        className="floating-panel"
        style={{
          '--panel-color': color,
          '--panel-color-dark': colorDark,
          animationDelay: `${index * 0.15}s`
        }}
      >
        <div className="floating-logo">
          {!hasError ? (
            <img
              src={panel.logoUrl}
              alt={panel.logo}
              className="logo-img"
              onError={() => handleImageError(`${categoryId}-${panel.id}`)}
            />
          ) : (
            <span className="logo-text-floating">{panel.logo}</span>
          )}
        </div>

        <h3 className="panel-name">{panel.name}</h3>

        <button
  type="button"
  className="floating-btn"
  onClick={() => {
    const phoneNumber = "7346383179";
    const message = `Hello b2x I need B2C ${panel.name} panel`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  }}
>
  <span>Get Panel</span>
  <ExternalLink size={16} />
</button>

      </div>
    );
  };

  return (
    <section className="floating-panels-section">
      <div className="container">

        <div className="floating-hero">
          <div className="premium-badge-float">
            <MdVerified size={20} />
            <span>PREMIUM B2C PANELS</span>
          </div>
          <h1 className="floating-title">
            Create Your Own <span className="highlight-float">B2C Site</span><br />
            On Your Domain Today
          </h1>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="category-float-section">
            <div className="category-float-header">
  <h2 
    className="cat-title" 
    style={{ color: category.color }}
  >
    {category.name}
  </h2>
</div>


            <div className="floating-grid">
              {category.panels.map((panel, index) => (
                <FloatingPanel
                  key={`${category.id}-${panel.id}`}
                  panel={panel}
                  color={category.color}
                  colorDark={category.colorDark}
                  categoryId={category.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default B2CPage;
