import './App.css';

import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

export default function App() {
  const [user, setUser] = useState({})
  // Make a post request to server w/ proper credentials.
  useEffect(() => {
    axios.post('/login', {
      email: "ankush@gmail.com", 
      password: "secret"
    }).then(res => {
      axios.get('/home').then(response => {
        console.log("response: " + response.message);
      })
    })
  })
  // Cookie header gets automatically set.
  // Make GET request. If successful, display reponse. 
  return (
    <></>
  );
}


