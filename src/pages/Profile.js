import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>👤 User Profile</h2>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', marginTop: '1rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3>Account Information</h3>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Role:</strong> Doctor</p>
        </div>
        <button 
          onClick={logout}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#e74c3c', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
