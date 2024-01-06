import '../styles/showDetails.css';
import { useState } from 'react';

export function EditMemberDetails({ currentData, handleEditButton }) {
  const [formData, setFormData] = useState({
    name: currentData.name,
    title: currentData.title,
    description: currentData.description,
    Image: currentData.image_link
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/editmember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: currentData.id, // Assuming there's an ID field in your data
          ...formData,
        }),
      });

      if (response.ok) {
        // Handle success, e.g., close modal or show success message
        console.log('Edit successful');
        handleEditButton(null);
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
        <button className="remove" onClick={() => handleEditButton(null)}>
          &times; Close
        </button>
        <form onSubmit={handleSubmit}>
          <div className="details-container">
          
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <label htmlFor="title">Image Link</label>
            <input type="text" id="title" name="title" value={formData.Image} onChange={handleChange} />



            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
