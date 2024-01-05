// Products component
import { useState } from 'react';
import React from 'react';
import '../styles/products.css';
import { Loader } from './loader';
import { Success } from './success';

export function Products() {

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [removeProduct, setRemoveProduct] = useState(false);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  function handleShowProducts(){
        setShowProducts(true);
  }

  function handleLoader(){
      setLoader(true);
      setShowAddProduct(false);
      setRemoveProduct(false);
      setSuccess(false);
  }

  function handleAddProducts(){
        setShowAddProduct(true);
  }

  function handleRemoveProduct(){
      setRemoveProduct(true);
  }

  function handleCloseProduct(){
      setShowAddProduct(false);
      setRemoveProduct(false);
  }

  const [formData, setFormData] = useState({
    productName: '',
    imageLink: '',
    category: '',
    subCategory: '',
    description: '',
    color: '',
    brand: '',
    batterySize: '',
    batteryCapacity: '',
    displaySize: '',
    processor: '',
    storage: '',
    ram: '',
    camera: '',
    connectivity: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoader();

    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setLoader(false);
        setSuccess(true);
        resetFormData();

        setTimeout(() => {
          setSuccess(false)
        }, 7000);

      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetFormData = () => {
    setFormData({
      productName: '',
      imageLink: '',
      category: '',
      subCategory: '',
      description: '',
      color: '',
      brand: '',
      batterySize: '',
      batteryCapacity: '',
      displaySize: '',
      processor: '',
      storage: '',
      ram: '',
      camera: '',
      connectivity: '',
    });
  };
  

  return (
    <>
        <div className="products-container">
      <div className="products">
        <div className='add'  onClick={handleAddProducts} >
            <h3>Add Product</h3>
        </div>
        <div className='remove'  onClick={handleRemoveProduct} >
            <h3>Remove Product</h3>
        </div>
      </div>

    {showAddProduct && (
        <form className="form" onSubmit={handleSubmit}>
        <div className='close' onClick={handleCloseProduct}>
          <button className='close-button'>&times; Close</button>
        </div>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Enter product name"
          value={formData.productName}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageLink">Image Link</label>
  
        <input
          type="text"
          id="imageLink"
          name="imageLink"
          placeholder="Enter the Link of the Image"
          value={formData.imageLink}
          onChange={handleChange}
          required
        />

      <a href='https://postimages.org/' target='_blank' rel="noreferrer" >Get Image Link Here</a>

        <label htmlFor="category">Choose Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="phones">Phones</option>
          <option value="accessories">Accessories</option>
        </select>

        <label htmlFor="subCategory">Choose SubCategory</label>
        <select
          id="subCategory"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select SubCategory</option>
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
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Enter color"
          value={formData.color}
          onChange={handleChange}
        />

        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Enter brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <label htmlFor="batterySize">Battery Size</label>
        <input
          type="text"
          id="batterySize"
          name="batterySize"
          placeholder="Enter battery size"
          value={formData.batterySize}
          onChange={handleChange}
        />

        <label htmlFor="batteryCapacity">Battery Capacity</label>
        <input
          type="text"
          id="batteryCapacity"
          name="batteryCapacity"
          placeholder="Enter battery capacity"
          value={formData.batteryCapacity}
          onChange={handleChange}
        />

        <label htmlFor="displaySize">Display Size</label>
        <input
          type="text"
          id="displaySize"
          name="displaySize"
          placeholder="Enter display size"
          value={formData.displaySize}
          onChange={handleChange}
        />

        <label htmlFor="processor">Processor</label>
        <input
          type="text"
          id="processor"
          name="processor"
          placeholder="Enter processor details"
          value={formData.processor}
          onChange={handleChange}
        />

        <label htmlFor="storage">Storage</label>
        <input
          type="text"
          id="storage"
          name="storage"
          placeholder="Enter storage capacity"
          value={formData.storage}
          onChange={handleChange}
        />

        <label htmlFor="ram">RAM</label>
        <input
          type="text"
          id="ram"
          name="ram"
          placeholder="Enter RAM size"
          value={formData.ram}
          onChange={handleChange}
        />

        <label htmlFor="camera">Camera</label>
        <input
          type="text"
          id="camera"
          name="camera"
          placeholder="Enter camera details"
          value={formData.camera}
          onChange={handleChange}
        />

        <label htmlFor="connectivity">Connectivity</label>
        <input
          type="text"
          id="connectivity"
          name="connectivity"
          placeholder="Enter connectivity options"
          value={formData.connectivity}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
   )}

      {removeProduct && (
          <form className='form'>
              <div className='close' onClick={handleCloseProduct}>
          <button className='close-button'>&times; Close</button>
        </div>
          <label htmlFor="camera">Product Name</label>
               <input
                 type="text"
                 id="productName"
                 name="productName"
                 placeholder="Enter product Name"
                 value={formData.productName}
                 onChange={handleChange}
                 required
               />
       
               <label htmlFor="connectivity">Product Id</label>
               <input
                 type="text"
                 id="connectivity"
                 name="productId"
                 placeholder="Enter The product Id"
                 value={formData.productId}
                 onChange={handleChange}
                 required
               />
                <button type="submit" className='remove' >Remove Product</button>
          </form>
      )}

   {loader && <Loader />}

   {success && <Success />}

    </div>

    </>

  
  );
}
