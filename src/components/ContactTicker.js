import React from 'react';
import '../styles/ContactTicker.css'; // Make sure path is correct

function ContactTicker() {
  const items = (
    <>
      <span className="ticker-item">
        📞 <a href="tel:0701067110">0701 067 110</a>
      </span>
      <span className="ticker-item">
        📞 <a href="tel:0720108239">0720 108 239</a>
      </span>
      <span className="ticker-item">
        ✉️ <a href="mailto:cheronojadvocates08@gmail.com">cheronojadvocates08@gmail.com</a>
      </span>
    </>
  );

  return (
    <div className="contact-ticker">
      <div className="ticker-track">
        {items}
        {/* Duplicate for seamless infinite loop */}
        <div className="ticker-duplicate">{items}</div>
      </div>
    </div>
  );
}

export default ContactTicker;