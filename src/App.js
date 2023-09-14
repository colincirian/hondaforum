// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PostList from './components/PostList';
import Registration from './components/Registration';
import Dashboard from './components/HomePage'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/posts" component={PostList} />
          <Route path="/register" component={Registration} />
          <Route path="/dashboard" component={Dashboard} /> {/* Add the dashboard route */}
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
