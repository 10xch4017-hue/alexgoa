import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = ({
  phoneNumber = "447347631909",
  message = `Hello 👋

I’m interested in getting a B2B , B2C panel.

Please share complete details.
Thank you.`,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-float-wrapper">
      <button
        className="whatsapp-float-btn"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact us on WhatsApp"
      >
        <div className="whatsapp-icon-wrapper">
          <MessageCircle
            size={28}
            strokeWidth={2}
            color="white"
            className="whatsapp-icon"
          />
        </div>

        <span className="whatsapp-text">Whatsapp Us</span>

        <div className="whatsapp-ripple"></div>
        <div className="whatsapp-ripple whatsapp-ripple-delay"></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
