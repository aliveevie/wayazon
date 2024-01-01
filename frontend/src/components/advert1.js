import React from 'react';
import '../styles/advertOne.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';

export function AdvertOne() {
  return (
    <>
        <div className="advert">
      <h1 className="advert-title">
        Waya<span className="zone">Zone</span>
      </h1>
      <p className="advert-description">
        Discover the Pinnacle of Jigawa State Online Shopping with WayaZone.
        Your Ultimate Destination for Unmatched Experiences!
      </p>
      <Link to="/about" className="button" >
        Learn More
      </Link>
    </div>
    <div className='advert2' >
      <p>Start Exploring Wayazone</p>
      <p className='button' >Start Shopping Now</p>
    </div>

    </>
  );
}
