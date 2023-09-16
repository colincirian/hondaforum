import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Register.css';
import supabase from '../config/SupabseClient';
import { Link } from 'react-router-dom'; // Import Link

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegistration = async () => {
    try {
      // Step 1: Create a user account using Supabase authentication
      const { user, error } = await supabase.auth.signUp({ email: username, password });

      if (error) {
        console.error('Registration failed:', error.message);
        // Handle registration error (e.g., display an error message)
      } else {
        // Registration successful, user is now created
        console.log('User registered:', user);

        // Step 2: Navigate to another page (login) for additional user setup
        history.push('/login');
      }
    } catch (error) {
      console.error(error);
      // Handle unexpected errors
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="registration-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleRegistration} className="register-button">
          Register
        </button>

        {/* Back to Login Link */}
        <Link to="/login" className="back-to-login-button">
          Back to Login
        </Link>
      </form>
    </div>
  );
}

export default Registration;
