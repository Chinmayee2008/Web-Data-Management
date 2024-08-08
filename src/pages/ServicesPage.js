// pages/ServicesPage.js

import React from 'react';
import Navigation from '../components/Navigation'; // Assuming this is your navigation component
import './ServicesPage.css'; // Make sure you create this CSS file

const ServicesPage = () => {
    return (
        <div className="services-page">
            <Navigation />
            <div className="services-container">
                <div className="service-card">
                    <img src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/621/2022/12/istockphoto-1319031310-612x612-1.jpg" alt="Doctor Consultation" />
                    <h3>Doctor Consultation</h3>
                </div>
                <div className="service-card">
                    <img src="https://www.healthcareitnews.com/sites/hitn/files/mobile_prescription.jpg" alt="E-Prescription" />
                    <h3>E-Prescription</h3>
                </div>
                <div className="service-card">
                    <img src="https://info.nhanow.com/hs-fs/hubfs/Med-bay.jpg?width=8207&name=Med-bay.jpg" alt="Pharmacy" />
                    <h3>Pharmacy</h3>
                </div>

                <div className="service-card">
                    <img src="https://bloximages.newyork1.vip.townnews.com/minstercommunitypost.com/content/tncms/custom/image/bec77204-c614-11ea-bb03-13d3f16a2379.jpg?resize=600%2C315" alt="Pharmacy" />
                    <h3>Community Post</h3>
                </div>

                <div className="service-card">
                    <img src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22064_16436342404173431.jpg" alt="Pharmacy" />
                    <h3>Symptom Checker</h3>
                </div>

                <div className="service-card">
                    <img src="https://st5.depositphotos.com/63038190/64724/v/450/depositphotos_647240550-stock-illustration-doctor-appointment-icon-medical-icon.jpg" alt="Pharmacy" />
                    <h3>Doctor's Appointment</h3>
                </div>
                {/* Add more service cards as needed */}
            </div>
        </div>
    );
};

export default ServicesPage;
