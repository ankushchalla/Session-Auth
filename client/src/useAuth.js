import { useState, useEffect} from 'react';
import axios from 'axios';
export function useAuth() {
    const [isValidUser, setIsValidUser] = useState(false)
    useEffect(() => {
        function fetchLoginStatus() {
            axios.post('/login', {
                email: "ankush@gmail.com", 
                password: "secret"
              })
              .then(() => setIsValidUser(true))
              .catch(() => setIsValidUser(false))
        }
        fetchLoginStatus()
    }, [])
    return isValidUser
}


