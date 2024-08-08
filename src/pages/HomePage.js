// pages/HomePage.js

import React from 'react';
import Navigation from '../components/Navigation';
import './HomePage.css'; // Make sure this path is correct

// Import HeroSection if it exists and you want to use it
// import HeroSection from '../components/HeroSection';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            {/* Removed inline styles in favor of className */}
            <main className="main-content">
                <h2 className="vision-title">Vision of SmartHealth Hub</h2>
                <p className="vision-statement">
                    The SmartHealth Hub's vision is to empower individuals and healthcare 
                    professionals through data security, interoperability, and a user-friendly experience.
                </p>
                {/* If you have a button or a link you want to style as a button, apply the buttonStyle here */}
                <a href="/login" className="login-button">Login</a>
            </main>
            {/* Footer would go here */}
        </div>
    );
};

export default HomePage;
