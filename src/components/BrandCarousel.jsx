import React, { useState, useEffect } from "react";

const BrandCarousel = () => {
  const [index, setIndex] = useState(0);

  const brands = [
    { name: "Betfair", logo: "/brands/Betfair-Symbol.png" },
    { name: "Evolution", logo: "/brands/3273.png" },
    { name: "Pragmatic", logo: "/brands/pragmatic-play-dark-logo.jpg" },
    { name: "Ezugi", logo: "/brands/Ezugi.png" },
    { name: "QT", logo: "/brands/qt.png" },
    { name: "One Touch", logo: "/brands/OT.png" },
    { name: "JiLi Casino", logo: "/brands/JiLi.png" },
    { name: "MAC88", logo: "/brands/12359.png" }
  ];

  const visibleCount = window.innerWidth < 768 ? 2 : 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % brands.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="brands-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Gaming Partners</h2>
          <div className="divider"></div>
        </div>

        <div className="brands-carousel">
          <div
            className="brands-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`
            }}
          >
            {brands.map((b, i) => (
              <div className="brand-slide" key={i}>
                <img src={b.logo} alt={b.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
