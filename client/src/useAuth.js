import React, { useState, useEffect} from 'react';
import axios from 'axios';
// what does it do?
export function useAuth() {
    const [isValidUser, setIsValidUser] = useState(false)
    useEffect(async () => {
        const loginResponse = await login()
        isValidUser = loginResponse.status === 200
    })
    return isValidUser
}

function login() {
    return new Promise(resolve => {
        axios.post('/login', {
            email: "ankush@gmail.com", 
            password: "secret"
          })
          .then(resolve)
    })
}


