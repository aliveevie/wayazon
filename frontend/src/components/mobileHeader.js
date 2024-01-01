import React, { useState } from 'react';
import '../styles/mobileHeader.css';
import { Link } from 'react-router-dom';

export function MobileHeader({handleMobile}) {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="mobile-header">
      <nav className="mobile-sideBar">
        <Link to="/about" onClick={handleMobile} >About Us</Link>
        <Link to="/contact" onClick={handleMobile} >Contact Us</Link>
        <div className="category-link" onClick={handleCategories}>
          Categories
          {showCategories && (
            <div className="dropdown">
              <Link to="/categories/phones" onClick={handleCategories} >Phones</Link>
              <div className="nested-dropdown" onClick={handleCategories} >
                <Link to="/categories/phones#londonused">London Used</Link>
                <Link to="/categories/phones#smartandroid">Smart Android</Link>
                <Link to="/categories/phones#samsung">Samsung</Link>
                <Link to="/categories/phones#iphone">iPhone</Link>
                <Link to="/categories/phones#others">Others</Link>
              </div>
              <Link to="/categories/accessories">Accessories</Link>
              <div className="nested-dropdown">
                <Link to="/categories/accessories#mp3andspeakers">MP3 And Speakers</Link>
                <Link to="/categories/accessories#bluetooth">Bluetooth and AirPhones</Link>
                <Link to="/categories/accessories#smartwatch">Smart Watch</Link>
                <Link to="/categories/accessories#screenguard">Screen Guard and Cover</Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/" onClick={handleMobile} >Home</Link>
      </nav>
    </div>
  );
}
