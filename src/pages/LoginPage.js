// pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: 'test@example.com', password: '123' });
    const [error, setError] = useState('');

    // Temporary hardcoded credentials for development purposes
    const tempUser = {
        email: 'admin@example.com',
        password: 'admin123'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if(credentials.email === tempUser.email && credentials.password === tempUser.password) {
            // Login is successful
            console.log('Login successful');

            // In a real app, you would want to replace this with a secure token received from your server.
            localStorage.setItem('token', 'dummy-token');

            // Navigate to the dashboard page after successful login.
            navigate('/dashboard');
        } else {
            // Login is not successful
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="login-page">
            <Navigation />
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={credentials.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
