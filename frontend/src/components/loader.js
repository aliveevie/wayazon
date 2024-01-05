import React from 'react';
import '../styles/loader.css';

export function Loader({loader, handleLoader}) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}
