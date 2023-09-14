// UserProfile.js

import React, { useState } from 'react';
import axios from 'axios';

function UserProfile({ username, onUpdate }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('/update-profile', { newUsername, newPassword });
      if (response.data.message === 'Profile updated') {
        onUpdate(newUsername);
      } else {
        console.error('Profile update failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during profile update:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Current Username: {username}</p>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password (optional)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}

export default UserProfile;
