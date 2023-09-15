import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/register', { username, password }); // Replace with your registration endpoint
      // Handle registration success (e.g., display a success message and navigate to login)
    } catch (error) {
      console.error(error);
      // Handle registration failure (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
