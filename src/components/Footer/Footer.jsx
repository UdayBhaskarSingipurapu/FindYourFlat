import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

function Footer() {
  return (
    <div className="footer bg-dark text-white text-center py-4">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook size={30} className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter size={30} className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram size={30} className="icon" />
        </a>
      </div>
      <ul className="footer-links d-flex justify-content-center mt-3">
        <li><Link to="/about" className="text-white">About Us</Link></li>
        <li><Link to="/contact" className="text-white">Contact</Link></li>
        <li><Link to="/terms" className="text-white">Terms of Service</Link></li>
        <li><Link to="/privacy" className="text-white">Privacy Policy</Link></li>
      </ul>
      <p className="mt-4">© 2024 Find Your Flat. All rights reserved.</p>
    </div>
  );
}

export default Footer;
