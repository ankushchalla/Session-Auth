import './App.css';

import React from 'react';
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
    <h1>User authorized</h1>
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


