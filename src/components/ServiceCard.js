// components/ServiceCard.js

import React from 'react';
import './ServiceCard.css'; // Make sure to create a ServiceCard.css file for styles

const ServiceCard = ({ title, imageUrl }) => {
    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} className="service-image" />
            <div className="service-info">
                <h3 className="service-title">{title}</h3>
            </div>
        </div>
    );
};

export default ServiceCard;
