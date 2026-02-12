import React, { useRef, useState } from 'react';
import { Users, Briefcase, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChoosePanel = () => {

  const panels = [
    {
      id: 'b2c',
      Icon: Users,
      title: 'B2C Panel',
      description:
        'Perfect for individual creators, influencers, and personal brands looking to grow directly.',
      link: '/b2c',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'b2b',
      Icon: Briefcase,
      title: 'B2B Panel',
      description:
        'Designed for agencies, resellers, and businesses needing bulk API access and wholesale rates.',
      link: '/b2b',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  const videoSources = [
    '/videos/T20 World Cup Alex Goa.mp4',
    '/videos/Alexgoa copy.mp4',
  ];

  return (
    <section className="choose-panel-section" id="Choose-panel">
      <div className="container">

        {/* 🔹 VIDEO SECTION */}
        <div className="choose-panel-videos">
          {videoSources.map((src, index) => (
            <VideoCard key={index} src={src} />
          ))}
        </div>

        {/* 🔹 SECTION HEADER */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">
              Launch Your Own Online Casino or Sportsbook
            </span>{' '}
            with Our All-in-One White Label Solution
          </h2>
        </div>

        <div className="choose-panel-header">
          <h3 className="panel-heading">Choose Panel you want</h3>
          <div className="divider"></div>
        </div>

        {/* 🔹 PANEL CARDS */}
        <div className="panels-grid">
          {panels.map((panel) => (
            <div key={panel.id} className="panel-card">

              <div className="panel-icon">
                <panel.Icon size={64} strokeWidth={1.5} />
              </div>

              <div className="panel-content">
                <h4 className="panel-title">{panel.title}</h4>
                <p className="panel-description">{panel.description}</p>
              </div>

              {/* ✅ ROUTED BUTTON */}
              <Link to={panel.link} className="panel-btn">
                <span>Know More</span>
                <ArrowRight size={18} strokeWidth={2} />
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePanel;

/* ================= VIDEO CARD COMPONENT ================= */

const VideoCard = ({ src }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="choose-video-card">

      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      </div>

      {/* 🔊 SOUND TOGGLE */}
      <button
        className="video-sound-btn"
        onClick={toggleSound}
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

    </div>
  );
};
