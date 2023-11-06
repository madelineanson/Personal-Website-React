import React from 'react';
import './UserProfile.css';

const UserProfile = ({ userData }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <p>{userData.bio}</p>
    </div>
  );
};

export default UserProfile;