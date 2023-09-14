// Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch social media posts from Flask backend when the component mounts
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Social Media Dashboard</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
