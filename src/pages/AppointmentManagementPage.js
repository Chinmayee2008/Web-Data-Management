// pages/AppointmentManagementPage.js

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './AppointmentManagementPage.css'; // Ensure you have the corresponding CSS file

const AppointmentManagementPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    doctor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    // Here you would normally check for conflicts and only schedule if the slot is free
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ date: '', time: '', doctor: '' }); // Reset the form
  };

  return (
    <div>
      <Navigation />
      <div className="appointment-management-container">
        <h1>Appointment Management</h1>
        <form onSubmit={handleSchedule} className="appointment-form">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Doctor</label>
            <select
              id="doctor"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Brown">Dr. Brown</option>
            </select>
          </div>
          <button type="submit" className="btn schedule-button">
            Schedule
          </button>
        </form>

        <div className="appointments-list">
          {appointments.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.doctor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appointments scheduled.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagementPage;
