// Import necessary libraries and components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../images/logo.png';

export function Header({ mobile, handleMobile }) {
  const [showCategories, setShowCategories] = useState(false);

  const handleHover = () => {
    setShowCategories(true);
  };

  const handleLeave = () => {
    setShowCategories(false);
  };

  /*
    London Used
    Smart Android
    Samsung
    Iphone
    Others
  */

  return (
    <div className='header' id="header-menu">
      <div className="logo">
        <img src={logo} alt="Wayazone logo" width="70" />
      </div>
      <nav className="navBar" id='desktop-menu'>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/categories" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          Categories
          {showCategories && (
            <div className='dropdown'>
              <Link to="/categories/phones">Phones
              <Link to="/categories/phones#londonused" >
                London Used
              </Link>
              <Link to="/categories/phones#smartandroid" >
                Smart Android
              </Link>
              <Link to="/categories/phones#samsung" >
              Samsung  
              </Link>
              <Link to="/categories/phones#iphone" >
              Iphone  
              </Link>
              <Link to="/categories/phones#others" >
              Others  
              </Link>
          </Link>
          <Link to="/categories/accessories">Accessories
              <Link to="/categories/accessories#mp3andspeakers" >
              MP3 And Speakers
              </Link>
              <Link to="/categories/accessories#bluetooth" >
              Bluetooth and AirPhones      
              </Link>
              <Link to="/categories/accessories#smartwatch" >
              Smart Watch 
              </Link>
              <Link to="/categories/accessories#screenguard" >
              Screen Guard and Cover
              </Link>
          </Link>
            </div>
          )}
        </Link>
        <Link to="/">Home</Link>
      </nav>
      <div id="hamburger" onClick={handleMobile}>
        &#x2630;
      </div>
    </div>
  );
}
