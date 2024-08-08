// pages/ContactUsPage.js
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './ContactUsPage.css'; // Import the corresponding stylesheet

const ContactUsPage = () => {
    // State for form inputs
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handles updating state for the form inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };

    // Handles the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission, such as sending data to a backend service
        alert('Form submitted. Check the console for the form data.');
        console.log(contact);
    };

    return (
        <>
            <Navigation />
            <div className="contact-page-container">
                <div className="contact-image-wrapper"></div>
                <div className="contact-form-wrapper">
                    <div className="contact-form-container">
                        <h1>Contact Us</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={contact.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter a valid email address"
                                value={contact.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Telephone Number"
                                value={contact.phone}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={contact.message}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsPage;