// Import necessary libraries and components
import React from 'react';
import '../styles/contact.css';

export function Contact() {
  return (
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
          {/* Add your social media icons/links here */}
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="contact-form">
        <h2>Leave a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
