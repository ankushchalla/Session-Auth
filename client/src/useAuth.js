import { useState, useEffect } from 'react';
import axios from 'axios';
export function useAuth() {
    const [isValidUser, setIsValidUser] = useState(false)
    useEffect(() => {
        axios.post('/login', {
            email: "ankush@gmail.com",
            password: "secrt"
        })
        .then(() => setIsValidUser(true))
        .catch(() => setIsValidUser(false))

    }, [])
    return isValidUser
}


