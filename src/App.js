// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import HealthcareProviderManagementPage from './pages/HealthcareProviderManagementPage';
import AppointmentManagementPage from './pages/AppointmentManagementPage';
import PatientHealthRecordsPage from './pages/PatientHealthRecordsPage';
import CommunityInteractionPage from './pages/CommunityInteractionPage';








function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} /> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-user" element={<CreateUserPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />  
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/user-management" element={<UserManagementPage />} /> 
                <Route path="/healthcare-provider-management" element={<HealthcareProviderManagementPage />} />
                <Route path="/appointment-management" element={<AppointmentManagementPage />} />
                <Route path="/patient-health-records" element={<PatientHealthRecordsPage />} />
                <Route path="/community-interactions" element={<CommunityInteractionPage />} />
                
                
            </Routes>
        </Router>
    );
}

export default App;
