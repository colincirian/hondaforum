import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import UserPost from './components/UserPost';
import Register from './components/Register';
import Dashboard from './components/HomePage'; 
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/posts" component={UserPost} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} /> 
          <Route path="/navbar" exact component={Navbar} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
