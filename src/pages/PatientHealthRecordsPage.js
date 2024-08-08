import React from 'react';
import Navigation from '../components/Navigation'; // Assuming you have a navigation component
import './PatientHealthRecordsPage.css'; // Your CSS file for styling

const PatientHealthRecordsPage = () => {
    // Placeholder data - replace this with data from your backend
    const patients = [
        { id: 1, name: 'John Doe', age: 30, diagnosis: 'Hypertension', medication: 'Lisinopril', doctor: 'Dr. Smith' },
        { id: 2, name: 'Jane Smith', age: 25, diagnosis: 'Diabetes', medication: 'Insulin', doctor: 'Dr. Johnson' }
    ];

    return (
        <div className="patient-records-page">
            <Navigation />
            <h1>Patient Health Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Diagnosis</th>
                        <th>Medication</th>
                        <th>Doctor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.diagnosis}</td>
                            <td>{patient.medication}</td>
                            <td>{patient.doctor}</td>
                            <td><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientHealthRecordsPage;
