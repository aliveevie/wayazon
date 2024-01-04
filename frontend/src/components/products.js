// Products component

import React from 'react';
import '../styles/products.css';

export function Products() {
  return (
    <div className="products-container">
      <div className="products">
        <div className='add' >
            <h3>Add Product</h3>
        </div>
        <div className='remove' >
            <h3>Remove Product</h3>
        </div>
      </div>

      <form className="form">
        <label htmlFor="productName">Product Name</label>
        <input type="text" id="productName" name="productName" placeholder="Enter product name"  required />

        <label>
          Image Link
        </label>
        <input type='text' id="name" name="name"  required placeholder='Enter the Link of the Image' />

        <label htmlFor="category">Choose Category</label>
        <select id="category" name="category"  >
          <option value="phones">Phones</option>
          <option value="accessories">Accessories</option>
        </select>

        <label htmlFor="subCategory">Choose SubCategory</label>
        <select id="subCategory" name="subCategory">
          <optgroup label="Phones">
            <option value="londonUsed">London Used</option>
            <option value="smartAndroid">Smart Android</option>
            <option value="samsung">Samsung</option>
            <option value="iphone">iPhone</option>
            <option value="others">Others</option>
          </optgroup>
          <optgroup label="Accessories">
            <option value="mp3Speakers">Mp3 and Speakers</option>
            <option value="bluetoothAirphones">Bluetooth and Airphones</option>
            <option value="smartWatch">Smart Watch</option>
            <option value="screenGuardCover">Screen Guard and Cover</option>
          </optgroup>
        </select>

        <label htmlFor="description">Add Description of Each Item</label>
        <textarea id="description" name="description" placeholder="Enter description"></textarea>
        <label htmlFor="description">Add Description of Each Item</label>
        <textarea id="description" name="description" placeholder="Enter description"></textarea>

        <label htmlFor="color">Color</label>
        <input type="text" id="color" name="color" placeholder="Enter color" />

        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" name="brand" placeholder="Enter brand" />

        <label htmlFor="batterySize">Battery Size</label>
        <input type="text" id="batterySize" name="batterySize" placeholder="Enter battery size" />

        <label htmlFor="batteryCapacity">Battery Capacity</label>
        <input type="text" id="batteryCapacity" name="batteryCapacity" placeholder="Enter battery capacity" />

        <label htmlFor="displaySize">Display Size</label>
        <input type="text" id="displaySize" name="displaySize" placeholder="Enter display size" />

        <label htmlFor="processor">Processor</label>
        <input type="text" id="processor" name="processor" placeholder="Enter processor details" />

        <label htmlFor="storage">Storage</label>
        <input type="text" id="storage" name="storage" placeholder="Enter storage capacity" />

        <label htmlFor="ram">RAM</label>
        <input type="text" id="ram" name="ram" placeholder="Enter RAM size" />

        <label htmlFor="camera">Camera</label>
        <input type="text" id="camera" name="camera" placeholder="Enter camera details" />

        <label htmlFor="connectivity">Connectivity</label>
        <input type="text" id="connectivity" name="connectivity" placeholder="Enter connectivity options" />
        <button type="submit">Add Product</button>
      </form>

    </div>
  );
}
