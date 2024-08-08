// pages/HealthcareProviderManagementPage.js

import React from 'react';
import Navigation from '../components/Navigation';
import './HealthcareProviderManagementPage.css'; // Make sure to create a CSS file for this component

const HealthcareProviderManagementPage = () => {
  // Dummy data for the healthcare providers
  const providers = [
    { id: 1, name: 'Dr. John Doe', email: 'john.doe@example.com', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', email: 'jane.smith@example.com', specialization: 'Pediatrics' }
  ];

  return (
    <div>
      <Navigation />
      <div className="provider-management-container">
        <h2>Healthcare Provider Management</h2>
        <table className="provider-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(provider => (
              <tr key={provider.id}>
                <td>{provider.name}</td>
                <td>{provider.email}</td>
                <td>{provider.specialization}</td>
                <td><button>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthcareProviderManagementPage;
