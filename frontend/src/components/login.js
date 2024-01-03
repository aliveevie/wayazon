// Login.jsx
import logo from '../images/logo.png';
import '../styles/login.css';
export function Login() {

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
      
          if (response.ok) {
            // Handle successful login, e.g., redirect or set user state
            console.log('Login successful');
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
        <h3>Login To Your Dashboard</h3>
        <form  onSubmit={handleSubmit} >
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
