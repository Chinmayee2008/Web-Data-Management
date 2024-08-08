// components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#004d99', // You can adjust the color to match your theme
        padding: '10px',
        color: 'white'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px'
    };
    const handleBlogClick = () => {
        window.location.href = 'http://vxk4086.uta.cloud/SamrtHealth-hub-blog/'; // Use the full URL to your external blog
      };

    return (
        <nav style={navStyle}>
            <h1>SmartHealth Hub</h1>
            <div>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about-us" style={linkStyle}>AboutUs</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                <Link to="/contact-us" style={linkStyle}>Contact Us</Link>
                <Link to="/blog" style={linkStyle} onClick={handleBlogClick}>Blog</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
            </div>
        </nav>
    );
};

export default Navigation;
