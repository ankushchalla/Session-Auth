import './App.css';

import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';
import { useAuth } from './useAuth';

export default function App() {
  useAuth();
  // Make a post request to server w/ proper credentials.

  // Cookie header gets automatically set.
  // Make GET request. If successful, display reponse. 
  return (
    <></>
  );
}


