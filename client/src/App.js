import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useAuth } from './useAuth';

export default function App() {
  const isValidUser = useAuth();
  // Make a post request to server w/ proper credentials.

  // Cookie header gets automatically set.
  // Make GET request. If successful, display reponse. 
  return isValidUser ? <AuthorizedApp /> : <UnauthorizedApp />
}

function AuthorizedApp() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

function UnauthorizedApp() {
  return (
    <>
      <h1>User not authorized</h1>
    </>
  )
}

function Home() {
  return <h2>Authorized user in home.</h2>;
}

function About() {
  return <h2>Authorized user in about.</h2>;
}

function Users() {
  return <h2>Authorized user in users.</h2>;
}


