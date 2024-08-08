import React from 'react';
import Navigation from '../components/Navigation';
import './UserManagementPage.css';

const UserManagementPage = () => {
    // Placeholder data for user list
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    ];

    return (
        <div className="user-management-page">
            <Navigation />
            <div className="user-management-container">
                <h1>User Management</h1>
                <table className="user-list">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="admin-actions">
                    <button className="admin-button activate">Activate User</button>
                    <button className="admin-button deactivate">Deactivate User</button>
                </div>
            </div>
        </div>
    );
};

export default UserManagementPage;
