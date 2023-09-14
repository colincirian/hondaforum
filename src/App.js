import axios from 'axios';
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import PostList from './components/PostList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      setLoggedIn(true);
      setUsername(response.data.user.username);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegistration = () => {
    setRegistrationComplete(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <h3>Social Media Posts</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.content}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
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
          <button onClick={handleLogin}>Login</button>
          {!registrationComplete && (
            <button onClick={handleRegistration}>Register</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;