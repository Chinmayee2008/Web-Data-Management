import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure you have the corresponding CSS file

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations like clearing local storage
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">SmartHealth Hub</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">AboutUs</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {/* Conditional rendering depending on login status */}
        {localStorage.getItem('token') ? (
          <React.Fragment>
            <li><span className="navbar-text">Welcome Admin</span></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </React.Fragment>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
