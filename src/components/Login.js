import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Navbar from "./Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { username, password });
      // Handle login success (e.g., set user data and navigate to the user's profile)
    } catch (error) {
      console.error(error);
      // Handle login failure (e.g., display an error message)
    }
  };

  const handleCreateAccount = () => {
    // Handle navigation or display registration form
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
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
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
          </form>
          <p>Don't have an account?</p>
          <button
            onClick={handleCreateAccount}
            className="create-account-button"
          >
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
