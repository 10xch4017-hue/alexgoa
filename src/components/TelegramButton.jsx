import React from "react";
import { Send } from "lucide-react";

const TelegramButton = ({
  link = "https://t.me/alexgoaoffical",
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="telegram-float-wrapper">
      <button
        className="telegram-float-btn"
        onClick={handleClick}
        aria-label="Contact us on Telegram"
      >
        <div className="telegram-icon-wrapper">
          <Send
            size={28}
            strokeWidth={2}
            color="white"
            className="telegram-icon"
          />
        </div>

        <span className="telegram-text">Telegram Us</span>

        <div className="telegram-ripple"></div>
        <div className="telegram-ripple telegram-ripple-delay"></div>
      </button>
    </div>
  );
};

export default TelegramButton;