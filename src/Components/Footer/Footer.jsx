import React from 'react';
import './Footer.css';
import instagram_icon from '../Assests/Instagram.png'
import telegram_icon from'../Assests/Telegram App.png'
import fb_icon from'../Assests/LinkedIn.png'
import twitter_icon from'../Assests/Twitter.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h2 className="logo">Eterno</h2>
        
      </div>
      <div className="columns">

      <div className="footer-column">
        <h3>Newsletter</h3>
        <p>Subscribe To Our Newsletter</p>
        <div className="email-subscribe">
              <input type="email" placeholder="" />
               <button>Subscribe</button>
        </div>

        {/* <input type="email" placeholder="" />
        <button>Subscribe</button> */}
      </div>
      <div className="footer-column">
        <h3>Help & Info</h3>
        <ul>
          <li>About Site</li>
          <li>More Info</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Catalog</h3>
        <ul>
          <li>Necklaces</li>
          <li>Rings</li>
          <li>Earrings</li>
          <li>Bracelets</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: +123456789</li>
          <li>Address: 123 Main St, City</li>
          <li>Email: contact@website.com</li>
        </ul>
      </div>
    </div>
    <div className="icons">
        <img src={instagram_icon} alt="inst" />
        <img src={fb_icon} alt="fb" />
        <img src={twitter_icon} alt="tw" />
        <img src={telegram_icon} alt="tel" />
    </div>
    </div>
  );
};

export default Footer;
