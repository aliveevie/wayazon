// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install 'react-router-dom' if not already installed

import '../styles/footer.css';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       <Link to="/" >
       <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
       </Link>
       
        <div className="footer-info">

          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="quick-links">
            <h3>Quick Links</h3>
          <Link to="/">Home | </Link>
          <Link to="/about">About | </Link>
          <Link to="/contact">Contact</Link>
        
        </div>
      </div>

      <div className="design-info">
        <a href="http://ibadulkarim.co/" target="_blank" rel="noopener noreferrer">
        <p>Design by Ibrahim Abdulkarim</p>
        </a>
        <p>08138300357</p>
      </div>
    </footer>
  );
};

export default Footer;