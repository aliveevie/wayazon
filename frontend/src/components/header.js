import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../images/logo.png';

export function Header({ mobile, handleMobile }) {
  return (
    <div className='header' id="header-menu">
      <div className="logo">
        <img src={logo} alt="Wayazone logo" width="70" />
      </div>
      <nav className="navBar" id='desktop-menu'>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/">Home</Link>
      </nav>
      <div id="hamburger" onClick={handleMobile}>
        &#x2630;
      </div>
    </div>
  );
}
