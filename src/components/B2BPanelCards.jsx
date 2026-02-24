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

const B2BPanelCards = () => {

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (panelId) => {
    setImageErrors(prev => ({
      ...prev,
      [panelId]: true
    }));
  };

  const categories = [
  {
    id: 'exchange',
    name: '𝐀𝐋𝐋 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐒𝐈𝐓𝐄',
    icon: <FaExchangeAlt />,
    color: '#667eea',
    colorDark: '#5568d3',
    panels: [
      { id: 1, name: 'allpanelexch.app', logo: 'AllPanel', logoUrl: '/images/panels/allpanel.png', icon: <GiTwoCoins /> },
      { id: 2, name: 'shyambet99.com', logo: 'ShyamBet99', logoUrl: '/images/panels/shyambet99.png', icon: <GiTwoCoins /> },
      { id: 3, name: '99lotus.com', logo: '99Lotus', logoUrl: '/images/panels/99lotus.png', icon: <GiTwoCoins /> },
      { id: 4, name: '99pulse.org', logo: '99Pulse', logoUrl: '/images/panels/99pulse.png', icon: <GiTwoCoins /> },
      { id: 5, name: 'my99exch.tech', logo: 'My99Exch', logoUrl: '/images/panels/my99exch.png', icon: <GiTwoCoins /> },
      { id: 6, name: 'mylaser247.online', logo: 'MyLaser247', logoUrl: '/images/panels/mylaser247.png', icon: <GiTwoCoins /> },
      { id: 7, name: 'mytiger247.com', logo: 'MyTiger247', logoUrl: '/images/panels/mytiger247.png', icon: <GiTwoCoins /> },
      { id: 8, name: 'betbhai9.work', logo: 'BetBhai9', logoUrl: '/images/panels/betbhai9.png', icon: <GiTwoCoins /> },
      { id: 9, name: '222xplay.com', logo: '222XPlay', logoUrl: '/images/panels/222xplay.png', icon: <GiTwoCoins /> },
      { id: 10, name: 'cricxbet99.win', logo: 'CricXBet99', logoUrl: '/images/panels/cricxbet99.png', icon: <GiTwoCoins /> },
      { id: 11, name: 'dhanbet9.com', logo: 'DhanBet9', logoUrl: '/images/panels/dhanbet9.png', icon: <GiTwoCoins /> },
      { id: 12, name: 'lotus247win.com', logo: 'Lotus247Win', logoUrl: '/images/panels/lotus247win.png', icon: <GiTwoCoins /> },
      { id: 13, name: '365goldy.com', logo: '365Goldy', logoUrl: '/images/panels/365goldy.png', icon: <GiTwoCoins /> },
      { id: 14, name: 'matchpari99.com', logo: 'MatchPari99', logoUrl: '/images/panels/matchpari99.png', icon: <GiTwoCoins /> },
      { id: 15, name: 'powerwin.green', logo: 'PowerWin', logoUrl: '/images/panels/powerwin.png', icon: <GiTwoCoins /> },
      { id: 18, name: 'laxzer247.com', logo: 'Laxzer247', logoUrl: '/images/panels/laxzer247.png', icon: <GiTwoCoins /> },
      { id: 19, name: 'match44.com', logo: 'Match44', logoUrl: '/images/panels/match44.png', icon: <GiTwoCoins /> },
      { id: 20, name: '11xbetbhai.com', logo: '11xBetBhai', logoUrl: '/images/panels/11xbetbhai.png', icon: <GiTwoCoins /> },
    ]
  },

  {
    id: 'nineWicket',
    name: '🔰 9Wicket Pattern',
    icon: <FaExchangeAlt />,
    color: '#ff6b6b',
    colorDark: '#e05555',
    panels: [
      { id: 1, name: 'saibaba9.com', logo: 'SaiBaba9', logoUrl: '/images/panels/SaiBaba9.png', icon: <GiTwoCoins /> },
      { id: 2, name: '9wicket.com', logo: '9Wicket', logoUrl: '/images/panels/9Wicket.png', icon: <GiTwoCoins /> },
    ]
  },

  {
    id: 'asia',
    name: '🔰 Asia Pattern',
    icon: <FaExchangeAlt />,
    color: '#00b894',
    colorDark: '#009e7a',
    panels: [
      { id: 1, name: 'goasia9.com', logo: 'GoAsia9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
      { id: 2, name: 'playexch9.co', logo: 'PlayExch9', logoUrl: '/images/panels/PlayExch9.png', icon: <GiTwoCoins /> },
      { id: 3, name: 'sky24x7.co', logo: 'Sky24x7', logoUrl: '/images/panels/Sky24x7.png', icon: <GiTwoCoins /> },
      { id: 4, name: 'asiaexchange.io', logo: 'AsiaExchange', logoUrl: '/images/panels/AsiaExchange.png', icon: <GiTwoCoins /> },
      { id: 5, name: 'worldexch9.com', logo: 'WorldExch9', logoUrl: '/images/panels/WorldExch9.png', icon: <GiTwoCoins /> },
      { id: 6, name: 'fairexchange9.com', logo: 'FairExchange9', logoUrl: '/images/panels/FairExchange9.png', icon: <GiTwoCoins /> },
      { id: 7, name: 'exchange666.com', logo: 'Exchange666', logoUrl: '/images/panels/Exchange666.png', icon: <GiTwoCoins /> },
    ]
  },

  {
    id: '𝗗𝟮𝟰𝟳',
    name: '🔰 𝗗𝟮𝟰𝟳 Pattern',
    icon: <FaExchangeAlt />,
    color: '#f1c40f',
    colorDark: '#d4ac0d',
    panels: [
      { id: 1, name: 'Diam247x.com', logo: 'Diam247x', logoUrl: '/images/panels/Diam247x.png', icon: <GiTwoCoins /> },
      { id: 2, name: 'd247.com', logo: 'd247', logoUrl: '/images/panels/Diamond99.pn.png', icon: <GiTwoCoins /> },
      { id: 3, name: 'Silver247x.com', logo: 'Silver247x', logoUrl: '/images/panels/Silver247x.png', icon: <GiTwoCoins /> },
      { id: 4, name: 'safron247.com', logo: 'Safron247', logoUrl: '/images/panels/Safron247.png', icon: <GiTwoCoins /> },
      { id: 5, name: 'saffron247.com', logo: 'Saffron247', logoUrl: '/images/panels/Safron247.png', icon: <GiTwoCoins /> },
      { id: 6, name: 'silverbook247.com', logo: 'SilverBook247', logoUrl: '/images/panels/Silver247x.png', icon: <GiTwoCoins /> },
    ]
  },

  {
  id: 'diamond',
  name: '🔰 Diamond Pattern',
  icon: <FaGem />,
  color: '#00b894',
  colorDark: '#00997a',
  panels: [
    { id: 1, name: 'diamondexch99.now', logo: 'DiamondExch99', logoUrl: '/images/panels/DiamondExch99.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'saffronexch.run', logo: 'SaffronExch', logoUrl: '/images/panels/Safron247.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'kalyanbook9.com', logo: 'KalyanBook9', logoUrl: '/images/panels/KalyanBook9.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'chambet9.com', logo: 'Chambet9', logoUrl: '/images/panels/Chambet9.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'ishaexch9.com', logo: 'IshaExch9', logoUrl: '/images/panels/IshaExch9.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'goexch9.com', logo: 'GoExch9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 7, name: 'goid9.com', logo: 'GoId9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 8, name: '6wickets.co', logo: '6Wickets', logoUrl: '/images/panels/6Wickets.png', icon: <GiTwoCoins /> },
    { id: 9, name: 'diamond99.com', logo: 'Diamond99', logoUrl: '/images/panels/Diamond99.png', icon: <GiTwoCoins /> },
    { id: 10, name: 'goldenexch99.in', logo: 'GoldenExch99', logoUrl: '/images/panels/GoldenExch99.png', icon: <GiTwoCoins /> },
    { id: 11, name: 'peachexch.com', logo: 'PeachExch', logoUrl: '/images/panels/PeachExch.png', icon: <GiTwoCoins /> },
    { id: 12, name: 'silverexch.com', logo: 'SilverExch', logoUrl: '/images/panels/SilverExch.png', icon: <GiTwoCoins /> }
  ]
},


  {
  id: 'dream555',
  name: '🔰 Dream555 Pattern',
  icon: <FaCrown />,
  color: '#fdcb6e',
  colorDark: '#e1a84f',
  panels: [
    { id: 1, name: 'dream555.com', logo: 'Dream555', logoUrl: '/images/panels/Dream555.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'kinginplay.com', logo: 'KingInPlay', logoUrl: '/images/panels/KingExch365.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'abexch365.com', logo: 'AbExch365', logoUrl: '/images/panels/AbExch365.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'kingexch365.com', logo: 'KingExch365', logoUrl: '/images/panels/KingExch365.png', icon: <GiTwoCoins /> }
  ]
}
,

{
  id: 'lotus',
  name: '🔰 Lotus Pattern',
  icon: <FaLeaf />,
  color: '#e84393',
  colorDark: '#c21874',
  panels: [
    { id: 1, name: 'lordsexch.com', logo: 'LordsExch', logoUrl: '/images/panels/LordsExch.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'lotus247.com', logo: 'Lotus247', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'lotusbook.io', logo: 'LotusBook', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'lotusbook247.io', logo: 'LotusBook247', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'lotusexch.com', logo: 'LotusExch', logoUrl: '/images/panels/LotusExch.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'lords365.com', logo: 'Lords365', logoUrl: '/images/panels/Lords365.png', icon: <GiTwoCoins /> },
    { id: 7, name: 'lotusking.com', logo: 'LotusKing', logoUrl: '/images/panels/LotusKing.png', icon: <GiTwoCoins /> },
    { id: 8, name: 'lotus888.com', logo: 'Lotus888', logoUrl: '/images/panels/Lotus888.png', icon: <GiTwoCoins /> },
    { id: 9, name: 'lotus7book.com', logo: 'Lotus7Book', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 10, name: 'goexch247.com', logo: 'GoExch247', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 11, name: 'lotusexch247.com', logo: 'LotusExch247', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 12, name: '22xplay.com', logo: '22xPlay', logoUrl: '/images/panels/22xPlay.png', icon: <GiTwoCoins /> },
    { id: 13, name: 'thelotusbook.com', logo: 'TheLotusBook', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 14, name: 'lotusbook247.games', logo: 'LotusBook247Games', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> }
  ]
},

{
  id: 'fairbook',
  name: '🔰 Fairbook Pattern',
  icon: <FaBook />,
  color: '#0984e3',
  colorDark: '#0865b0',
  panels: [
    { id: 1, name: 'exch333.com', logo: 'Exch333', logoUrl: '/images/panels/Exch333.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'abexch9.com', logo: 'AbExch9', logoUrl: '/images/panels/AbExch9.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'lucky7.games', logo: 'Lucky7Games', logoUrl: '/images/panels/Lucky7Games.png', icon: <GiTwoCoins /> }
  ]
},

{
  id: 'exch444',
  name: '🔰 Exch444 Pattern',
  icon: <FaExchangeAlt />,
  color: '#6c5ce7',
  colorDark: '#5649c0',
  panels: [
    { id: 1, name: 'exch444.com', logo: 'Exch444', logoUrl: '/images/panels/Exch444.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'lotusbook9.com', logo: 'LotusBook9', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'lotusbook7.co', logo: 'LotusBook7', logoUrl: '/images/panels/Lotus247.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'kingexch9.com', logo: 'KingExch9', logoUrl: '/images/panels/KingExch365.png', icon: <GiTwoCoins /> }
  ]
},


{
  id: 'ice',
  name: '🔰 Ice Pattern',
  icon: <FaSnowflake />,
  color: '#00cec9',
  colorDark: '#00a8a5',
  panels: [
    { id: 1, name: 'ice247.co', logo: 'Ice247', logoUrl: '/images/panels/Ice247.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'gocric9.com', logo: 'GoCric9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'iceasia9.com', logo: 'IceAsia9', logoUrl: '/images/panels/IceAsia9.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'icebook9.com', logo: 'IceBook9', logoUrl: '/images/panels/IceBook9.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'icebook777.com', logo: 'IceBook777', logoUrl: '/images/panels/IceBook9.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'iceexchange.com', logo: 'IceExchange', logoUrl: '/images/panels/IceBook9.png', icon: <GiTwoCoins /> }
  ]
},

{
  id: 'radhe',
  name: '🔰 Radhe Pattern',
  icon: <FaOm />,
  color: '#e17055',
  colorDark: '#c75b42',
  panels: [
    { id: 1, name: 'gobook9.com', logo: 'GoBook9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'radheexch9.club', logo: 'RadheExch9', logoUrl: '/images/panels/RadheExch.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'gomatch9.com', logo: 'GoMatch9', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'icebook7.com', logo: 'IceBook7', logoUrl: '/images/panels/IceBook9.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'indiaexch.com', logo: 'IndiaExch', logoUrl: '/images/panels/brand_logo.svg', icon: <GiTwoCoins /> },
    { id: 6, name: 'silverexch247.com', logo: 'SilverExch247', logoUrl: '/images/panels/brand_logo (1).svg', icon: <GiTwoCoins /> }
  ]
},


{
  id: 'sky',
  name: '🔰 Sky Pattern',
  icon: <FaCloud />,
  color: '#74b9ff',
  colorDark: '#4f8fd6',
  panels: [
    { id: 1, name: 'skyexch.art', logo: 'SkyExchArt', logoUrl: '/images/panels/SkyExchArt.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'skyexchx.com', logo: 'SkyExchX', logoUrl: '/images/panels/SkyExchX.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'goexch365.com', logo: 'GoExch365', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'masterexch.com', logo: 'MasterExch', logoUrl: '/images/panels/MasterExch.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'skyexch247.online', logo: 'SkyExch247', logoUrl: '/images/panels/SkyExch247.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'skyfair.vip', logo: 'SkyFairVIP', logoUrl: '/images/panels/SkyFairVIP.png', icon: <GiTwoCoins /> }
  ]
},


{
  id: 'ten',
  name: '🔰 Ten Pattern',
  icon: <FaDice />,
  color: '#fd79a8',
  colorDark: '#e0568b',
  panels: [
    { id: 1, name: 'tenexch.com', logo: 'TenExch', logoUrl: '/images/panels/TenExch.png', icon: <GiTwoCoins /> }
  ]
},


{
  id: 'world',
  name: '🔰 World Pattern',
  icon: <FaGlobe />,
  color: '#6c5ce7',
  colorDark: '#5a4bcf',
  panels: [
    { id: 1, name: 'allpanel777.now', logo: 'AllPanel777', logoUrl: '/images/panels/AllPanel777.png', icon: <GiTwoCoins /> },
    { id: 2, name: 'taj777.now', logo: 'Taj777', logoUrl: '/images/panels/Taj777.png', icon: <GiTwoCoins /> },
    { id: 3, name: 'ishaexch777.com', logo: 'IshaExch777', logoUrl: '/images/panels/IshaExch777.png', icon: <GiTwoCoins /> },
    { id: 4, name: 'world777.now', logo: 'World777', logoUrl: '/images/panels/World777.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'goexch777.com', logo: 'GoExch777', logoUrl: '/images/panels/GoAsia9.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'saffron777.com', logo: 'Saffron777', logoUrl: '/images/panels/SaffronSevenSeven.png', icon: <GiTwoCoins /> },
    { id: 7, name: '6wickets777.com', logo: '6Wickets777', logoUrl: '/images/panels/6Wickets.png', icon: <GiTwoCoins /> },
    { id: 8, name: 'golden7777.com', logo: 'Golden7777', logoUrl: '/images/panels/Golden7777.png', icon: <GiTwoCoins /> },
    { id: 9, name: 'silverbet777.com', logo: 'SilverBet777', logoUrl: '/images/panels/brand_logo (1).svg', icon: <GiTwoCoins /> },
    { id: 10, name: 'ambani777.com', logo: 'Ambani777', logoUrl: '/images/panels/AmbaniSevenSeven.png', icon: <GiTwoCoins /> },
    { id: 11, name: 'kalyanbook777.com', logo: 'KalyanBook777', logoUrl: '/images/panels/KalyanBookSevenSeven.png', icon: <GiTwoCoins /> }
  ]
},


{
  id: 'premium',
  name: '🔰 Others Premium Sites',
  icon: <FaStar />,
  color: '#ffffffff',
  colorDark: '#1e2728',
  panels: [
    { id: 1, name: 'diamexch.com', logo: 'DiamExch', logoUrl: '/images/panels/c51a5012-4.jpg', icon: <GiTwoCoins /> },
    { id: 2, name: 'cricbet99x.com', logo: 'CricBet99x', logoUrl: '/images/panels/6215c4e5-a.jpg', icon: <GiTwoCoins /> },
    { id: 3, name: '99exch.io', logo: '99Exch', logoUrl: '/images/panels/3ab0cbc0-8.jpg', icon: <GiTwoCoins /> },
    { id: 4, name: 'aura444.com', logo: 'Aura444', logoUrl: '/images/panels/Aura444.png', icon: <GiTwoCoins /> },
    { id: 5, name: 'allow9.com', logo: 'Allow9', logoUrl: '/images/panels/Allow9.png', icon: <GiTwoCoins /> },
    { id: 6, name: 'dream444.net', logo: 'Dream444', logoUrl: '/images/panels/Dream444.png', icon: <GiTwoCoins /> },
    { id: 7, name: 'bazigar365.com', logo: 'Bazigar365', logoUrl: '/images/panels/Bazigar365.png', icon: <GiTwoCoins /> },
    { id: 8, name: 'jaigovinda7.com', logo: 'JaiGovinda7', logoUrl: '/images/panels/brand_logooo (2).svg', icon: <GiTwoCoins /> },
    { id: 9, name: 'the100exch.com', logo: 'The100Exch', logoUrl: '/images/panels/The100Exch.png', icon: <GiTwoCoins /> },
    { id: 10, name: 'cricketsbuz.com', logo: 'CricketsBuz', logoUrl: '/images/panels/CricketsBuz.png', icon: <GiTwoCoins /> },
    { id: 11, name: 'bsf2020.com', logo: 'BSF2020', logoUrl: '/images/panels/wel-come-background.webp', icon: <GiTwoCoins /> },
    { id: 12, name: 'xchangeon.live', logo: 'WinbuzzExch', logoUrl: '/images/panels/WinbuzzExch.png', icon: <GiTwoCoins /> },
    { id: 13, name: 'reddy222.com', logo: 'Reddy222', logoUrl: '/images/panels/Reddy222.png', icon: <GiTwoCoins /> },
    { id: 14, name: 'reddy444.com', logo: 'Reddy444', logoUrl: '/images/panels/Reddy444.png', icon: <GiTwoCoins /> }
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
    const phoneNumber = "12267934922";
    const message = `Hello b2x I need B2B ${panel.name} panel`;
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
            <span>PREMIUM B2B PANELS</span>
          </div>
          <h1 className="floating-title">
            Create Your Own <span className="highlight-float">B2B Site</span><br />
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

export default B2BPanelCards;
