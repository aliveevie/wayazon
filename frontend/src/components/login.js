// Login.jsx
import { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
      
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
      
        try {
          const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          const responseData = await response.json();
      
          if (response.ok) {
            // Handle successful login, e.g., redirect or set user state
            if(responseData.Failure==="Error"){
                setError('Invalid Username or Password!');
                setTimeout(() => {
                  setError(null)
                }, 5000);
            }else if(responseData.Failure==="Success"){
                navigate('/admin/dashboard'); // Redirect to '/admin/dashboard'
            }
          } else {
            // Handle login failure, e.g., show error message
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error submitting login:', error);
        }
      }
      

  return (
    <div className="login-container">
      <div className="login">
      <img className="logo" src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
     
        <h3>Login To Your Dashboard</h3>
            <label>
              <i className="fas fa-envelope"></i> Email
            </label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label>
              <i className="fas fa-lock"></i> Password
            </label>
            <input type="password" placeholder="Enter your password" name="password" />
            <button type="submit">Login</button>
            <p>{error}</p>
          </form>
      </div>
    </div>
  );
}
