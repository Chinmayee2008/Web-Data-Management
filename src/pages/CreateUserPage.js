// pages/CreateUserPage.js

import React, { useState } from 'react';
import Navigation from '../components/Navigation'; // Make sure you have this component
import './CreateUserPage.css'; // CSS file for styling

const CreateUserPage = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your sign-up logic here, such as sending the data to a server
        console.log('User Details:', userDetails);
    };

    return (
        // pages/CreateUserPage.js
// ... (other imports and set
        <div className="signup-page">
            <Navigation />
            <div className="signup-form-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input type="text" name="firstName" placeholder="First Name" value={userDetails.firstName} onChange={handleChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={userDetails.lastName} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Re-enter Password" value={userDetails.confirmPassword} onChange={handleChange} required />
                    <select name="role" value={userDetails.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        {/* Add other roles as needed */}
                    </select>
                    <input type="date" name="dob" placeholder="Date of Birth" value={userDetails.dob} onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Address" value={userDetails.address} onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" value={userDetails.city} onChange={handleChange} required />
                    <input type="text" name="state" placeholder="State" value={userDetails.state} onChange={handleChange} required />
                    <input type="text" name="zipCode" placeholder="ZIP Code" value={userDetails.zipCode} onChange={handleChange} required />
                    <button type="submit">Signup</button>
                    <p className="login-link">Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>

    );
};

export default CreateUserPage;
