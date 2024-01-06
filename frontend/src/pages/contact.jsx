// Import necessary libraries and components
import React from 'react';
import '../styles/contact.css';
import { Header } from '../components/header';
import { MobileHeader } from '../components/mobileHeader';
import { useState } from 'react';
import { Success } from '../components/success';
import Footer from '../components/footer';

export function Contact({mobile, handleMobile}) {

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      const response = await fetch('/api/admin/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success, e.g., show success message or redirect
        setMessage(data.message);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false)
        }, 7000);
        resetFormData();
      } else {
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  
  
  
  return (
   <>
        <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
      
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Address: Sabuwar Kasuwa Dutse LGA, Jigawa State, Nigeria
        </p>
        <p>
          Phone: 07063978335 
        </p>
        <div className="social-media">
          <p>Connect with us on social media:</p>
         
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <h2>Leave a Message</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
      {success && <Success message={message} />}
    </div>

    <Footer />
   </>
  );
}
