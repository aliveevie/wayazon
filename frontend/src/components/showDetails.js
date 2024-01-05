// ShowDetails.jsx

import React from 'react';
import '../styles/showDetails.css';

export function ShowDetails({ currentData, handleCurrentData }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => handleCurrentData(null)}>
          &times; Close
        </button>
        <div className="details-container">
        {currentData.image_link && (
            <div className="image-container">
              <img src={currentData.image_link} alt="Product" />
            </div>
          )}
          <p>Description: {currentData.description}</p>
          <p>Color: {currentData.color}</p>
          <p>Brand: {currentData.brand}</p>
          <p>Battery Size: {currentData.battery_size}</p>
          <p>Battery Capacity: {currentData.battery_capacity}</p>
          <p>Display Size: {currentData.display_size}</p>
          <p>Processor: {currentData.processor}</p>
          <p>Storage: {currentData.storage}</p>
          <p>RAM: {currentData.ram}</p>
          <p>Camera: {currentData.camera}</p>
          <p>Connectivity: {currentData.connectivity}</p>
        
        </div>
      </div>
    </div>
  );
}