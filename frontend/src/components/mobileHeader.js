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
        <div className="category-link">
        <Link onClick={handleCategories}>Categories</Link>
          {showCategories && (
            <div className="dropdownMb">
              <Link to="/categories/phones"  >Phones</Link>
              <div className="nested-dropdown" onClick={handleCategories} >
              <ul>
                <li>
                <Link to="/categories/phones#londonused">London Used</Link>
                </li>
                <li>
                <Link to="/categories/phones#smartandroid">Smart Android</Link>
                </li>
                <li>
                <Link to="/categories/phones#samsung">Samsung</Link>
                </li>
                  <li>
                <Link to="/categories/phones#iphone">iPhone</Link>
                  </li>
                  <li>
                <Link to="/categories/phones#others">Others</Link>
                  </li>
              </ul>
              </div>
            
              <Link to="/categories/accessories">Accessories</Link>
              <div className="nested-dropdown">
                <ul>
                  <li>
                <Link to="/categories/accessories#mp3andspeakers">MP3 And Speakers</Link>
                  </li>
                  <li>
                <Link to="/categories/accessories#bluetooth">Bluetooth and AirPhones</Link>
                  </li>
                  <li>
                <Link to="/categories/accessories#smartwatch">Smart Watch</Link>
                  </li>
                  <li>
                  <Link to="/categories/accessories#screenguard">Screen Guard and Cover</Link>

                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <Link to="/" onClick={handleMobile} >Home</Link>
      </nav>
    </div>
  );
}
