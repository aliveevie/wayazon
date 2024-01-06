import '../styles/showDetails.css';
import { useState } from 'react';

export function EditProductDetails({ currentData, handleEditButton }) {
  const [formData, setFormData] = useState({
    id:currentData.product_id,
    name: currentData.product_name,
    description: currentData.description,
    color: currentData.color,
    brand: currentData.brand,
    batterySize: currentData.battery_size,
    batteryCapacity: currentData.battery_capacity,
    displaySize: currentData.display_size,
    processor: currentData.processor,
    storage: currentData.storage,
    ram: currentData.ram,
    camera: currentData.camera,
    connectivity: currentData.connectivity,
    image_link: currentData.image_link
  });

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/products/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: currentData.id, // Assuming there's an ID field in your data
          ...formData,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Handle success, e.g., close modal or show success message
        setSuccess(responseData.message);
        setTimeout(() => {
          setSuccess('');
          handleEditButton(null); // Close modal or handle as needed
        }, 3000);
      } else {
        // Handle error, e.g., show error message
        console.error('Edit failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className='data-update'>{success}</p>
        <>
          <button className="remove" onClick={() => handleEditButton(null)}>
            &times; Close
          </button>
          <form onSubmit={handleSubmit}>
            <div className="details-container">

            <label htmlFor="color">Name:</label>
              <input type="text" id="color" name="name" 
              value={formData.name} onChange={handleChange} />

            
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>

              <label htmlFor="color">Color:</label>
              <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />

              <label htmlFor="brand">Brand:</label>
              <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />

              <label htmlFor="batterySize">Battery Size:</label>
              <input type="text" id="batterySize" name="batterySize" value={formData.batterySize} onChange={handleChange} />

              <label htmlFor="batteryCapacity">Battery Capacity:</label>
              <input type="text" id="batteryCapacity" name="batteryCapacity" value={formData.batteryCapacity} onChange={handleChange} />

              <label htmlFor="displaySize">Display Size:</label>
              <input type="text" id="displaySize" name="displaySize" value={formData.displaySize} onChange={handleChange} />

              <label htmlFor="processor">Processor:</label>
              <input type="text" id="processor" name="processor" value={formData.processor} onChange={handleChange} />

              <label htmlFor="storage">Storage:</label>
              <input type="text" id="storage" name="storage" value={formData.storage} onChange={handleChange} />

              <label htmlFor="ram">RAM:</label>
              <input type="text" id="ram" name="ram" value={formData.ram} onChange={handleChange} />

              <label htmlFor="camera">Camera:</label>
              <input type="text" id="camera" name="camera" value={formData.camera} onChange={handleChange} />

              <label htmlFor="connectivity">Connectivity:</label>
              <input type="text" id="connectivity" name="connectivity" value={formData.connectivity} onChange={handleChange} />

              <label htmlFor="image_link">Image Link:</label>
              <input type="text" id="image_link" name="image_link" value={formData.image_link} onChange={handleChange} />

              <button type="submit">Save Changes</button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}